require 'sidekiq-scheduler'

class RentWorker
  include Sidekiq::Worker

  def perform
    rents_id = Rent.end_today.pluck(:id)
    send_emails(rents_id) if rents_id.any?
  end

  private

  def send_emails(rents_id)
    rents_id.each do |rent_id|
      GeneralMailer.finish_rent(rent_id).deliver
    end
  end
end
