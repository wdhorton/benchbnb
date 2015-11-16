class Bench < ActiveRecord::Base
  validates :description, :lat, :long, presence: true

  def self.in_bounds(bounds)
    query_vars = {
      southLat: bounds['southWest']['lat'],
      northLat: bounds['northEast']['lat'],
      westLong: bounds['southWest']['lng'],
      eastLong: bounds['northEast']['lng']
    }

    Bench.where(["(lat BETWEEN :southLat AND :northLat) AND
      (long BETWEEN :westLong AND :eastLong)", query_vars])
  end
end
