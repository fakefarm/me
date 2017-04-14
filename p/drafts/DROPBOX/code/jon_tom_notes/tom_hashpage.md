# notes on Hashpage.
_2015-02-24_

ruby method #dir
wkhtmltopdf gem

# Time tracking gem
.csv
template
.css
rake task
convert to pdf

- in bewteen the request and the view, there's going to be some stuff to add to the line.

# App/Services 

## FetcherPresenter
- it's job is result from get all tweets call
- FP has a methods #90_day_data
(the word 'reports' is a 'key word')

#show
    @presenter = FetcherPresenter.new(TwitterClientWrapper.client.get_all_tweets(@fetcher.username))

    show.html.erb

    <% presenter.90_day_data.each 

### Benefit
It's more of a pure ruby object. Nice thing is you can go to concolse. presenter.new() and call methods on it to make sure all sorting is working properly.


### Feature questions to ask
- how fresh? (weekly, or instant?)
- where do you put them? (mem cashe, database)

## Rails is a single thread
Example. 20 people reqeusting
- 20 people x 20 seconds = 400 seconds for last person, which the browser would timeout (a configured time) - usually between 30 - 60 seconds.
- anything more than 3 or 4 seconds - time to redesign
- unless you get more than one heroku workers
- deals#show get 333 requests a second b/c we have 60 unicorn workers serviing requests fast enough.

## backgroud 
- resque job
- when a customer says give me this tweets  - it can be sidkiq, delayted job, reque job 
- returns immediatley back to the user
- poll occationaly and do a js spinner
- cron job could run every 10 minutes. I'll send a tweet when it's done.

