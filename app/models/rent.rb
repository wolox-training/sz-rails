class Rent < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :book, optional: true

  validates :start_date, :end_date, presence: true
  validate :check_creation

  scope :from_today, -> { where('DATE(?) BETWEEN start_date AND end_date', Time.zone.today) }

  def reserve_conflict?
    if book_id
      rents = Rent.from_today.where(book_id: book_id)
      rents.any?
    else
      false
    end
  end

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

  def check_creation
    errors.add(:model_rent, 'dates creation error') unless valid_dates? && !reserve_conflict?
  end
end
