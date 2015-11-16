Rails.application.routes.draw do
  root to: 'static_pages#index'

  resources :benches, only: [:index, :create]
end
