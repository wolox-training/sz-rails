class RentWorker
  include Sidekiq::Worker

  def perform(rent_id)
    GeneralMailer.finish_rent(rent_id).deliver
  end
end
