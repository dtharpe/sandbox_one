class CountryController < ApplicationController
  
  layout 'admin'

  def index
  	@countrys = Country.all
  end

  def getAllCountrys
    @countrys = Country.all
     render json: @countrys
  end

end
