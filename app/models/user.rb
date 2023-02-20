class User < ApplicationRecord

    has_many :functions

    has_secure_password
end
