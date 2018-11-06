require 'rails_helper'

describe Api::V1::BookSuggestionsController do
  describe 'POST #Create' do
    context 'When create BookSuggestion' do
      subject(:user) { create(:user) }
      subject(:book_suggestion) { build(:book_suggestion, user: user) }

      let(:valid_params) do
        {
          book_suggestion: book_suggestion.attributes
        }
      end

      it 'BookSuggestion created' do
        expected = BookSuggestionSerializer.new(
          book_suggestion
        ).to_json

        expect { post :create, params: valid_params }.to change(BookSuggestion, :count).by(1)
        expect(response).to have_http_status(:created)
        expect(response.body) =~ JSON.parse(expected)
      end
    end
  end
end
