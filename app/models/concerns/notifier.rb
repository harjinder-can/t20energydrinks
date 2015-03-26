require 'active_support/concern'

module Notifier
  extend ActiveSupport::Concern

  included do
    after_update :create_notification
  end

  def full_name
    [first_name.to_s.titleize, last_name.to_s.titleize].compact.join(" ")
  end

private

  def create_notification
    if(approve_changed?)
      if approve
        Notification.find_or_create_by_trackable_type_and_trackable_id(self.class.to_s, self.id)
      else
        Notification.where(:trackable => self).first.try(:destroy)
      end
    end
  end

end
