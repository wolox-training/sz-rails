module Api
  module V1
    class RentsController < ApiController
      before_action :authenticate_user!
      before_action :set_locale, only: [:create]
      after_action :verify_authorized, except: :index

      def index
        @rents = current_user.rents
        render_paginated @rents, each_serializer: RentSerializer
      end

      def create
        rent = Rent.new(rent_params)
        authorize rent
        rent.save!
        GeneralMailer.create_rent(rent.id).deliver_later(wait: 1.second)
        render json: rent, status: :created
      end

      private

      def rent_params
        params.require(:rent).permit(:user_id, :book_id, :start_date, :end_date)
      end
    end
  end
end
