class Car
    # makes getter and setter methods for all these properties

  attr_accessor :make, :model, :year, :color, :miles

# blueprint...when you create a new object it comes with these properties
  def initialize(make, model, year, color)
    @make = make
    @model = model
    @year = year
    @color = color
    @miles = 0
end


  def seen_another_year
    @miles += 15000
    end

  def details
   msg = puts "This #{@year} #{@make} #{model} has #{@miles} miles on it"
   additional_msg = ", and that #{@color} paint is really fading"
  #  if @miles <= 50000
  #   # puts msg + additional_msg producing an error research if statements in rubys
  # end

# this is a ternary statement same exact thing as the if else statement
# it has three parts
# @miles <= 50000 ? msg : msg + additional_msg

end

end
# methods can call other methods
def time_for_new_paint(new_color)
  @color = new_color
  ahh_fresh_paint
end

def ahh_fresh_paint
  puts "The new #{@color} color was a good choice"
end

 car1 = Car.new("Maserati", "GranTurismo", 2017, "blue")

p car1.make
p car1.model
p car1.year
p car1.color
p car1.miles
p car1.seen_another_year
p car1.details
p car1.time_for_new_paint




