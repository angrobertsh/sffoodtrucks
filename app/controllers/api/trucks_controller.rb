class Api::TrucksController < ApplicationController

  def index
    @trucks = Truck.in_bounds(params[:bounds])
  end

  def create
    new_params = {
      address: truck_params.address,
      name: truck_params.applicant,
      dayshours: truck_params.dayshours,
      food: truck_params.fooditems,
      status: truck_params.status,
      locationdescription: truck_params.locationdescription,
      lat: truck_params.latitude,
      lng: truck_params.longitude
    }

    @truck = Truck.new(new_params)

    if @truck.save
      render "api/truck/index"
    else
      @errors = @truck.errors.full_messages
      render(
        "api/shared/error",
        status: 422
      )
    end
  end

  # { "address":"1301 MARKET ST",
  #   "applicant":"HALAL SF GYRO",
  #   "dayshours":"Th/Fr/Sa:6AM-4PM",
  #   "fooditems":"Gyro Sandwich: Chicken Sandwich: Lamb over rice: chicken over rice: fish sandwich & fish over rice",
  #   "latitude":"37.7767362127501",
  #   "locationdescription":"MARKET ST: 09TH ST \\ LARKIN ST to 10TH ST \\ FELL ST \\ POLK ST (1301 - 1399) -- SOUTH --",
  #   "longitude":"-122.416394930077",
  #   "status":"APPROVED"}

  private

  def truck_params
    params.require(:truck).permit(:address, :applicant, :dayshours, :fooditems, :latitude, :longitude, :locationdescription, :status)
  end

end
