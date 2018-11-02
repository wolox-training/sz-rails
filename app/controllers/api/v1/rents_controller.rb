module Api
  module V1
    class RentsController < ApplicationController
      before_action :authenticate_api_v1_user!

      def index
        render_paginated Rent.all, each_serializer: RentSerializer
      end

      def create
        render json: Rent.create!(rent_params), status: :created
      end

      private

      def rent_params
        params.require(:rent).permit(:user_id, :book_id, :start_date, :end_date)
      end
    end
  end
end
