class AddUserToFunction < ActiveRecord::Migration[6.1]
  def change
    add_column :functions, :user_id, :integer
  end
end
