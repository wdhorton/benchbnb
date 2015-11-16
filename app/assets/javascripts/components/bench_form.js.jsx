window.BenchForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return { description: "", lat: "", lng: "", seating: ""};
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var bench = this.state;
    bench.long = this.state.lng;

    ApiUtil.createBench(this.state);
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Description:
          <input type="text" valueLink={this.linkState("description")} />
        </label><br />

        <label>Latitude:
          <input type="text" valueLink={this.linkState("lat")} />
        </label><br />

        <label>Longitude:
          <input type="text" valueLink={this.linkState("lng")} />
        </label><br />

        <label>Seating:
          <input type="text" valueLink={this.linkState("seating")} />
        </label><br />

        <button>Create New Bench!</button>
      </form>
    );
  }
});
