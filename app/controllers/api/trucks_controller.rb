class Api::TrucksController < ApplicationController

  def index
    @trucks = Truck.in_bounds(params[:filters][:bounds]).with_food(params[:filters][:food]).where("status = ?", "APPROVED")
  end

  def create
    new_params = proprocess_params(truck_params)
    @truck = Truck.new(new_params)
    if @truck.save
      render "api/trucks/show"
    else
      @errors = @truck.errors.full_messages
      render(
        "api/shared/error",
        status: 422
      )
    end
  end

  def seed
    @trucks = seed_params.values.map{|truck|
      preprocess_params(truck)
    }
    @trucks_array = @trucks.map {|truck|
      @truck = Truck.new(truck)
      if @truck.save
        true
      else
        @truck.errors.full_messages
      end
    }

    respond_to do |format|
      format.json { render :json => @trucks_array }
    end
  end

  private

  def truck_params
    params.require(:truck).permit(:address, :applicant, :dayshours, :fooditems, :latitude, :longitude, :locationdescription, :status)
  end

  def seed_params
    keys = params[:trucks].keys
    properties = [:address, :applicant, :dayshours, :fooditems, :latitude, :longitude, :locationdescription, :status]
    all_permitted = keys.map{|key| {key => properties}}
    params.require(:trucks).permit(*all_permitted)
  end

  def preprocess_params(to_process)
    {
      address: to_process[:address],
      name: to_process[:applicant],
      dayshours: to_process[:dayshours],
      # dayshours: preprocess_daytime(to_process[:dayshours]),
      # dayshoursdescription: to_process[:dayshours],
      food: to_process[:fooditems],
      status: to_process[:status],
      locationdescription: to_process[:locationdescription],
      lat: to_process[:latitude],
      lng: to_process[:longitude]
    }
  end

  # DAYS_HOURS = {
  #   "Su" => "D0",
  #   "Mo" => "D1",
  #   "Tu" => "D2",
  #   "We" => "D3",
  #   "Th" => "D4",
  #   "Fr" => "D5",
  #   "Sa" => "D6",
  #   "12AM" => "0",
  #   "1AM" => "1",
  #   "2AM" => "2",
  #   "3AM" => "3",
  #   "4AM" => "4",
  #   "5AM" => "5",
  #   "6AM" => "6",
  #   "7AM" => "7",
  #   "8AM" => "8",
  #   "9AM" => "9",
  #   "10AM" => "10",
  #   "11AM" => "11",
  #   "12PM" => "12",
  #   "1PM" => "13",
  #   "2PM" => "14",
  #   "3PM" => "15",
  #   "4PM" => "16",
  #   "5PM" => "17",
  #   "6PM" => "18",
  #   "7PM" => "19",
  #   "8PM" => "20",
  #   "9PM" => "21",
  #   "10PM" => "22",
  #   "11PM" => "23"
  # }
  #
  # def preprocess_daytime(dayshours_string)
  #   if dayshours_string
  #     parse = ""
  #     result_string = ["["]
  #     range = false
  #     i = 0
  #     while(i < dayshours_string.length)
  #       case dayshours_string[i]
  #       when "-"
  #         result_string.push(DAYS_HOURS[parse])
  #         range = true
  #         parse = ""
  #       when "/"
  #         if DAYS_HOURS[parse][0] == "D"
  #           result_string.push(DAYS_HOURS[parse])
  #         else
  #           star = result_string[-1].to_i + 1
  #           fin = DAYS_HOURS[parse].to_i
  #           while star%24 <= fin
  #             result_string.push(star.to_s)
  #             star += 1
  #           end
  #         end
  #         parse = ""
  #       when ":"
  #         if range
  #           star = result_string[-1][-1].to_i + 1
  #           fin = DAYS_HOURS[parse][-1].to_i
  #           while star%7 <= fin
  #             result_string.push("D"+star.to_s)
  #             star += 1
  #           end
  #           range = false
  #         else
  #           result_string.push(DAYS_HOURS[parse])
  #         end
  #         parse = ""
  #       when ";"
  #         if range
  #           star = result_string[-1].to_i + 1
  #           fin = DAYS_HOURS[parse].to_i
  #           while star%24 <= fin
  #             result_string.push(star.to_s)
  #             star += 1
  #           end
  #           range = false
  #         end
  #         result_string.push("]").push("[")
  #         parse = ""
  #       else
  #         parse += dayshours_string[i]
  #       end
  #       i += 1
  #     end
  #
  #     star = result_string[-1].to_i + 1
  #     fin = DAYS_HOURS[parse].to_i
  #     while star%24 <= fin
  #       result_string.push(star.to_s)
  #       star += 1
  #     end
  #
  #     result_string.push("]")
  #
  #     " " + result_string.join(" ") + " "
  #
  #     result_string
  #   end
  # end

end
