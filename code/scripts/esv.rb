require 'open-uri'
require 'nokogiri'

BOOK = ARGV[0]
CHAPTER_START = ARGV[1]
CHAPTER_END = ARGV[2]

unless File.directory?(BOOK)
  Dir.mkdir(BOOK)
end


chapters = CHAPTER_START..CHAPTER_END

chapters.each do |chapter|
  doc = Nokogiri::HTML(open("https://www.bible.com/bible/59/#{BOOK}.#{chapter}.ESV"))
  source = doc.at('source').attributes['src'].value
  source[2..-1]
  `curl #{source[2..-1]} --output ./#{BOOK}/#{BOOK}_#{chapter}.mp3`
  sleep 0.5
end
