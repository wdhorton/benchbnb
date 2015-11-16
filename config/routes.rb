Rails.application.routes.draw do
  resources :benches, only: [:index, :create]
end
