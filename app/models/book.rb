class Book < ApplicationRecord
  has_many :rents
  
  validates :genre, :autor, :image, :title, :editor, :year, presence: true
end
