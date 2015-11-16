window.ShowPage = React.createClass({
  getStateFromStore: function () {
    return { bench: BenchStore.find(parseInt(this.props.params.id))};
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentWillReceiveProps: function (newProps) {
    getStateFromStore(parseInt(newProps.params.id));
  },

  render: function () {
    return (
      <ul>
        <li key="description">Description: {this.state.bench.description}</li>
        <li key="seating">Seating: {this.state.bench.seating}</li>
      </ul>
    );
  }
});
