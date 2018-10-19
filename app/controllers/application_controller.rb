class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  include Wor::Paginate

  protect_from_forgery with: :null_session
  before_action :authenticate_api_v1_user!
end
