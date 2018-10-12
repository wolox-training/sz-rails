Rails.application.routes.draw do
  devise_for :users

   # token auth routes available at /api/v1/auth
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'
      #resources :books, only: [:index, :show]
    end
  end

  resources :books, only: [:index, :show]
end
