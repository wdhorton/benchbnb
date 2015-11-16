Rails.application.routes.draw do
  root to: 'static_pages#index'
  namespace :api, defaults: { format: :json } do
    resources :benches, only: [:index, :create] do
      resources :reviews, only: [:index]
    end
    resources :reviews, only: [:create]
  end
end
