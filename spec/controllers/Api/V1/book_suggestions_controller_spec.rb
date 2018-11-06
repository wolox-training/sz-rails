require 'rails_helper'

describe Api::V1::BookSuggestionsController do
  describe 'POST #Create' do
    context 'When create BookSuggestion' do
      subject(:user) { create(:user) }
      subject(:book_suggestion) { build(:book_suggestion, user: user) }

      let(:valid_params) { { book_suggestion: book_suggestion.attributes } }
      let(:http_request) { post :create, params: valid_params }
      let(:serializer_json) do
        BookSuggestionSerializer.new(
          book_suggestion
        ).to_json
      end

      it 'BookSuggestion created' do
        expect { http_request }.to change(BookSuggestion, :count).by(1)
      end

      it 'Responds with status 201' do
        http_request
        expect(response).to have_http_status(:created)
      end

      it 'Responds with correct serializer' do
        http_request
        expect(response.body) =~ JSON.parse(serializer_json)
      end

      it 'No error messages present' do
        http_request
        expect(response.body['error']).not_to be_present
      end
    end
  end
end
