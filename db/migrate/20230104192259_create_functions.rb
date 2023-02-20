class CreateFunctions < ActiveRecord::Migration[6.1]
  def change
    create_table :functions do |t|
      t.string :name
      t.string :category
      t.integer :input_id
      t.integer :output_id

      t.timestamps
    end
  end
end
