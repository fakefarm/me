# OWASP Top 10 2013

# Unvalidated redirects and forwards

Users trust your site, so if you have open redirects then hackers will take advantage of such links against your users. Since the defense is relatively simple and avoidable - it is suggested to perform redirects server side. If redirects must be used, consider employing a whitelist of acceptable domains to ensure users don't get sent off-site.

If the redirect is not properly validated, an attacker can use this link against you. They will take the link, add their own malicious site to the URL and send this link out to other users. Chancers are that users make actually click on the link because it looks like it's coming from your server since it's bouncing off your web application. When a user clicks this malicious redirect, they will be taken to an evil site that in some cases can even be made to look very similar to yours in order to trick users.

Example

[Covert Redirect security vulnerability found in OAuth and OpenID](http://securityaffairs.co/wordpress/24585/intelligence/covert-redirect-oauth-openid.html)

The solution is simple. Don't allow redirect parameters to be specificed.
