module Api
  module V1
    class BooksController < ApplicationController
      before_action :set_book, only: [:show]

      def index
        @books = Book.all
        render_paginated @books, each_serializer: BookSerializer
      end

      def show
        @book = set_book

        if @book
          render json: @book, serializer: BookSerializer
        else
          render json: {
            error: 'There is no book.'
          }, status: :internal_server_error
        end
      end

      private

      def set_book
        Book.find_by(id: params[:id])
      end
    end
  end
end
