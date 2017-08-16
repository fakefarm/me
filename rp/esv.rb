#!/usr/local/bin/ruby
# Richard Kilmer

puts "Welcome to ESV bible passage lookup."
puts "Enter the passage (i.e. Rom 3:15-20) or 'exit' to end."

require 'net/http'

class ESV
  def initialize(key)
    @options = ["include-short-copyright=0",
                "output-format=plain-text",
                "include-passage-horizontal-lines=0",
                "include-heading-horizontal-lines=0"].join("&")
    @base_url = "http://www.esvapi.org/v2/rest/passageQuery?key=#{key}"
  end

  def doPassageQuery(passage)
    passage = passage.gsub(/\s/, "+")
    passage = passage.gsub(/\:/, "%3A")
    passage = passage.gsub(/\,/, "%2C")
    get_url @base_url +
             "&passage=#{passage}&#{@options}"
  end
  
  private

  def get_url(url)
    Net::HTTP.get(::URI.parse(url))
  end
end

bible = ESV.new(ARGV[0] || 'IP')

while(true)
  print 'Passage> '
  passage = gets.strip
  unless passage==""
    exit if passage=="exit" || passage=="quit"
    puts bible.doPassageQuery(passage)
  end
end
