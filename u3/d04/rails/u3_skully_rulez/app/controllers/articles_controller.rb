class ArticlesController < ApplicationController
  def index
    # article here is geting more than one
    @articles = Article.all
  end

  def show
    # article here will get us only one thing the show route will only give us one thing
    id =params[:id]
    @article = Article.find(id)
  end
end
