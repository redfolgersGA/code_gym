class RocksController < ApplicationController
def index

  @rocks = Rock.all

end

def show
  @rock = Rock.find_by(id: params[:id])
end
# for each method in the controller(action) there is a corresponding view
def edit
  id = params[:id]
  @rock = Rock.find(id)
end

def update
  rock = params['rock']
  Rock.update(params[:id],
    name: rock['name'],
    description: rock['description'],
    image: rock['image'])

  redirect_to(:back)
end

def destroy
  Rock.destroy(params['id'])
  redirect_to(:back)

end

























end
