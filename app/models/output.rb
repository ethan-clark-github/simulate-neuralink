class Output < ApplicationRecord
    has_many :functions, dependent: :destroy
    has_many :inputs, through: :functions

    validates :name, presence: true
end
