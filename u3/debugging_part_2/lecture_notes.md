# debugging - talk about it	

#### puts debugging - show how to use it
#### byebug gem - show how to use it

# debugging steps
#### 1. read the fucking error
#### 2. think about the fucking error
#### 3. Google the fucking error
#### 4. Use the fucking debugging tools (byebug and puts)
#### Repeat. Make them repeat

# 3 parts of an error
## Error: lib/a_name_error.rb:3:in `<main>': undefined local variable or method `hello_world' for main:Object (NameError)
#### 1. where -> lib/a_name_error.rb:3:in `<main>': -> tells you what file and what line number
#### 2. why -> undefined local variable or method `hello_world' for main:Object -> tells you whats wrong
#### 3. who -> (NameError) -> what type of error this is

* temperature class walkthrough - 30 min
* 10 minute break

# common ruby errors
### undefined local variable or method `hello_world' for main:Object (NameError) 
##### => A NameError exception is thrown when you try to use a variable or method that hasn't been defined.
#### => usually means the thing that is calling the method is undefined, not the method itself

### unexpected end, expecting keyword end
##### => usually means we are missing an 'end' in our file 

### NameError: uninitialized constant UnloadedClass
##### => "Uninitialized constant" means that Ruby is trying to find a class (or other constant), but didn't find it. This could be because of a class name typo, or often because we forgot to require the Ruby file that loads the class.

### ArgumentError: wrong number of arguments (1 for 0)
##### => means we've passed in the wrong number of arguments for a method. if the method is expecting 2 arguments but we only pass one when we call it, the error will be (1 for 2)

* food class exercise - 30 min 
* food class review - 30 min

# writing good code - avoiding bugs
#### 1. think about how to solve the problem
#### 2. single responsiblity princple
#### 3. DRY princple
#### 4. read the code you wrote before you run it. does it make sense? look for syntax errors
