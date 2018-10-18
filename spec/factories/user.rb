FactoryBot.define do
  factory :user, class: User do
    first_name              { 'john' }
    last_name               { 'doe' }
    email                   { 'test@example.com' }
    password                { '123456' }
    password_confirmation   { '123456' }
  end

  factory :random_user, class: User do
    first_name              { Faker::Name.first_name }
    last_name               { Faker::Name.last_name }
    email                   { Faker::Internet.email }
    password                { '123456' }
    password_confirmation   { '123456' }
  end
end
