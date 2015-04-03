require 'bundler'
Bundler.require

get '/' do
  redirect '/index.erb'
end

get '/index.erb' do
  erb :index
end

get '/quadratic.erb' do
  erb :quadratic
end

get '/factorial.erb' do
  erb :factorial
end

get '/pythag.erb' do
  erb :pythag
end