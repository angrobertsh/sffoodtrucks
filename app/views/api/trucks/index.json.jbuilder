@truck.each do |truck|
  json.partial! "api/trucks/truck", truck: truck
end
