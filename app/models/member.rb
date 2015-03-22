class Member < ActiveRecord::Base
  include Notifier
  has_one :notification, as: :trackable, :dependent => :destroy
end
