class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  include Wor::Paginate

  protect_from_forgery with: :null_session

  def index; end

  def not_found
    render json: { error: 'record not found' }, status: :not_found
  end
end
