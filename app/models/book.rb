class Book < ApplicationRecord
  has_many :rents, dependent: :destroy
  validates :genre, :autor, :image, :title, :editor, :year, presence: true
end
