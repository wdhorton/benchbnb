window.BenchIndex = React.createClass({
  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function () {
    BenchStore.addChangeListener(this.updateState);
    ApiUtil.fetchBenches();
  },

  updateState: function () {
    this.setState({ benches: BenchStore.all() });
  },

  render: function () {
    return (
      <ul>
        {
          this.state.benches.map(function (bench) {
            return <li key={bench.id}>{bench.description}</li>;
          })
        }
      </ul>
    );
  }
});
