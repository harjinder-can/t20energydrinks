class CreateDistributers < ActiveRecord::Migration
  def change
    create_table :distributers do |t|
      t.string :email
      t.boolean :approve, :default => false
      t.string :first_name
      t.string :last_name
      t.text :address

      t.timestamps
    end
  end
end
