module Api
  module V1
    class BookSuggestionsController < ApiController
      def create
        render json: BookSuggestion.create!(book_suggestions_params),
               root: 'book_suggestion',
               status: :created
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
