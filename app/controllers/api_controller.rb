class ApiController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  include Wor::Paginate

  protect_from_forgery with: :null_session
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from ActiveRecord::RecordInvalid, with: :validation_errors

  def index; end

  def set_locale
    I18n.locale = current_api_v1_user.locale
  end

  private

  def not_found
    render json: { error: "record not found with id #{params[:id]}" }, status: :not_found
  end

  def validation_errors(exception)
    render json: { error: exception }, status: :internal_server_error
  end
end
