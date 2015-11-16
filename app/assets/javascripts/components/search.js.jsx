window.Search = React.createClass({
  getInitialState: function () {
    return { params: FilterParamsStore.getParams() };
  },

  componentDidMount: function () {
    FilterParamsStore.addChangeListener(this.updateParams);
  },

  componentWillUnmount: function () {
    FilterParamsStore.removeChangeListener(this.updateParams);
  },

  updateParams: function () {
    this.setState({ params: FilterParamsStore.getParams() });
    ApiUtil.fetchBenches(this.state.params);
  },

  clickMapHandler: function (coords) {
    this.props.history.pushState(null, 'benches/new', coords);
  },

  render: function () {
    return (
      <div>
        <FilterParams />
        <Map clickMapHandler={this.clickMapHandler}/>
        <BenchIndex />
      </div>
    );
  }
});
