class Rent < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :book, optional: true

  validates :start_date, :end_date, presence: true
  validate :check_dates

  def valid_dates?
    in_range? && today_valid?
  end

  def in_range?
    start_date < end_date
  end

  def today_valid?
    start_date < Time.zone.today && Time.zone.today < end_date
  end

  private

  def check_dates
    errors.add(:model_rent, 'dates do not meet the requirements.') unless valid_dates?
  end
end
