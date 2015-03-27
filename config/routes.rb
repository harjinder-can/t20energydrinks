Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :welcome, :only => [:index] do
    post :contact_form, :on => :collection
  end
  resources :members, :only => [:create]
  resources :distributers, :only => [:create]
  root 'welcome#home'
  get "/home" => "welcome#home"
  get "/about" => "welcome#about"
  get "/contacts" => "welcome#contacts"
  get "/gallery" => "welcome#gallery"
  get "/updates" => "welcome#updates"
  get "/team" => "welcome#team"

end
