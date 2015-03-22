class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
      t.references :trackable, :polymorphic => true

      t.timestamps
    end
  end
end
