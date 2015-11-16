window.FilterParams = React.createClass({
  getInitialState: function () {
    return { minSeats: "", maxSeats: ""};
  },

  handleChange: function (key, val) {
    newState = {};
    newState[key] = val;

    var combinedState = $.extend({}, this.state, newState);

    FilterActions.receiveParams(combinedState);
    this.setState(combinedState);
  },

  handleMinChange: function (e) {
    this.handleChange("minSeats", e.target.value);
  },

  handleMaxChange: function (e) {
    this.handleChange("maxSeats", e.target.value);
  },

  render: function () {
    return (
      <form>
        <label>Min. Seats
          <input type="text" onChange={this.handleMinChange} value={this.state.minSeats} />
        </label>

        <label>Max. Seats
          <input type="text" onChange={this.handleMaxChange} value={this.state.maxSeats} />
        </label>
      </form>
    );
  }
});
