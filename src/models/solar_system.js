const PubSub = require('../helpers/pub_sub.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('PlanetNavView:selected-planet', (evt) => {
    const planet = this.getPlanetByName(evt.detail.planetInfo);
    PubSub.publish('SolarSystem:selected-planet', { planetInfo: planet });
  });

};

SolarSystem.prototype.getPlanetByName = function(planetName) {
  for (const planet of this.planets) {
    if (planet.name === planetName) return planet;
  };
};

module.exports = SolarSystem;
