window.ReviewForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return { body: "", score: "" };
  },

  handleSubmit: function (e) {
    e.preventDefault();
    review = $.extend({}, this.state);
    review.bench_id = this.props.bench_id;

    ApiUtil.createReview(review);
    this.setState({body: "", score: ""});
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Comments:
          <input type="textarea" valueLink={this.linkState("body")} />
        </label><br/>

        <label>Score (1-5):
          <input type="text" valueLink={this.linkState("score")} />
        </label><br/>

        <button>Submit Review</button>
      </form>
    );
  }
});
