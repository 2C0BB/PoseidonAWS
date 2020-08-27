function ETo(monthNumber) {
// make it ETo(monthNumber, latitude, latitudeNorthOrSouth) later when full stuff

  var adelaideLat = 55; //not true put real here

  var meanTemp2019max = [33.0, 29.5, 26.6, 24.3, 18.6, 16.0, 16.1, 15.4, 19.1, 23.8, 23.3, 30.6, 23.0];

  var meanTemp2019min = [18.1, 16.8,	15.6,	14.1, 10.8, 8.2, 9.4, 7.7,	9.0, 12.3, 12.4, 16.8, 12.6];

  var meanDailyPercentOfAnnualDayHours = [.32, .30, .28, .25, .23, .22, .23, .25, .27, .29, .31, .32];

  var meanMonthTemp = (meanTemp2019max[monthNumber - 1] + meanTemp2019min[monthNumber - 1]) / 2;

  var ETo = meanDailyPercentOfAnnualDayHours[monthNumber - 1] * (0.46 * meanMonthTemp + 8);

  return ETo;

}

export { ETo };


//http://www.fao.org/3/S2022E/s2022e07.htm refere to section 3.1.3
//http://www.bom.gov.au/climate/data/ australian weather data (TmeanMin, TmeanMax)
