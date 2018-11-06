require 'rails_helper'

describe BookSuggestion do
  subject(:user) { create(:user) }
  subject(:book_suggestion) { build(:book_suggestion, user: user) }

  it { is_expected.to be_valid }
  it { is_expected.to validate_presence_of(:author) }
  it { is_expected.to validate_presence_of(:title) }
  it { is_expected.to validate_presence_of(:link) }
  it { is_expected.to validate_presence_of(:publisher) }
  it { is_expected.to validate_presence_of(:year) }
end
