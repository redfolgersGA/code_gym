require "./tenant.rb"
class Apartment < Tenant

def initialize(unit, num_beds, num_baths)
  @unit = unit
  @num_beds = num_beds
  @num_baths = num_baths
  @collection = []
  # Tenant_collection
end

def Tenant_collection(obj)
  @obj = obj
@collection << @obj.Tenant_info
end

def Get_Tenant
@collection
end

def Price
@per_bed = 1000 * @num_beds
@per_bath = 500 * @num_baths
@price = @per_bed + @per_bath
end

def studio?
if @num_beds ==1
  true
elsif @num_beds > 1
  false
end
end

end


apt = Appartment.new("B", 2, 1)
tenat = Tenant.new("b", "v", "nov, 29", "m")
apt.Tenant_collection(tenat)
tenat1 = Tenant.new("c", "h", "apl, 09", "f")
tenat2 = Tenant.new("c", "h", "apl, 09999", "f")
apt.Tenant_collection(tenat2)
apt.Tenant_collection(tenat1)
puts apt.Get_Tenant

puts apt.Price
puts apt.studio?
