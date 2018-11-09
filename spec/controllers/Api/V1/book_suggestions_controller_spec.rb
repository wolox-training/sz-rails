require 'rails_helper'

describe Api::V1::BookSuggestionsController do
  describe 'POST #Create' do
    context 'When create BookSuggestion' do
      let(:book_suggestion) { attributes_for(:book_suggestion) }
      let(:http_request)    { post :create, params: { book_suggestion: book_suggestion } }

      it 'BookSuggestion created' do
        expect { http_request }.to change(BookSuggestion, :count).by(1)
      end

      it 'Responds with status 201' do
        http_request
        expect(response).to have_http_status(:created)
      end

      it 'Responds with correct serializer' do
        http_request
        serializer = BookSuggestionSerializer.new(
          book_suggestion
        )
        expect(response.body) =~ serializer
      end

      it 'No error messages present' do
        http_request
        expect(response.body['error']).not_to be_present
      end
    end
  end
end
