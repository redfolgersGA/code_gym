module Debugging
  require "byebug"

  class TemperatureCalculator
    def get_degrees_c degrees_f
      offset = 32
      factor = 5.0/9.0
      result = factor * (degrees_f - offset)
      puts result
    end
  end

  my_temp_calc = TemperatureCalculator.new

  my_temp_calc.get_degrees_c 212


  # read the error
  # think about the error
  # use debugging tools
  # google the error

  # # buggy version
  # require byebug
  #   #1. <= missing quotes - solve by just running the file

  # class TemperatureCalculator
  #   def get_degrees_c degrees_f
  #     offset = 32
  #     factor = 5/9
  #       #3. <= needs to be a floating point number (5.0/9.0)
  #         # add byebug below result assignment
  #         # use byebug and puts to test offset, then factor... 5/9 is not zero
  #         # need to make them floating numbers
  #     result = factor * (degrees_f + offest)
  #       #2. <= offset mispelled
  #       #4. <= needs to be deg - off, not addition
  #         # use byebug to find value of result
  #         # google conversion to fix error
  #     puts result
  #   end
  # end

  # my_temp_calc = TemperatureCalculator.new
  # my_temp_calc.get_degrees_c 212

end # ends module
