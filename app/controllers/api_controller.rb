class ApiController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  include Wor::Paginate
  include Pundit

  protect_from_forgery with: :null_session

  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from ActiveRecord::RecordInvalid, with: :validation_errors
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  def index; end

  def set_locale
    I18n.locale = current_user.locale
  end

  private

  def not_found
    render json: { error: "record not found with id #{params[:id]}" }, status: :not_found
  end

  def validation_errors(exception)
    render json: { error: exception }, status: :internal_server_error
  end

  def user_not_authorized(exception)
    policy_name = exception.policy.class.to_s.underscore
    flash[:error] = t "#{policy_name}.#{exception.query}", scope: 'pundit', default: :default
    render json: { error: flash[:error] }, status: :unauthorized
  end
end
