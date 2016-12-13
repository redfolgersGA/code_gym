class CheesesController < ApplicationController
  def index
    # cheese here is getting more than one
    @cheeses = Cheese.all
  end

def show
# cheese here will get us only one cheese

  @cheese = Cheese.find_by(id: params[:id])


end
 def new
    @cheese = Cheese.new
    redirect_to(:back)
  end

  def create
    @cheese = params['cheese']

    Cheese.create(name: @cheese['name'],
                 milk_type: @cheese['milk_type'],
                 image_url: @cheese['image_url'],
                 description: @cheese['description'])
    redirect_to(:back)
  end

 def destroy
  Cheese.destroy(params['id'])
  redirect_to(:back)
end

def update
  cheese = params['cheese']
  Cheese.update(params[:id],
    name: cheese['name'],
    milk_type: cheese['milk_type'],
    image_url: cheese['image_url'],
    description: cheese['description'])
  redirect_to(:back)
end

def edit
    id = params[:id]
    @cheese = Cheese.find(id)

  end






end






