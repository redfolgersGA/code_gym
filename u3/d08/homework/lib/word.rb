class Word

def initialize(word)
 @word = word
end

def to_pig

 if @word.start_with?('a','e','i','o','u')
     @word + "way"
   else
     vowels = ['a','e','i','o']
      three = ['s','q','u']
     new_word = @word.split("")
     if three.include?(new_word[0]) && three.include?(new_word[1]) && three.include?(new_word[2])
       new_word.rotate!(3)
       new_word.join + "ay"
     elsif !vowels.include?(new_word[0]) && !vowels.include?(new_word[1])
       new_word.rotate!(2)
       new_word.join + "ay"
     else !vowels.include?(new_word[0])
       new_word.rotate!(1)
       new_word.join + "ay"
     end
   end
 end
end
