class CreateOutputs < ActiveRecord::Migration[6.1]
  def change
    create_table :outputs do |t|
      t.string :name

      t.timestamps
    end
  end
end
