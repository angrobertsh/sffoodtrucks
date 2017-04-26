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


var truck = {":@computed_region_bh8s_q3mv":"310",":@computed_region_fyvs_ahh9":"20",":@computed_region_p5aj_wyqh":"3",":@computed_region_rxqg_mtj9":"9",":@computed_region_yftq_j783":"14","address":"Assessors Block 3810/Lot008","applicant":"May Catering","block":"3810","blocklot":"3810008","cnn":"3889000","dayshours":"Mo/Mo/Mo/Mo/Mo:9AM-10AM/10AM-11AM/12PM-1PM/1PM-2PM","expirationdate":"2018-05-06T00:00:00.000","facilitytype":"Truck","fooditems":"Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks","latitude":"37.772039113525","location":{"type":"Point","coordinates":[-122.395975,37.772039]},"locationdescription":"CHANNEL ST: END to END (0 - 0)","longitude":"-122.395974631586","lot":"008","objectid":"934608","permit":"17MFF-0110","priorpermit":"1","received":"2017-02-13","schedule":"http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf","status":"REQUESTED","x":"6013705.031","y":"2109129.688"}

var trucks = [{":@computed_region_bh8s_q3mv":"58",":@computed_region_fyvs_ahh9":"1",":@computed_region_p5aj_wyqh":"3",":@computed_region_rxqg_mtj9":"8",":@computed_region_yftq_j783":"10","address":"2525 MARIN ST","applicant":"May Catering","block":"4343","blocklot":"4343001D","cnn":"8700000","dayshours":"Mo-Fr:7AM-8AM","expirationdate":"2018-05-06T00:00:00.000","facilitytype":"Truck","fooditems":"Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks","latitude":"37.7476160722331","location":{"type":"Point","coordinates":[-122.401977,37.747616]},"locationdescription":"MARIN ST: KANSAS ST to HWY 101 N ON RAMP (2500 - 2599)","longitude":"-122.401976975724","lot":"001D","objectid":"934574","permit":"17MFF-0110","priorpermit":"1","received":"2017-02-13","schedule":"http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf","status":"REQUESTED","x":"6011789.79","y":"2100273.801"}
,{":@computed_region_bh8s_q3mv":"310",":@computed_region_fyvs_ahh9":"20",":@computed_region_p5aj_wyqh":"3",":@computed_region_rxqg_mtj9":"9",":@computed_region_yftq_j783":"14","address":"Assessors Block 3810/Lot008","applicant":"May Catering","block":"3810","blocklot":"3810008","cnn":"3889000","dayshours":"Mo/Mo/Mo/Mo/Mo:9AM-10AM/10AM-11AM/12PM-1PM/1PM-2PM","expirationdate":"2018-05-06T00:00:00.000","facilitytype":"Truck","fooditems":"Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks","latitude":"37.772039113525","location":{"type":"Point","coordinates":[-122.395975,37.772039]},"locationdescription":"CHANNEL ST: END to END (0 - 0)","longitude":"-122.395974631586","lot":"008","objectid":"934608","permit":"17MFF-0110","priorpermit":"1","received":"2017-02-13","schedule":"http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf","status":"REQUESTED","x":"6013705.031","y":"2109129.688"}
,{":@computed_region_bh8s_q3mv":"28860",":@computed_region_fyvs_ahh9":"6",":@computed_region_p5aj_wyqh":"1",":@computed_region_rxqg_mtj9":"10",":@computed_region_yftq_j783":"3","address":"253 DRUMM ST","applicant":"Peruchi Food Truck,LLC","approved":"2016-03-15T00:00:00.000","block":"0203","blocklot":"0203013","cnn":"4972000","dayshours":"Mo/We/Fr:9AM-3PM","expirationdate":"2017-03-15T00:00:00.000","facilitytype":"Truck","fooditems":"Peruvian Chinese Food. Lomo Saltado: Arroz Con Pollo: Tipa Kay: Yuca Fries","latitude":"37.7961233802521","location":{"type":"Point","coordinates":[-122.397273,37.796123]},"locationdescription":"DRUMM ST: CLAY ST to WASHINGTON ST (200 - 299)","longitude":"-122.397273204338","lot":"013","objectid":"676797","permit":"15MFF-0023","priorpermit":"0","received":"2015-03-02","schedule":"http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=15MFF-0023&ExportPDF=1&Filename=15MFF-0023_schedule.pdf","status":"EXPIRED","x":"6013507.554","y":"2117905.099"}
,{":@computed_region_bh8s_q3mv":"28852",":@computed_region_fyvs_ahh9":"6",":@computed_region_p5aj_wyqh":"10",":@computed_region_rxqg_mtj9":"10",":@computed_region_yftq_j783":"5","address":"768 MARKET ST","applicant":"Golden Gate Halal Food","block":"0328","blocklot":"0328001","cnn":"8746201","dayshours":"Mo/Th/Fr:8AM-9PM","latitude":"37.7864590368571","location":{"type":"Point","coordinates":[-122.405546,37.786459]},"locationdescription":"MARKET ST: GRANT AVE \\ OFARRELL ST to 04TH ST \\ ELLIS ST \\ STOCKTON ST (750 - 798) -- NORTH --","longitude":"-122.405545707116","lot":"001","objectid":"784915","permit":"16MFF-0094","priorpermit":"0","received":"2016-04-18","schedule":"http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=16MFF-0094&ExportPDF=1&Filename=16MFF-0094_schedule.pdf","status":"REQUESTED","x":"6011046.149","y":"2114435.386"}]

var error = (errors) => {
  console.log(errors.responseJSON.errors);
}

var success = (success) => {
  debugger
}
