class User < ApplicationRecord
  # Include default devise modules.
  devise  :database_authenticatable, :registerable, :recoverable, :rememberable,
          :trackable, :validatable, :confirmable, :omniauthable

<<<<<<< HEAD
  validates :first_name, :last_name, presence: true
=======
  include DeviseTokenAuth::Concerns::User
  validates :first_name, presence: true
  validates :last_name, presence: true
>>>>>>> Configuring devise_token_auth making rollback
end
