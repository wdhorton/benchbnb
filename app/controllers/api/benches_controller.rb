class Api::BenchesController < ApplicationController

  def index
    benches = Bench.in_bounds(params[:bounds])

    min = params[:bounds]['minSeats']
    max = params[:bounds]['maxSeats']
    
    benches = benches.where("seating >= ?", min.to_i) if min && min != ""
    benches = benches.where("seating <= ?", max.to_i) if max && max != ""
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
