# Keep your Heroku app snappy with New Relic's free availability reporting add-on.

Developers like to joke that a site must be hosted on [heroku](http://www.heroku.com) if it takes a while to load.
There's an easy way to keep your site live and snappy...

## 1. Go to heroku's add ons

[link to new relic add ons](https://addons.heroku.com/newrelic)

## 2. click the standard plan to see how to add to heroku from terminal;

    heroku addons:add newrelic:standard

## 3. Login to new relic's dashboard;
[dashboard](https://rpm.newrelic.com/accounts/452705/applications/setup)

Follow their 6 easy steps. (I won't repeat them here.)

## 4. Configure the .yml file they give you.

I just changed my app name to [destroy all tasks](http://www.destroyalltasks.com)

## 5. From the dashboard, go to Applications > Reporting
![](https://dl.dropboxusercontent.com/u/13563632/hireDave_images/new_relic_step5.png)

## 6. Then, add the site to ping and have it ping every minute.
![](https://dl.dropboxusercontent.com/u/13563632/hireDave_images/new_relic_step6.png)

