Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root "root#index"
  namespace :api do
    get 'greetings/random', to: 'greetings#random_greeting'
  end
  # Defines the root path route ("/")
end
