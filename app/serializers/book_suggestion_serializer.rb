class BookSuggestionSerializer < ActiveModel::Serializer
  attributes :title, :author, :link

  def json_key
    'book_suggestion'
  end
end
