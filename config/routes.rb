Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :welcome, :only => [:index]
  root 'welcome#home'
  get "/home" => "welcome#home"
  get "/about" => "welcome#about"
  get "/services" => "welcome#services"
  get "/blog" => "welcome#blog"
  get "/contacts" => "welcome#contacts"
  get "/project" => "welcome#project"

end
