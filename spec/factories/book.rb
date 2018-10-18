FactoryBot.define do
  factory :book, class: Book do
    genre       { Faker::Book.genre }
    author      { Faker::Book.author }
    image       { 'blah.jpg' }
    title       { Faker::Book.title }
    publisher   { Faker::Book.publisher }
    year        { Time.now.in_time_zone(-5) }
  end
end
