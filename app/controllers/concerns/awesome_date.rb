module AwesomeDate
  extend ActiveSupport::Concern

  def calculate_days_from_today(rent)
    days = (rent.end_date - Time.zone.today).to_i
    days.positive? ? days : 0
  end
end
