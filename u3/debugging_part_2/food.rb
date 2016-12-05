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

