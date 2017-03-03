# TODO
# write a class that behaves like AR obj
# doesn't have persisten
# validations & seri (to_js)
# takes instance of AR obje
# read only mock object

class SuperHero
  include ActiveModel::Validations
  include ActiveModel::Serializers

  validates_presence_of :name, :real_name

  def initializer()
  end
  # def name

  # end

  # def real_name

  # end

  # def super_power

  # end

  # def weakness

  # end

  # def costume

  # end
end
