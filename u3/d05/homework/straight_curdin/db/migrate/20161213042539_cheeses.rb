class Cheeses < ActiveRecord::Migration[5.0]
  def change
    add_column :cheeses, :stank_level, :integer, :default => 0
  end
end
