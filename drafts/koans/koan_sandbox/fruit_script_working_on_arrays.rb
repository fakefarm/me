# A simple script to 

class Fruit

  attr_accessor :color_of_fruit, :price_per_piece
  
  @@fruit_count = 0

  def initialized(inventory_description=[])
    @color_of_fruit, @price_per_piece = inventory_description  
    @@fruit_count += 1
  end
  
  #short hand once methods have been written
  def price
    @price_per_piece
  end
  
  def color
    @color_of_fruit
  end
  

  
end
