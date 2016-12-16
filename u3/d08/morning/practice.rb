class Dog
  def Dog.bark
    puts "Bark!"
  end
end

print Dog.bark

spongebob_characters = ["Sandy Cheeks", "Mr. Krabs", "Plankton", "Mrs. Puff"]

puts spongebob_characters << "Patrick Star"

class Cars
  attr_accessor :make, :model, :year, :color, :miles
  def initialize(make, model, year, color)
    @make = make
    @model = model
    @year = year
    @color = color
    @miles = 0

end


  def seen_another_year(miles)
    @miles = 15000

  end
end

  car = Cars.new("Toyota", "Corolla", "2017", "black")
  puts car
  puts car.seen_another_year
  puts

















