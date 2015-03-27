class CreateUpdates < ActiveRecord::Migration
  def change
    create_table :updates do |t|
      t.string :subject
      t.text :message

      t.timestamps
    end
  end
end
