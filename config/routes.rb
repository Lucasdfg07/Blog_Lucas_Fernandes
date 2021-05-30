Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  root 'home#index'

  resources :blog, only: [:index]
  resources :portfolio, only: [:index]
  resources :posts, except: [:index] do
    resources :comments
  end

  resources :youtube, only: :show
end
