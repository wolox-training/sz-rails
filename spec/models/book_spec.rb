require 'rails_helper'

describe Book, type: :model do
  subject(:book) do
    described_class.new(
      genre:    genre,
      autor:    autor,
      image:    image,
      title:    title,
      editor:   editor,
      year:     year
    )
  end

  it 'presence of genre' do
    is_expected.to validate_presence_of(:genre)
  end

  it 'presence of autor' do
    is_expected.to validate_presence_of(:autor)
  end

  it 'presence of image' do
    is_expected.to validate_presence_of(:image)
  end

  it 'presence of title' do
    is_expected.to validate_presence_of(:title)
  end

  it 'presence of editor' do
    is_expected.to validate_presence_of(:editor)
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

    context 'When the autor is nil' do
      let(:autor) { nil }
      it do
        is_expected.to be_invalid
      end
    end

    context 'When the image is nil' do
      let(:image) { nil }
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

    context 'When the editor is nil' do
      let(:editor) { nil }
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

  let(:genre)   { Faker::Book.genre }
  let(:autor)   { Faker::Book.author }
  let(:image)   { 'blah.jpg' }
  let(:title)   { Faker::Book.title }
  let(:editor)  { Faker::Name.name }
  let(:year)    { Time.now.in_time_zone(-5) }
end
