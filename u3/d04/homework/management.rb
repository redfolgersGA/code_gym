require "./tenant.rb"
require "./apartment.rb"

p1 = Tenant.new("Hillary", "Kane", "female", "May 3rd, 1991")
p1.nickname = "Hill"
p1.occupation = "Developer"
p p1.full_name

p2 = Tenant.new("Annie", "Kane", "female", "May 5th, 1988")
p p2.full_name


a1 = Apartment.new("B", 2, 1)
p a1.show
p a1.studio?

a2 = Apartment.new("A", 2, 1)
p a2.price
p a2.studio?


a1 = Apartment.new("B", 1, 1)
p1 = Tenant.new("Fran", "Kubelik", "female", "May 8, 1935")
a1.move_in(p1)
a1.tenants
p a1.tenants.class
p a1.tenants[0].class
p a1.tenants.size

