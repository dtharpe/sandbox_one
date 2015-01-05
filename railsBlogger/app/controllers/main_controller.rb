class MainController < ApplicationController
  def index
  	@fromcanada = Country.all
  end
end
