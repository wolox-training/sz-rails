class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  include Wor::Paginate

  protect_from_forgery with: :null_session
  rescue_from ActiveRecord::RecordNotFound, with: :not_found

  def not_found
    render json: { error: "record not found with id #{params[:id]}" }, status: :not_found
  end
end
