## 2016-02-10


@api_client = LS::ApiClient.new(:cardlinking, nil)
@api_client.get('/v1/people/94097043/credit_cards')
cc =  response.parsed_response['items']

def find_cc(id:)
  @credit_cards.select{|cc| cc['id'] == id }.first
end

LinkedCard = Struct.new("LinkedCard", *find_cc(id: 31213569).keys.map(&:to_sym))
LinkedCard = Struct.new("LinkedCard", *find_cc(id: 31213569).keys.map(&:to_sym))
@linked_card = LinkedCard.new(*@credit_cards.first.values)


1. get all data - API.client
2. find_cc - look into vertis (pass objects instead of hashes)
3. at that piont it's visual


@api_client = LS::ApiClient.new(:cardlinking, nil)
# Need to add support for timeouts/retries/circuits/etc.

def load_linked_cards_for(person_id:)
  @credit_cards = @api_client.get("foo").parsed_response # Array of hashes from JSON
  @credit_cards.map{|cc| LinkedCard.new(cc) }
rescue LS::ApiClient::BaseError => error
  # Whatever, error handling.

  Array.new
  # always make sure you return / respond_with information that the client code can continue to process reasonably.

  # LinkedCard::NullObject.new
end

class LinkedCard::NullObject
  def card_status; nil; end
  def card_status_foo; []; end
end

# Return nil
@credit_card.card_status # NoMethodError :(
# Return null object
@credit_card.card_status #=> nil || empty string || reasonable default.



initializers
things beyond basic configs


try not to add configs / initializers b/c it's another thing to add to production - but if you just add to api.ymk, you just add sin

how are we already handling endpoints?

card linking service gem.
see if they have a method already does 

yes - spin up console and try it out
no - 

you don't want o make an api call in an initializer

retrieving the data from a source is controller, but the data is similar to model


  def load_credit_card_information(include_single_use=nil)
    # require 'pry'; binding.pry
    @credit_cards = fetch_credit_cards(include_single_use)
    @cl =CL.method(p)

    endpoing in api.yaml


    @transactions = RestruantsPlus::CustomerTransaction.load(person_id: 12345)

    @transactions # => [RP:CT, RP:CT]
    @t.first.history.each do |h|
      puts h.timestamp
    end
    # user virtus instead of

    def self.load(person_id:)
        CardLinkingService.customer_transactions(person_id: person_id).each do |t|
          RP::CT.new(t)
        end

      api_client = LS::ApiClient.new(:cardlink, nil, defaults)
      api_client.get("/transactions/#{person_id}", params).parsed_response.each do |response|
        RP::CT.new(response)
      end
    end

    @cl = CCtrand.new(@transactions)

    # require 'pry'; binding.pry

    #  _dw iterate throught those cards and find all unique cc id's and on each of those, call
    # LivingSocial::Payments.credit_card_by_id(purchase.person_id, c.id, :payment_method => :paypass) rescue ni
    # that line of code and build a hash lookup table to make it part of credit cards (exted with #is_masterpass? )
    # @credit_cards.masterpass = {
    #   cc_1: 'nil',
    #   cc_2: true
    # }
    # @credits_cards.each do |c|
    #     c.is_masterpass? = LivingSocialPays.
    # }
    # @credit_cards.each {|c| c.extend(PaymentsService::CreditCardExtensions) }
    # @credit_cards.is_masterpass?(card)

    @default_credit_card = @credit_cards.detect {|c| c.default_credit_card }
  end
