FactoryBot.define do
  factory :book_suggestion do
    synopsis    { Faker::Lorem.sentence }
    price       { Faker::Commerce.price }
    author      { Faker::Book.author }
    title       { Faker::Book.title }
    link        { Faker::Internet.url }
    publisher   { Faker::Book.publisher }
    year        { Time.new.in_time_zone(-5).beginning_of_year }
  end
end
