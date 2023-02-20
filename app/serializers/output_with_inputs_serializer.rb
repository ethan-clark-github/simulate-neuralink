class OutputWithInputsSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :inputs
end
