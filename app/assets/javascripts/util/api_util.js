ApiUtil = {
  fetchBenches: function (bounds) {
    $.ajax({
      url: 'api/benches',
      method: 'GET',
      data: { bounds: bounds },
      success: function (data) {
        ApiActions.receiveAll(data);
      }
    });
  },

  createBench: function (bench) {
    $.ajax({
      url: 'api/benches',
      method: 'POST',
      data: { bench: bench },
      success: function (bench) {
        ApiActions.receiveNew(bench);
      }
    });
  },

  fetchReviews: function (id) {
    $.ajax({
      url: 'api/benches/:id/reviews',
      method: 'GET',
      success: function (data) {
        ApiActions.receiveReviews(data);
      }
    });
  },

  createReview: function (review) {
    $.ajax({
      url: 'api/reviews',
      method: 'POST',
      data: { review: review },
      success: function (review) {
        ApiActions.receiveNewReview(review);
      }
    });
  }

};
