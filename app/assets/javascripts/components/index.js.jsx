window.BenchIndex = React.createClass({
  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function () {
    BenchStore.addChangeListener(this.updateState);
  },

  updateState: function () {
    this.setState({ benches: BenchStore.all() });
  },

  handleClick: function (e) {
    var id = e.target.dataset.benchId;

    this.props.clickIndexHandler(id);
  },

  render: function () {


    return (
      <ul onClick={this.handleClick}>
        {
          this.state.benches.map(function (bench) {
            var avg;

            if (bench.avg_review) {
              avg = "Average review: " + bench.avg_review;
            }

            return (
              <li key={bench.id} data-bench-id={bench.id}>
                {bench.description}
                {avg}
              </li>
            );
          })
        }
      </ul>
    );
  }
});
