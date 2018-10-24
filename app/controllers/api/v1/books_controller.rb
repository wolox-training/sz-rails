module Api
  module V1
    class BooksController < ApplicationController
      # before_action :authenticate_api_v1_user!

      def index
        @books = Book.all
        render_paginated @books, each_serializer: BookIndexSerializer
      end

      def show
        @book = Book.find_by(id: params[:id])
        not_found && return if @book.nil?
        render json: @book
      end
    end
  end
end
