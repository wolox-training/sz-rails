module Api
  module V1
    class BooksController < ApiController
      before_action :authenticate_user!
      include OpenLibraryService

      def index
        @books = Book.all
        render_paginated @books, each_serializer: BookIndexSerializer
      end

      def show
        @book = Book.find(params[:id])
        render json: @book
      end

      def information
        render json: book_info(params[:ISBN]), status: :ok
      end
    end
  end
end
