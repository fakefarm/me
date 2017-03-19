# LIBRARY

class Library
  def initialize
    @games = []
  end

  def add_game(game)
    @games << game
  end

  def find_by_name(name)
    @games.detect { |game| game.name == name }
  end

  def find_by_tag(tag)
    @games.select { |game| game.tags.include?(tag) }
  end
end

# GAME

class Game
  attr_reader :name, :tags

  def initialize(name)
    @name = name
    @tags = []
  end

  def year(value)
    @year = value
  end

  def system(value)
    @system = value
  end

  def print_details
    puts "#{@name} - #{@year} (#{@system})"
  end

  def capture_screenshot
    puts "Grabbing a screenshot for #{@name}"
  end

  def play
    if @system == "SNES"
      raise "No emulator for SNES games"
    else
      puts "Starting #{@name}"
    end
  end

  def method_missing(method_name, *args)
    @tags << method_name.to_s
  end
end

# GAME_DSL


LIBRARY = Library.new

def add_game(name, system = nil, year = nil, &block)
  game = Game.new(name)
  game.system(system) if system
  game.year(year) if year
  game.instance_eval(&block) if block_given?
  LIBRARY.add_game(game)
end

def with_game(*names, &block)
  names.each do |name|
    game = LIBRARY.find_by_name(name)
    game.instance_eval(&block)
  end
end

def with_games_tagged(tag, &block)
  games = LIBRARY.find_by_tag(tag)
  games.each do |game|
    game.instance_eval(&block)
  end
end

# USE CASE:

add_game("Civilization", "PC", 1991) { strategy turn_based }
add_game("Contra", "NES", 1987) { strategy turn_based }
add_game("The Legend of Zelda", "NES", 1986) { action rpg }
add_game("Mega Man X2", "SNES", 1995) { action }
add_game("Super Metroid", "SNES", 1994) { adventure platformer }
add_game("Sim City 2000", "PC", 1993) { strategy simulation }
add_game("Starcraft", "PC", 1998) { realtime strategy }

with_games_tagged "action" do
  print_details
end

with_game "Contra", "Sim City 2000" do
  capture_screenshot
end

with_game "Starcraft" do
  play
end