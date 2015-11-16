# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Bench.create(description: "A very nice bench", lat: 40.723483, long: -73.996962, seating: 2)
Bench.create(description: "A sturdy place to sit", lat: 40.725955, long: -73.997488, seating: 5)
Bench.create(description: "Great for a quiet lunch", lat: 40.769001, long: -73.971004, seating: 3)
