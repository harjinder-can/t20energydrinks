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
  end
  
  def team
    @distributers = Distributer.where(:approve => true)
    @members = Member.where(:approve => true)
  end

  def updates
    @updates = Update.all
  end
end