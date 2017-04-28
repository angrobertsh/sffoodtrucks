export const getTrucksInBounds = (filters) => (
  $.ajax({
    url: "api/trucks",
    method: "GET",
    data: {filters: filters}
  })
)

export const postTruck = (truck) => (
  $.ajax({
    url: "api/trucks",
    method: "POST",
    data: {truck: truck},
  })
)

export const seedTrucks = (trucks) => (
  $.ajax({
    url: `api/trucks/seed`,
    method: "POST",
    data: {trucks: trucks}
  })
)

export const getTruckData = () => (
  $.ajax({
    url: 'https://data.sfgov.org/resource/6a9r-agq8.json',
    method: "GET"
  })
)
