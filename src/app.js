const PubSub = require('./helpers/pub_sub.js')

const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetInfoView = require('./views/planet_info_view.js');
const PlanetNavView = require('./views/planet_nav_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);

  const planetInfoView = new PlanetInfoView();
  const planetNavView = new PlanetNavView();
  planetInfoView.bindEvents();
  planetNavView.bindEvents();
  planetsDataModel.bindEvents();

  planetInfoView.displayDefault();
  // document.dispatchEvent("PlanetNavView:selected-planet", { planetInfo: "Earth"});

});
