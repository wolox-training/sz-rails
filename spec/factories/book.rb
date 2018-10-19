FactoryBot.define do
  factory :book do
    genre       { Faker::Book.genre }
    author      { Faker::Book.author }
    image       { 'blah.jpg' }
    title       { Faker::Book.title }
    publisher   { Faker::Book.publisher }
    year        { Time.new.in_time_zone(-5).beginning_of_year }
  end
end
