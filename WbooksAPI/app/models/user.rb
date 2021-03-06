class User < ApplicationRecord
  include DeviseTokenAuth::Concerns::User
  devise  :database_authenticatable, :registerable, :recoverable, :rememberable,
          :trackable, :validatable # , :confirmable, :omniauthable

  has_many :rents, dependent: :nullify
  has_many :book_suggestions, dependent: :nullify

  validates :first_name, :last_name, :locale, presence: true

  scope :order_by_email, -> { order('email').map { |u| [u.email, u.id] } }

  def full_name
    "#{first_name.mb_chars.titleize} #{last_name.mb_chars.titleize}"
  end
end
