class Function < ApplicationRecord
    belongs_to :input
    belongs_to :output
    belongs_to :user

    validates :name, presence: true
    validates :category, presence: true
end
