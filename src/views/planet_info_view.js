const PubSub = require('../helpers/pub_sub.js')

const PlanetInfoView = function (){

};

PlanetInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:selected-planet', (evt) => {
    this.displayInfo(evt);
    PubSub.publish('PlanetInfoView:selected-planet', {planetInfo: evt.detail.planetInfo.name});
  });

};

PlanetInfoView.prototype.displayInfo = function (evt) {
  const info = evt.detail.planetInfo;

  const wrapper = document.querySelector('.planet-details');
  this.clearDetails(wrapper);
  console.log(evt);
  const header = document.createElement('h1');
  const orbit = document.createElement('h4');
  const day = document.createElement('h4');
  const surfaceArea = document.createElement('h4');
  const volume = document.createElement('h4');
  const gravity = document.createElement('h4');
  const moons = document.createElement('h4');
  const image = document.createElement('img');


  header.textContent = info.name;
  orbit.textContent = `Orbit: ${info.orbit}`;
  day.textContent = `Day: ${info.day}`;
  surfaceArea.textContent = `Surface Area: ${info.surfaceArea}`;
  volume.textContent = `Volume: ${info.volume}`;
  gravity.textContent = `Gravity: ${info.gravity}`;
  moons.textContent = `Moons: ${info.moons}`;

  image.src = info.image;
  image.classList.add("planet-image");

  wrapper.appendChild(header);
  wrapper.appendChild(orbit);
  wrapper.appendChild(day);
  wrapper.appendChild(surfaceArea);
  wrapper.appendChild(volume);
  wrapper.appendChild(gravity);
  wrapper.appendChild(moons);
  wrapper.appendChild(image);

};

PlanetInfoView.prototype.clearDetails = function (element) {
  while (element.firstChild){
    element.removeChild(element.firstChild);
  };
};



module.exports = PlanetInfoView;



//
// name: 'Mercury',
// orbit: 87.969,
// day: 58.646,
// surfaceArea: 0.147,
// volume: 0.056,
// gravity: 0.38,
// moons: 0,
// image: 'images/mercury.jpg'
