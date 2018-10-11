class Rent < ApplicationRecord
  belongs_to :user
  belongs_to :book

  validates :start_rent_date, :end_rent_date, presence: true
end
