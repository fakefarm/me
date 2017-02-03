# New relic

APM stands for _Application Performance Monitoring_

"How is our application doing?" in which regard?  
- cost
- time
- speed

APM's are custom per language, using Agents. So, there is an agent for Ruby.

NR gathers application data every minute from the monitoried application and sends it home to be minitoried. 

NR also provides a JS plugin to see end user data from their browser.

# NR offers 5 types of monitoring
1. application
2. server 'how much disk space / ram / cpu'
3. browser monitoring
4. mobile monitoring (ios / android)
5. availability (geographic pingers)

Step 1; Install the agent
visit docs.newrelic.com and install the [ruby agent](https://docs.newrelic.com/docs/agents/ruby-agent/getting-started/new-relic-ruby#monitor-performance)