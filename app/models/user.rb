class User < ApplicationRecord
  # Include default devise modules.
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable, :confirmable, :omniauthable

  include DeviseTokenAuth::Concerns::User
  
  validates :first_name, presence: true
  validates :last_name, presence: true
end
