# 1
# spongebob_characters = ["Sandy Cheeks", "Mr. Krabs", "Plankton", "Mrs. Puff"]

# spongebob_characters<<"Patrick Star" <<"Slutty Sandy" <<"mother fucker jones 2"
# puts spongebob_characters


# 2
# krusty_krab_employees = ["Spongebob Squarepants", "Patrick Star", "Squidward Tentacles"]

# bikini_bottom_residents = ["Gary", "Spongebob Squarepants", "Larry the Lobster", "Patrick Star", "Squidward Tentacles"]

# swag_bob = krusty_krab_employees & bikini_bottom_residents
# puts swag_bob

# 3 cycle is like (times) or a (loop)

# im_ready = ["IIIIII'm READY!", "I'm ready", "I'm ready, I'm ready", "I'M READY!"]

# im_ready.cycle(3) { |x| puts x }

#4
# bikini_bottom_residents = ["Gary", "Spongebob Squarepants", "Larry the Lobster", "Patrick Star", "Squidward Tentacles"]

# ass = bikini_bottom_residents.rindex("Gary")
# ass2 = bikini_bottom_residents.rindex("Larry the Lobster")

# puts ass
# puts ass2

# 5
# krusty_krab_employees = ["Spongebob Squarepants", "Patrick Star", "Squidward Tentacles"]

# bikini_bottom_residents = ["Gary", "Spongebob Squarepants", "Larry the Lobster", "Patrick Star", "Squidward Tentacles"]

# bitches = krusty_krab_employees|bikini_bottom_residents
# puts bitches

# 6
# spongebob_characters = ["Sandy Cheeks", "Mr. Krabs", "Plankton", "Mrs. Puff"]

# slick = spongebob_characters.first()
# puts slick

# rick = spongebob_characters.last()
# puts rick

# pick = spongebob_characters.index("Sandy Cheeks")
# puts pick

# 7
bikini_bottom_residents = ["Gary", "Spongebob Squarepants", "Larry the Lobster", "Patrick Star", "Squidward Tentacles"]
# 3 solutions!!!
puts bikini_bottom_residents_residents.sort { |a, b| a [length-1] <=> b [length-1]}
puts bikini_bottom_residents.sort { |a, b| a[-1] <=> b[-1]}
puts bikini_bottom_residents.sort_by { |x| x[-1]}


# 8
im_ready = ["IIIIII'm READY!duck", "I'm readycook", "I'm ready, I'm readybitch", "I'M READY ass!"]

puts im_ready[-1]
puts im_ready[-2]
puts im_ready[-3]
puts im_ready[-4]

for i in ((-bikini_bottom_residents.length)..-1)
  puts bikini_bottom_residents[i]
end

puts im_ready.values_at(-1, -2, -3, -4)



