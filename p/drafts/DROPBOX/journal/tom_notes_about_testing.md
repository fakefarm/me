# gets redireted
  test "_dw require person" do
    # _dw NOTES
    # 1. get your factory ()
    # i must mock something...
    # 1. setup environment / Establish context / data
    # - factory, fixture, vcr, stub
    # depending on what the test needs.
    # ---
    deal = FactoryGirl.create(:dated_escape_deal)
    # Whats the assoc b/n the deal and person that ties them together?
    # setup
    # 2. issue a http request
    # 3. Check response, code, or redirect.
    # --- what's the MTt methods for me to check?

    #
    # Create a purchase that hooks deal with person
  end

  # person hasn't already purchased dated escape and shouldn't be allowed.
  # add a before filter to check that.
  # what happens when they attempt to purchase share - flash 'sorry', and redirect
  # 1. explore? / spec
  # how do i know if a DE? - es_de.rb#dated_es?
  # on any deal instance

  # how do i know if the deal is purchased by this user
  # if yes - redirect, if no - continue (default)
  # _dw

  # 1. writing a test
  # looking for a factory / fixture to interact with

  # make a test purchase see / explore data structure - marker exist to tell what i'm dealing with.
