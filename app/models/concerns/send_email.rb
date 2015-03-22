require 'active_support/concern'

module SendEmail
  extend ActiveSupport::Concern

  included do
    after_create :send_notification
  end

private

  def send_notification
    ActionMailer::Base.mail(:to => AdminUser.all.map(&:email), :from => "info@t20.com",:subject => "New #{self.class.to_s}ship Request", :body => "Hi Admin,\n SomeOne requested to join T20 as #{self.class.to_s} \n\n Name: #{self.full_name} \n\n Email: #{self.email} \n\n\n Address: #{self.address} \n\n\n Cheers \n T20 Team").deliver
  end

end
