class AddPhoneNumber < ActiveRecord::Migration
  def change
    add_column :distributers, :phone_number, :string
    add_column :members, :phone_number, :string
  end
end
