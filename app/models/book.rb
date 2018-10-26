class Book < ApplicationRecord
  has_many :rents, dependent: :nullify

  validates :genre, :author, :title, :publisher, :year, presence: true

  def actual_rent
    rents.from_today.first
  end
end
