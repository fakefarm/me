File.open("bp_export_2-17.xml", 'w+') do |f|
   f.each_line do |l|
     puts l
 end
end

File.readlines("./bp_export_2-17.xml").each do |line|
  puts line
end
