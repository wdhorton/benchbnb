ApiActions = {
  receiveAll: function (benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  receiveNew: function (bench) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.NEW_BENCH_RECEIVED,
      bench: bench
    });
  },

  receiveReviews: function (reviews) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.REVIEWS_RECEIVED,
      reviews: reviews
    });
  },

  receiveNewReview: function (review) {
    AppDispatcher.dispatch({
      actionType: ReviewConstants.NEW_REVIEW_RECEIVED,
      review: review
    });
  }
};
