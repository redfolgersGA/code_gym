class Tenant

attr_accessor :nickname, :occupation

def initialize(f_name, l_name, born_on, gender)
@f_name = f_name
@l_name = l_name
@born_on = born_on
@gender = gender
end

def full_name
  if nickname == nil
    @full_name = "#{@f_name} #{@l_name}"
  else
@full_name = "#{@f_name} #{nickname} #{@l_name}"
end
end

def Tenant_info
[fname: @f_name, lname: @l_name, born: @born_on, gender: @gender]
  end

def Occupation
occupation
  end

end

