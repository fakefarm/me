# Background Jobs with Rails

## ActiveJob

Notes from [Active Job Basics](http://guides.rubyonrails.org/active_job_basics.html)

background jobs keep your app snappy by performing non-ui tasks in another process, using a background service like Delayed_job.

Jobs have a few parts;
- creating a job queue
- customizing it to act according to specific needs
- calling it from code

Jobs are often used with sending mail

Jobs need to be setup with a second process

Jobs are able to be tested

Jobs have some callbacks to help handle additional necessary actions that may come before or after the performed job

GlobalID is a way to use objects inside Jobs


### creating a job

Active Job provides a Rails generator to create jobs.
`bin/rails generate job guests_cleanup --queue urgent`

You can add the `—queue` flag to run a specific queue

Here's what a job looks like:

```
class GuestsCleanupJob < ApplicationJob
  queue_as :default
 
  def perform(*guests)
    # Do something later
  end
end
```

###  enqueuing it.


## Questions

- what are arguments for?
- what's difference b/n calling `perform` vs. `perform_now`?

- how is a queue setup to be used?
MyJob.set(queue: :another_queue).perform_later(record)
- where / how does namespace help? (staging.low_priority)

## Delayed Job

Notes From [Delayed Job's README](https://github.com/collectiveidea/delayed_job)

### Questions
- since we're using ActiveJob, how much of DelayedJob do I interact with?
- 