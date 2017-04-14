# notes w/ John
- Deals controller test
- stubbing city@controller.stubs(:remote_city).returns(Hashie::Mash.new(:id => 1))
- logging in
- vcr reuse doesn't really happen.
- recording cassettes
#record_cassette - to re-record a test if a test fails.
    test "should 404 if the deal is not found" do
      record_cassette
      @controller.stubs(:find_deal_by_id).returns(nil)
      get :show, :id => 123454123451
      assert_response 404
    end
- if a test is making an external request it's automatically making a cassette.

## Gotchas
  when context - use record_cassette in setup rather than should. Then, delete it.

    context "#show" do
      setup do
        @deal = get_first_remote_deal
        @dp = Presenters::Deal.new(@deal)
        record_cassett <------- record here when using context.
      end

      should "not redirect away from dead cities to prevent infinite redirect loop" do
        # https://m.livingsocial.com/cities/1749/deals/676046
        get :show, :id => '676046-four-hour-shark-fishing-trip', :city_id => '1749-greater-orlando'
        assert_response 200
      end


Test helper
login_as :dwoodall
password is 'livingsocial'
