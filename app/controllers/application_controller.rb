class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  #before_action :authenticate_admin!
  include Wor::Paginate
end
