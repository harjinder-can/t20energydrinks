class DistributersController < ApplicationController
  
  def create
    Distributer.create(params[:distributer].permit!)
    redirect_to :back
  end
  
end
