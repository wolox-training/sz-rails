class Book < ApplicationRecord
  validates :genre, :autor, :image, :title, :editor, :year, presence: true
end
