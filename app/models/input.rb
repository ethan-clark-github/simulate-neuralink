class Input < ApplicationRecord
    has_many :functions, dependent: :destroy
    has_many :outputs, through: :functions

    validates :name, presence: true
end
