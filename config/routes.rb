Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  api_version(module: 'api/v1', path: { value: 'api/v1' }) do
    mount_devise_token_auth_for 'User', at: 'auth'
    resources :books, only: [:index, :show]
    resources :rents, only: [:index, :create]
  end
  root "application#index"
end
