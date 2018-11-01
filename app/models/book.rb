class Book < ApplicationRecord
  has_many :rents, dependent: :nullify

  validates :genre, :author, :title, :publisher, :year, presence: true

  scope :order_by_title, -> { order('title') }

  def actual_rent
    rents.from_today.first
  end

  def self.dropdown_options
    order_by_title.map { |u| [u.title, u.id] }
  end
end
