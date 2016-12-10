Rails.application.routes.draw do
 # root to: is like doing app.get("/") in Javascript
  root to: "articles#index"

# we can do everything down there with JUST ONE, yes one! line of code
# this is an expression not a method that creates these routes
# :article :dogs are symbols and the only: is a hash
resources :article, only: [:index, :show]
# resources :users, except: [:destroy, :update]
end

# a ruby has is a collection of data that is a key value pair
# { :key => "value"} is the equivalent to this:
# { key: "value" }






  # first resource called articles
# get "/articles", to: "articles#index"
# get "/articles/:id", to: "articles#show"
# post "/articles", to: "articles#create"
# put "/articles/:id", to: "articles#update"
# delete "/articles/:id", to: "articles#destroy"
# get "/articles/new", to: "articles#new"
# get "articles/:id/edit", to: "articles#edit"
# end

# the one we care about here is line 2 it is the function that is
# associated with that route. it is the method that handles this request
# in ruby there are no functions heres the route were gonna send that request to articles/index
#controller is a class that hold the methods for a particular resource
# app/controllers/articles_controller.rb is created on the commandline with rails g controller articles
# convention over configuration
#  in our articles.controller we need to make a def index method
# this is the second resource
# get "/users", to: "users#index"
# get "/users/:id", to: "users#show"
# post "/users", to: "users#create"
# put "/users/:id", to: "users#update"
# delete "/users/:id", to: "users#destroy"
# get "/users/new", to: "users#new"
# get "users/:id/edit", to: "users#edit"
# end

# Command line interface CHEAT SHEET
# [rails]CLI tool
# rails now <project name>
# rails generate controller <controller name>
# rails g...
# rails server
# rails routes

