class CountryController < ApplicationController

	def getCountry

	end

	def index
		@fromcanada = Country.where(:Code => 'ABW').all
	end

end
