class BookSuggestionSerializer < ActiveModel::Serializer
  attributes :title, :author, :link
end
