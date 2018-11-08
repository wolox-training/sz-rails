module Api
  module V1
    class BookSuggestionsController < ApiController
      def create
        book_suggestion = BookSuggestion.create!(book_suggestions_params)
        render json: book_suggestion, root: 'book_suggestion', status: :created
      end

      private

      def book_suggestions_params
        params.require(:book_suggestion).permit(:synopsis,
                                                :price,
                                                :author,
                                                :title,
                                                :link,
                                                :publisher,
                                                :year,
                                                :user_id)
      end
    end
  end
end
