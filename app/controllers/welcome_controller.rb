class WelcomeController < ApplicationController
  def home
  end
  
  def about
  end

  def project
  end

  def contacts
  end
  
  def contact_form
    ActionMailer::Base.mail(:to => AdminUser.all.map(&:email), :from => "harjindersidhu12@gmail.com",:subject => "Contact Request from #{params[:name]}", :body => params[:message]).deliver
    render json: { status: "ok", message: "Sent Message"}
  end
  
  def team
    @distributers = Distributer.where(:approve => true)
    @members = Member.where(:approve => true)
  end

  def updates
    @updates = Update.all
  end
end