class Notification < ActiveRecord::Base
  belongs_to :trackable, :polymorphic => true
  
  def message
    case trackable_type
    when "Member"
      "#{trackable.full_name} joined the MemberShip of T20"
    when "Distributer"
      "#{trackable.full_name} joined the DistributionShip of T20"
    end
  end
  
  def news
    case trackable_type
    when "Member"
      "New Membership"
    when "Distributer"
      "New Distributionship"
    end
  end
  
end
