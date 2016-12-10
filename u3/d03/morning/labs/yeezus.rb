kanye_records = [
{ year: 2016, title: "The Life of Pablo" },
{ year: 2013, title: "Yeezus" },
{ year: 2011, title: "Watch the Throne" },
{ year: 2010, title: "My Beautiful Dark Twisted Fantasy" },
{ year: 2008, title: "808s and Heartbreak" },
{ year: 2007, title: "Graduation" },
{ year: 2005, title: "Late Registration" },
{ year: 2004, title: "The College Dropout" }
]

#1
kanye_records.each {|x| puts x[:title] if x[:year] > 2007}
#this does the same as code on line 13
# kanye_records.each do |x|
#   if [:year] > 2007
#     puts x[:title]
#   end
# end

#2
kanye_records.each {|x| puts x[:year]}

#3
kanye_records.unshift({year: 2017, title: "fuck off"})
p kanye_records

#4
kanye_records.each do |x|
  puts "#{x[:title]}" "was released"  "#{[:year]}"

  #5 add a label key with the value Def Jam
kanye_records.each do |x|
  x[:label] = "Def Jam"
end

kanye_records.each do |x|
  x[:label] = "Def Jam"
  print "thats a long title" if x[:title].length > 15
end

#6

kanye_records.each do |x|
puts x[:title].gsub("o", "0")
end
puts kanye_records

