json.set! "#{truck.id}" do
  json.extract! truck, :id, :address, :name, :dayshours, :food, :status, :locationdescription, :lat, :lng
end
