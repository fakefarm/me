require 'test_helper'
require 'fizz_buzz_iterator'

describe FizzBuzzIterator do
  # before do
    # @iterator = FizzBuzzIterator.new
  # end
  let(:iterator) { FizzBuzzIterator.new }

  it 'outputs sequential FizzBuzz values starting from 1' do
    iterator.next.must_equal 1
    iterator.next.must_equal 2
    iterator.next.must_equal 'Fizz'
    iterator.next.must_equal 4
    iterator.next.must_equal 'Buzz'
    iterator.next.must_equal 'Fizz'
  end

  describe 'when initialized without a starting value' do

    let(:iterator) { FizzBuzzIterator.new(10) }

    it 'outputs sequential FizzBuzz values when starting from the starting' do
      iterator.next.must_equal 'Buzz'
      iterator.next.must_equal 11
      iterator.next.must_equal 'Fizz'
      iterator.next.must_equal 13
      iterator.next.must_equal 14
      iterator.next.must_equal 'FizzBuzz'
    end
  end
end
