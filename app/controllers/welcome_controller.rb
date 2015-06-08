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
    ActionMailer::Base.mail(:to => AdminUser.all.map(&:email), :from => "t20drinks.india@gmail.com",:subject => "Contact Request from #{params[:name]}", :body => params[:message]).deliver
    flash[:notice] = "Message sent successfully."
    redirect_to :back
  end
  
  def team
    @distributers = Distributer.where(:approve => true)
    @members = Member.where(:approve => true)
  end

  def updates
    @updates = Update.all
  end
end