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
    this.map.addListener("idle", function (e) {
      var bounds = this.map.getBounds();

      var ne_coords = bounds.getNorthEast();
      var sw_coords = bounds.getSouthWest();

      var query_obj = {
        northEast: {lat: ne_coords.lat(), lng: ne_coords.lng()},
        southWest: {lat: sw_coords.lat(), lng: sw_coords.lng()} };

      ApiUtil.fetchBenches(query_obj);
    }.bind(this));
  },

  hasNoMarker: function (bench) {
    return !this.markers.some(function (marker) {
      var pos = marker.getPosition();
      return pos.lat() === bench.lat && pos.lng() === bench.long;
    });
  },

  toggleMarkers: function () {
    var ne_coords = this.map.getBounds().getNorthEast();
    var sw_coords = this.map.getBounds().getSouthWest();

    this.markers.forEach(function (marker) {
      var pos = marker.getPosition();
      if (
        (pos.lat() > sw_coords.lat() && pos.lat() < ne_coords.lat()) &&
        (pos.lng() > sw_coords.lng() && pos.lng() < ne_coords.lng())
      ) {
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
