#a variable named secret_number is assigned the number 7
SECRET_NUMBER = 7
#a variable named guessed is assigned the boolean value of false
guessed = false

#adds this string
puts('I\'m thinking of a number between 1 and 10. Can you guess it?')
#while guessed is equal to the boolean false
while !guessed
  #a variable declared called guess that is assigned a method that does something
  guess = gets.chomp.to_i
  #a condition where the secret_number variable is equal to guess
  if SECRET_NUMBER == guess
    #if that condition is true then guessed gets reassigned the true boolean value
    guessed = true
    #if the above condition does not exist then
  else
    #display the guess is false try again in the console
    puts("#{guess}? Try again!")
    #ends if statement
  end
  #ends entire block of code
end

$stdout.puts('Great job!')
