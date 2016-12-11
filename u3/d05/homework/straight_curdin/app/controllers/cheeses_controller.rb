class CheesesController < ApplicationController
  def index
    # cheese here is getting more than one
    @cheeses = Cheese.all
  end

def show
# cheese here will get us only one cheese
  id =params[:id]
  @cheese = Cheese.find(id)
end
end

