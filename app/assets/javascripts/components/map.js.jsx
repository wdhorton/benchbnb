window.Map = React.createClass({
  componentDidMount: function () {
    BenchStore.addChangeListener(this.onStoreChange);
    this.markers = [];

    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: { lat: 40.750388, lng: -73.985870},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.map.addListener("idle", function () {
      var bounds = this.map.getBounds();

      var ne_coords = bounds.getNorthEast();
      var sw_coords = bounds.getSouthWest();

      var query_obj = {
        northEast: {lat: ne_coords.lat(), lng: ne_coords.lng()},
        southWest: {lat: sw_coords.lat(), lng: sw_coords.lng()} };

      FilterActions.receiveParams(query_obj);
    }.bind(this));

    this.map.addListener("click", this.clickHandler);
  },

  clickHandler: function (e) {
    var coords = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    this.props.clickMapHandler(coords);
  },

  hasNoMarker: function (bench) {
    return !this.markers.some(function (marker) {
      return marker.id === bench.id;
    });
  },

  toggleMarkers: function () {
    this.markers.forEach(function (marker) {
      if (BenchStore.all().some(function(bench) { return bench.id === marker.id; })) {
        if (marker.getMap() === null) marker.setMap(this.map);
      } else {
        marker.setMap(null);
      }
    }.bind(this));
  },

  createMarkers: function () {
    var benches_without_markers = BenchStore.all().filter(this.hasNoMarker);

    benches_without_markers.forEach(function (bench) {
      var marker = new google.maps.Marker({
        position: { lat: bench.lat, lng: bench.long },
        map: null,
        title: bench.description
      });

      marker.id = bench.id;

      this.markers.push(marker);
    }.bind(this));
  },

  onStoreChange: function () {
    this.createMarkers();
    this.toggleMarkers();
  },

  render: function () {
    return <div className="map" ref="map"></div>;
  }
});
