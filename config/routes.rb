Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  root 'home#index'

  resources :blog, only: [:index]
  resources :posts, except: [:index]
end
