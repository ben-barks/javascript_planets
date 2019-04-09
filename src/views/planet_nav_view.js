const PubSub = require('../helpers/pub_sub.js')

const PlanetNavView = function(){
  this.currentlySelected = null;
};

PlanetNavView.prototype.bindEvents = function(){
  PubSub.subscribe('PlanetInfoView:selected-planet', (evt) => {
    this.changeSelected(evt.detail.planetInfo)
  });
  this.bindNavLinks();
};

PlanetNavView.prototype.bindNavLinks = function() {
  const items = document.getElementsByClassName('planet-menu-item');
  for (const item of items){
    item.addEventListener('click', (evt) => {
      const selectedItem = evt.target.id;
      PubSub.publish('PlanetNavView:selected-planet', { planetInfo: selectedItem} )
    });
  };
};

PlanetNavView.prototype.changeSelected = function (planetName) {
  this.removedSelected();
  this.addSelected(planetName);
}

PlanetNavView.prototype.removedSelected = function () {
  if(this.currentlySelected){
    this.currentlySelected.classList.remove("selected-planet-nav");
  };
}

PlanetNavView.prototype.addSelected = function (planetName) {
  this.currentlySelected = document.getElementById(planetName);
  this.currentlySelected.classList.add('selected-planet-nav');
}

module.exports = PlanetNavView;
