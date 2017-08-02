## links
http://tryruby.org/levels/1/challenges/0

When /I sign in/ do
  within("#session") do
    fill_in 'Email', :with => 'user@example.com'
    fill_in 'Password', :with => 'password'
  end
  click_button 'next'
  click_button 'next'
  click_button 'next'
  click_button 'next'
  $('#sgE-2581793-7-714-box select > option:eq(1)').attr('selected', true);
  
end

// fill out required info...


// navigate to page 4 times

$('.sg-next-button').click()
$('.sg-next-button').click()
$('.sg-next-button').click()
$('.sg-next-button').click()

// select value

// submit form
$('.sg-submit-button').click()