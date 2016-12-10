class Tenant
  attr_accessor :f_name, :l_name, :born_on, :gender
  attr_reader :nickname, :occupation

def initialize(f_name, l_name, born_on, gender)
    @f_name = f_name
    @l_name = l_name
    @born_on = born_on
    @gender = gender
    @nickname = nickname
    @occupation = occupation

end

human1 = Tenant.new("Becca", "Gardner", "11/01/2016", "Female")

human1.nickname = "shorty"



puts human1.f_name
puts human1.l_name
puts human1.born_on
puts human1.gender
puts human1.nickname
end

