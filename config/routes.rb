Rails.application.routes.draw do
  get 'page/todo'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'page#todo'
end
