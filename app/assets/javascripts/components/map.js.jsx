window.Map = React.createClass({
  componentDidMount: function () {
    BenchStore.addChangeListener(this.createMarkers);

    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: { lat: 40.750388, lng: -73.985870},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);
  },

  createMarkers: function () {
    BenchStore.all().forEach(function (bench) {
      new google.maps.Marker({
        position: { lat: bench.lat, lng: bench.long },
        map: this.map,
        title: bench.description
      });
    }.bind(this));
  },

  render: function () {
    return <div className="map" ref="map"></div>;
  }
});
