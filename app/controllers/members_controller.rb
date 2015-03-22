class MembersController < ApplicationController
  
  def create
    Member.create(params[:member].permit!)
    redirect_to :back
  end
  
end
