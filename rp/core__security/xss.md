# OWASP Top 10 2013

# Cross Site Scripting (XSS)
XSS is hacking with javascript. A difficult to understand vulnerability but basically it is what happens when browsers confuse untrusted user input as code. Since JS powers interaction on the web, JS and thus XSS can do nearly anything, including;

- modify HTML DOM
- forwarding
- redirecting
- accessing cookies
- automating user clicks and actions
- create new forms
- alter where links go
- draw hidden elements on a page

There are three main forms we discussed that each operate uniquely - known as reflected XSS, stored XSS, and DOM based XSS

Input validation using blacklisting/whitelisting helps, but only if you canonicalize first. However, these lists should never be the only defense.

The best defense is _escaping_ because it differentiates data from code but you must escape for the right context or it is useless. Review the [XSS Cheatsheet](https://www.owasp.org/index.php/XSS_\(Cross_Site_Scripting\)_Prevention_Cheat_Sheet) to learn more.

### Defense
When defending against XSS, you should consider whether we are working with input or output. It sounds strange but there is a differentiation due to XSS being an output display problem.

#### Input
With input validation this is what we traditionally associate with validating untrusted information by:
- blacklisting,
- whitelisting, or
- simplifying the input into a common form (aka canonicalization)

##### Blacklist

A blacklist is a list of criteria that if found, will cause the input to be rejected. A blacklist is helpful, but it should never be used exclusively because there are many different representations of the same character code. In such cases, certain characters used within XSS can slip through the blacklist.

##### Whitelisting

Whitelisting is the opposite of a blacklist in that only characters within the criteria will be accepted and everything else will be rejected. This is useful for text with a strict format.

#### Output

With output validation we are talking about

- encoding or
- escaping

and most XSS attacks can be solved through output validation only, however a defense in depth approach is typically best.

### Next step

Need to become familiar with the Character Codes and which one to canonize on. Second, I need to better understand when and where to escape content.

# Insecure Direct Object References
[Top 10 2010-A4-Insecure Direct Object References](https://www.owasp.org/index.php/Top_10_2010-A4-Insecure_Direct_Object_References)

Direct object references are common with web applications that serve profiles, reports, or files to user. Indirect mapping helps make the direct reference, abstract and difficult to guess  for an attacker or curious user.

Tampering with parameters can often lead to a vulnerability where users easily gain access to unauthorized information. When providing direct access to objects you can lend yourself to directory traversal vulnerabilities where attackers try to access sensitive system files. Accessing the filename of `../../` results in breaking out of the directory that stories PDF files (in this example) and possibly accessing more sensitive files on a server.  This is known as insecure direct object reference. This isn't just in URL parameters. Forms, cookies, any place where data can be tampered with is vulnerable.

It is important to ensure users are authorized to access the resources they request.

### Defense tactics

When it comes to defending against direct object access (DOC), the defines should be considered two-fold. We must first take a look at the authorization of the user when accessing the URL, then the indirect access map itself.

Believe it or not, the most common way that DOC is discovered is by people sharing URL's with others. This is why we must first consider authorization of the user before looking up the object requested. If the user is not authorized, they should be redirected to the login screen.

Only once a user's authorization is successful, we can now process the requested resource.

#### Indirect Access Maps

use IAM's to generate a unique random value each  time that acts as an indirect object reference. No longer do we simply say 0001, but we use the random value as the unique URL. This prevents sequential guessing of account numbers. Depending on the sensitivity of the data, you might consider making the IAM different on each page load - though that will take more server processing time.
