class Api::BenchesController < ApplicationController

  def index
    benches = Bench.in_bounds(params[:bounds])

    min = params[:bounds]['minSeats']
    max = params[:bounds]['maxSeats']

    benches = benches.where("seating >= ?", min.to_i) if min && min != ""
    benches = benches.where("seating <= ?", max.to_i) if max && max != ""

    benches.map do |bench|
      if (bench.reviews.count > 0)
        total_score = bench.reviews.reduce(0) { |acc, review| acc + review.score }
        bench.avg_review = total_score / bench.reviews.count
      end
        bench
    end

    render json: benches
  end

  def create
    bench = Bench.create!(bench_params)
    render json: bench
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :long, :seating)
  end

end
