require 'test_helper'
require 'fizz_buzz'

class FizzBuzzTest < Minitest::Test
  def setup
    @fb = FizzBuzz.new
  end

  def test_converts_multiples_of_fifteen_to_fizzbuzz
    # More compact and less duplicated, but might be harder to read
    [15, 45, 90].each do |i|
      assert_equal 'FizzBuzz', @fb.convert(i)
    end
  end

  def test_converts_multiples_of_five_to_buzz
    assert_equal 'Buzz', @fb.convert(5)
    assert_equal 'Buzz', @fb.convert(20)
    assert_equal 'Buzz', @fb.convert(25)
  end

  def test_converts_multiples_of_three_to_fizz
    assert_equal 'Fizz', @fb.convert(3)
    assert_equal 'Fizz', @fb.convert(12)
    assert_equal 'Fizz', @fb.convert(21)
  end

  def test_returns_same_number_for_other_numbers
    assert_equal 4, @fb.convert(4)
    assert_equal 8, @fb.convert(8)
    assert_equal 22, @fb.convert(22)
  end

  def test_raises_argument_error_for_bad_argument
    skip 'not yet implemented'
    assert_raises(ArgumentError) { @fb.conver(-1) }
    assert_raises(ArgumentError) { @fb.conver(0) }
    assert_raises(ArgumentError) { @fb.conver('foo') }
    assert_raises(ArgumentError) { @fb.conver(nil) }
    assert_raises(ArgumentError) { @fb.conver(1.0) }
  end
end
