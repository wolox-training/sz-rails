module Api
  module V1
    class RentsController < ApplicationController
      before_action :authenticate_api_v1_user!

      def index
        @rents = Rent.all
        render_paginated @rents, each_serializer: RentSerializer
      end

      def create
        rent = Rent.create!(rent_params)
        GeneralMailer.finish_rent(rent).deliver_later(wait: 10.seconds)
        render json: rent, status: :created
      end

      private

      def rent_params
        params.require(:rent).permit(:user_id, :book_id, :start_date, :end_date)
      end
    end
  end
end
