class Book < ApplicationRecord
  validates :genre, :author, :title, :publisher, :year, presence: true
end
