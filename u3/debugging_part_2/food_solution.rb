# require "byebug"

# class Food
#   def editable
#     response = true
#     puts "editable? - #{response}"
#   end
# end

# class HotFood < Food
#   def temp
#     puts "hot"
#   end
# end

# a = Food.new
# a.editable

# casserole = HotFood.new
# casserole.temp
# casserole.editable

# class Array
#   def say_things
#     self.each do |x|
#       puts "#{x}!"
#     end
#   end
# end

# [1,3,4].say_things

require byebug

class Food
  def editable
    response = true
    puts "editable? - ${response}"
  end
end

class HotFood < Food
  def temp
    puts "hot"
  end
end

class Array
  def say_things
    Self.each do |x|
      puts x
    end
  end
end

Food.editable
