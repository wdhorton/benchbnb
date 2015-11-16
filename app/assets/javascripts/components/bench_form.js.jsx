window.BenchForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return { description: "", lat: "", lng: "", seating: ""};
  },

  render: function () {
    return (
      <form>
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
