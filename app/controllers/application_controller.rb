class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  include Wor::Paginate

  protect_from_forgery with: :null_session
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from ActiveRecord::RecordInvalid, with: :validation_errors

  before_action :set_locale

  def index; end

  private

  def not_found
    render json: { error: "record not found with id #{params[:id]}" }, status: :not_found
  end

  def validation_errors(exception)
    render json: { error: exception }, status: :internal_server_error
  end

  def set_locale
    I18n.locale = 'en'
    # I18n.locale = current_user.locale
  end
end
