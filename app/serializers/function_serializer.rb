class FunctionSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :input_id, :output_id, :user_id
 
end
