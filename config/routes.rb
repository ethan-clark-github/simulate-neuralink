Rails.application.routes.draw do
  
  resources :users
  resources :functions, only: [:index, :show, :create, :destroy]
  resources :outputs, only: [:index, :show, :create, :destroy]
  resources :inputs, only: [:index, :show, :create, :update, :destroy]

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/login", to: "sessions#create"  
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"  
  get "/me", to: "users#show"
  delete 'functions/:id', to: 'functions#destroy'

end
