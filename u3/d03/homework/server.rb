module Sinatra
    class Server < Sinatra::Base
    get "/" do

      compliments = [
  "People behind you in class think you are the perfect height.",
  "Your instructors think you're amazing.",
  "Your posture during breaks effectively masks your exhaustion.",
  "Your commit messages are an inspiration to us all",
  "Your fingers are magic on the keys",
  "You are the moon of my life...my sun and stars",
  "Your ability to recall random factoids at just the right time is impressive.",
  "If you were a box of crayons, you'd be the giant name-brand one with the built-in sharpener.",
  "You're a candle in the darkness.",
  "You're always learning new things and trying to better yourself, which is awesome.",
  "If someone based an Internet meme on you, it would have impeccable grammar.",
  "You could survive a Zombie apocalypse."
]

@compliment = compliments[rand(compliments.size)]
      erb :index
    end

    get "/:name" do
        @name = params[:name]
        name = @name.capitalize
      compliments = [
  "People behind you in class think you are the perfect height.",
  "Your instructors think you're amazing.",
  "Your posture during breaks effectively masks your exhaustion.",
  "Your commit messages are an inspiration to us all",
  "Your fingers are magic on the keys",
  "You are the moon of my life...my sun and stars",
  "Your ability to recall random factoids at just the right time is impressive.",
  "If you were a box of crayons, you'd be the giant name-brand one with the built-in sharpener.",
  "You're a candle in the darkness.",
  "You're always learning new things and trying to better yourself, which is awesome.",
  "If someone based an Internet meme on you, it would have impeccable grammar.",
  "You could survive a Zombie apocalypse."
]

@compliment = compliments[rand(compliments.size)]
@nameTest = "Greetings, #{name}. "
      erb :index
    end
end
end
