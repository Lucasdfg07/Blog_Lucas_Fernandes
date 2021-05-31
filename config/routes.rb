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

  if Rails.env.development?
    scope format: true, constraints: { format: /jpg|png|gif|PNG/ } do
      get '/*anything', to: proc { [404, {}, ['']] }, constraints: lambda { |request| !request.path_parameters[:anything].start_with?('rails/') }
    end
  end
end
