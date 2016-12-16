class CreatePirates < ActiveRecord::Migration[5.0]
  def change
    create_table :pirates do |t|
      t.string :name
      t.string :sea
      t.string :ship_name
      t.integer :limbs
      t.boolean :left_eye

      t.timestamps
    end
  end
end
