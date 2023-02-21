class FunctionWithInputsSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :input_id, :output_id
  has_one :input
  has_one :output
end
