# New relic

APM stands for _Application Performance Monitoring_

"How is our application doing?" in which regard?  
- cost
- time
- speed

APM's are custom per language, using Agents. So, there is an agent for Ruby. NR gathers application data every minute from the monitoried application and sends it home to be minitoried. NR also provides a JS plugin to see end user data from their browser.

# NR offers 5 types of monitoring

1. application
2. server 'how much disk space / ram / cpu'
3. browser monitoring
4. mobile monitoring (ios / android)
5. availability (geographic pingers)

Step 1; Install the agent
visit docs.newrelic.com and install the [ruby agent](https://docs.newrelic.com/docs/agents/ruby-agent/getting-started/new-relic-ruby#monitor-performance)

## Breadcrumbs

There are lots of different URLS for different things. I’m going to record what is what, and why.

### New relic docs related

## User Interface Functions

[User Interface Functions](https://docs.newrelic.com/docs/data-analysis/user-interface-functions)

At this page you will find the following topics;


### View Your Data

- Standard page functions
- Supported browsers for New Relic's UI
- Time picker: Setting time periods to view data
- Selecting chart views
- Histograms: Viewing data distribution
- Percentiles: Comparing ranked data
- Response time
- Switching between New Relic products

### Organize Your Data

- Labels and categories: Organize apps, servers, monitors

### Share Your Data

- Permalink
- Embed charts in external webpages
- Public and private notes
- Ticketing integrations with JIRA, Lighthouse, and Pivotal Tracker

### Troubleshooting

- Embedded charts are missing metrics

## New Relic APM

[New Relic APM](https://docs.newrelic.com/docs/apm/new-relic-apm)

### Getting Started

- Welcome to New Relic APM
- Networks
- View an app's alert information in APM
### Apdex

- Apdex: Measuring user satisfaction
- View your Apdex score
- Change your Apdex settings
### Maintenance

- Recording deployments
- Remove applications from the New Relic UI
### Troubleshooting

- CPU usage mismatch or usage over 100%
- Charts missing or do not render

## Apdex: Measuring user satisfaction

[Apdex: Measuring user satisfaction](https://docs.newrelic.com/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction) An explanation of Apdex.

## Servers
[Servers UI](https://docs.newrelic.com/docs/servers/servers-dashboards/servers-ui)

- New Relic Servers and New Relic Infrastructure
- Use the Servers UI
- Remove servers from the New Relic Servers UI
- Alert information in New Relic Servers
- New Relic Servers Overview page
- New Relic Servers Processes page
- New Relic Servers Network page
- New Relic Servers Disks page

[Heroku: Install the New Relic add-on](https://docs.newrelic.com/docs/accounts-partnerships/partnerships/heroku-new-relic/heroku-install-new-relic-add-on)

Information on setting up things with heroku

[Ruby agent installation](https://docs.newrelic.com/docs/agents/ruby-agent/installation/ruby-agent-installation)

Information on setting up things with rails

## Ruby custom instrumentation

[Ruby custom instrumentation](https://docs.newrelic.com/docs/agents/ruby-agent/customization/ruby-custom-instrumentation)

- Method tracers
- Tracing in class definitions
- Tracing initializers
- Tracing blocks of code
- Naming transactions
- Tracing transaction entry points
- Instrumenting non-web transactions
- For more help


## Ruby agent configuration

[Ruby agent configuration](https://docs.newrelic.com/docs/agents/ruby-agent/configuration/ruby-agent-configuration)

You can configure the New Relic Ruby agent with settings in a configuration file, environment variables, or programmatically with server-side configuration. This document summarizes the configuration options available for the Ruby agent.
