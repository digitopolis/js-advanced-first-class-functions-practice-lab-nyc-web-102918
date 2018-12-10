// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  })
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(a, b) {
    return a.revenue - b.revenue;
  })
}

function driversByName(drivers) {
  return drivers.slice().sort(function(a, b) {
    return a.name.localeCompare(b.name);
  })
}

let initialValue = 0;
function totalRevenue(drivers) {
  return drivers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.revenue;
  }, initialValue)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
