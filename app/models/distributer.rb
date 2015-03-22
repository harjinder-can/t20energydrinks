class Distributer < ActiveRecord::Base
  include Notifier
  include SendEmail
  has_one :notification, as: :trackable, :dependent => :destroy
end
