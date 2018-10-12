class BookSerializer < ActiveModel::Serializer
  attributes :id, :genre, :autor, :image, :title, :editor, :year
  has_many :rents
end
