require 'rails_helper'

describe User, type: :model do
  subject(:user) do
    described_class.new(
      first_name:             first_name,
      last_name:              last_name,
      email:                  email,
      password:               password,
      password_confirmation:  password_confirmation
    )
  end

  it 'presence of first_name' do
    should validate_presence_of(:first_name)
  end

  it'presence of last_name' do
    should validate_presence_of(:last_name)
  end

  describe '#create' do
    context 'When the first_name is nil' do
      let(:first_name) { nil }
      it do
        is_expected.to be_invalid
      end
    end

    context 'When the last_name is nil' do
      let(:last_name) { nil }
      it do
        is_expected.to be_invalid
      end
    end
  end

  let(:first_name)            { Faker::Name.first_name }
  let(:last_name)             { Faker::Name.last_name }
  let(:email)                 { Faker::Internet.email }
  let(:password)              { 'password' }
  let(:password_confirmation) { 'password' }
end
