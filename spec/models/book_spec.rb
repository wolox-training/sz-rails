require 'rails_helper'

describe Book, type: :model do
  subject(:book) do
    described_class.new(
      genre:      genre,
      author:     author,
      image:      image,
      title:      title,
      publisher:  publisher,
      year:       year
    )
  end

  it 'presence of genre' do
    is_expected.to validate_presence_of(:genre)
  end

  it 'presence of author' do
    is_expected.to validate_presence_of(:author)
  end

  it 'presence of title' do
    is_expected.to validate_presence_of(:title)
  end

  it 'presence of publisher' do
    is_expected.to validate_presence_of(:publisher)
  end

  it 'presence of year' do
    is_expected.to validate_presence_of(:year)
  end

  describe '#create' do
    context 'When the genre is nil' do
      let(:genre) { nil }
      it do
        is_expected.to be_invalid
      end
    end

    context 'When the author is nil' do
      let(:author) { nil }
      it do
        is_expected.to be_invalid
      end
    end

    context 'When the title is nil' do
      let(:title) { nil }
      it do
        is_expected.to be_invalid
      end
    end

    context 'When the publisher is nil' do
      let(:publisher) { nil }
      it do
        is_expected.to be_invalid
      end
    end

    context 'When the year is nil' do
      let(:year) { nil }
      it do
        is_expected.to be_invalid
      end
    end
  end

  let(:genre)       { Faker::Book.genre }
  let(:author)      { Faker::Book.author }
  let(:image)       { 'blah.jpg' }
  let(:title)       { Faker::Book.title }
  let(:publisher)   { Faker::Book.publisher }
  let(:year)        { Time.now.in_time_zone(-5) }
end
