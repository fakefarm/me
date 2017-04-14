# 2015-11-04 Jon Daniel

rescue_from ThingClient::CreationFailed do |error|
  flash[:error] = "You broke it!"
  redirect "/thing/new"
end

def create
  @thing = ThingClient.create(name: params[:name])
  
  respond_to do |format|
    format.html { }
  end
end


flow control is left or right

exception is flying over.

## Associations
- read rails guides

read raw docs
http://api.rubyonrails.org/classes/ActiveRecord/Associations/ClassMethods.html



module Something
    def foo; return 'bar'; end
end

class Jot
    include Something
end

However, this means I have to include all that stuff even though I just want that one function.


module Something
    module_function
    def foo; return 'bar'; end
end

Something.foo

by includeing m_f I get a utility function.
