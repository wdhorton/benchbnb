(function(root) {
  var _reviews = [];

  var addReview = function (review) {
    _reviews.push(review);
  };

  var resetReviews = function (reviews) {
    _reviews = reviews;
  };

  CHANGE_EVENT = "change";

  root.ReviewStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _reviews.slice();
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case ReviewConstants.REVIEWS_RECEIVED:
          resetReviews(payload.reviews);
          BenchStore.emit(CHANGE_EVENT);
          break;
        case ReviewConstants.NEW_REVIEW_RECEIVED:
          addReview(review);
          ReviewStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });


})(this);
