class Rent < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :book, optional: true

  validates :start_date, :end_date, presence: true
end
