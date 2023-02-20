class InputWithOutputsSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :outputs
end
