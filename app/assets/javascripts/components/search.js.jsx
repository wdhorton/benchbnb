window.Search = React.createClass({
  clickMapHandler: function (coords) {
    this.props.history.pushState(null, 'benches/new');
  },

  render: function () {
    return (
      <div>
        <Map clickMapHandler={this.clickMapHandler}/>
        <BenchIndex />
      </div>
    );
  }
});
