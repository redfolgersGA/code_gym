class Calculator
  def add(a, b)
    a + b
  end

  def substract(a, b)
    a - b
  end
  def power(a, b)
    a**b
  end
  def sum(arr)
  arr.reduce(0) {|prev, curr| prev + curr }
  end

  def multiply(*args)
    args.reduce(1) {|prev, curr| prev * curr }

  end

  def factorial(num)
    1 if num <= 1
  end

end
