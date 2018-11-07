class Book < ApplicationRecord
  has_many :rents, dependent: :nullify

  validates :genre, :author, :title, :publisher, :year, presence: true

  scope :order_by_title, -> { order('title').map { |u| [u.title, u.id] } }

  def actual_rent
    rents.from_today.first
  end
end
