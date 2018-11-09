Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  api_version(module: 'api/v1', path: { value: 'api/v1' }) do
    resources :books, only: [:index, :show, :external] do
      collection do
        get :information
      end
    end
    resources :rents, only: [:index, :create]
    resources :book_suggestions, only: [:create]
  end

  mount_devise_token_auth_for 'User', at: 'auth'
  root "application#index"
end
