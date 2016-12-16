 def destroy
  @pirate = Pirate.destroy(params['id'])
  @pirate.destroy
  redirect_to(:back)

end
