# Security

# SQL Injection
A vulnerability where untrusted input from the web application is accepted as database input which can alter the intent of the original query. This can happen everywhere _untrusted input_ may be accepted into a SQL query but can also affect other back end systems (LDAP, OS, etc.)

### Solution
Do not use string building for SQL, and instead use queries with _bind parameters_ to ensure that data is differentiated from code.

# Broken Authentication
Broken authentication is often the result of weaknesses is how a user's session is managed. Some common weaknesses include;

### Session Highjacking
Open transmission of tokens and session data without encryption of traffic

### Weak passwords
Passwords are not set stringently or can be attacked easily

### Poor logout and timeout
Session is not terminated after inactivity or forced logout

SessionID's are how users are identified in web applications and so disclosing this SessionID is dangerous as users can be impersonated. Encryption is a good first defense against traffic sniffing and can help protect clear-text traffic on the Internet

Account lockouts or increasing time delays can help deter hackers from automated attacks against web applications. 

Implementing session timeouts can also help ensure that if a session is stolen, but the time it is use, it has already expired.

- session timeouts
- account lockouts
- increasing time delays
- encryption

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

# Security Misconfiguration
Misconfiguration is a very broad topic, but it comes down to ensuring systems and software are configured with secure settings. Often this comes town to simple matters such as limiting the amounts of information you system discloses to attackers. It can also relate to hardening of servers and ensuring that your system and software are hardened consistently accross your applications. 
For software to remain secure, it must be configured so that security principals are not violated or ignored. This typically requires managing the configuration of the software and even more importantly, the configuration of the deployment environment. We must consider;

### hardening
how is the system configured? Is it secure? Did we disable unnecessary services and make the OS as restrictive as possible against attack?

### environment configuration
is the environment well managed and configured to only allow authorized individuals? 

### Bootstrapping
Is the physical security of the server iteself, secure? Or, can startup parameters get tampered and altered maliciously?

### Verbose Error messages
One of the common misconfigurations is verbose error messages. They can give away to much information.

#### Database Errors
DB error messages can lead to SQL injection as they can act as a guide for attackers to perform the perfect injection attack.

#### login errors
Too much information about the error's origination of username or password is too specific. Saying 'wrong password' implies that the user does exist. 

#### Stack traces
Commonly seen stack traces or debug information also provides version data to a hacker. They can then research for known vulnerabilities.

### Weak Configuration
Setting up environment or software incorrectly can also lead to errors. 

#### Hardcoding information
Avoid hardcoding sensitive information in configuration files or code. Attackers can reverse code to find this data - even in git commit history

### Defenses
Use generic error messages. 

Configuration activities related to ensuring a secure and consistent environment b/n development, test, and production include disabling test or guest accounts, disabling unnecessary services, explicitly assigning restrictive access, and esuring you have a configuration database. 

Test accounts should follow least privilege and any test or guest accounts on the server must be disabled or removed.

Services that are not required should be removed becaues they can be targets for exploit as they are likely to stay unmaintained. 

Access rights should be granted explicitly and denied by default in each environment (dev, test, prod)

### Hardening
Hardening is the process of locking down a system to the most restrictive state possible, so that it is secure. This often relates to locking down hardware, OS services, and installed server software.

#### Hardware and systems
The goal is Minimum Security Baseline (MSB) this baseline can be unique to each org based on policy or follow industry standard. The goal with MSB is that each new deployed system is secure by default by a repeatable, less error prone system image

#### OS Services
OS can by default run potentially unneeded service that are insecure. For example, a web server, or FTP client that you don't use can allow hackers in. Hardening services involves disabling or removing services that can be accessed. This also includes disabling or restricting access to guest/default accounts that often come bundled with services

#### Software
The final step is to ensure that your software is well developed and does not leave any room for vulnerabilities. Check for any debugging, flags, or unnecessary comments that might prove informative.

Question - what is a standard build as far as I'm concerned?

# Sensitive Data exposure
Typically issues revolve around poor implementation or insecure storage of sensitive data. Examples include stolen user databases where passwords were stored in plain-text or in an easily disclosed format. Frankly, it is rare that insecure cryptographic storage is about breaking encryption. More often, it is about a complete lack of encryption when storing sensitive data or poor management of encryption keys. 

You see this often when databases are stolen and hashes are stored in MD5 or some easily breakable method.

## Qualities of insecure storage
- insecure storage of sensitive data
- insecure key managment
- weak encryption algorithms
- lack of encryption

## defenses

### What is sensitive?
The first step is identifying data sensitivity. Before considering encrypting data we need to understand the flow of data and the information which passes through the application. We need to know what data we pass in order to know what to protect. It is not always obvious what level of data sensitivity may be flowing through the application. Without identifying and classifying data, it can be challenging to quantify the level of protection required. 

### Thread modeling
TM is a process that helps identity key threats to software at the early stage of design, so that when it comes to implementation, countermeasures are well thought out. TM is a proactive process to help ensure we address threats at an early stage. Security features are designed and prioritized at the beginning. 

#### Example
Search function threats;
- unauthenticated search
- malicious data injection

Login Function Threats
- attacks against authentication
- malicious data injection

(Here we notice both have malicious data injection and so we can proactively ask _How can we address both consistently?_)

### Thread model process
1. Design
This phase should include data flow and diagrams which are good at determining how data is used within the applciation and also areas where weaknesses may be present. 

#### What to diagram?
- external entities
- processess
- data flow
- storage
- trust boundaries (network layers)

2. Threats
After diagramming, each item in the diagram will be exposed to threats that need to be identified. An easy way to introduce teams to identifying threats is to use STRIDE

#### Be reasonable
Don't worry about certain scenarios:
- admin hacks users
- users hack themselves
- malware
- stringent threats to physical access

3. Controls
Having a list of threats, it is not time to migitage and implemtn controls to crate secure software. A good approach is to first consider mitigations that are simple to implement or reusable before inventing your own. For any risk that can't be mitigated, you may want to see procedures for risk acceptance.

#### Remember
Keep in mind that threats and risk can be 
- avoided
- reduced
- transferred
- accepted

This decision is typically made by the business.

4. Validate
It would be best to ensure that your final threat model and mitigation strategy matches up with the final code. The verification phrase ensures that teams verify the entire threat model to ensure all threats are considered. The diagram should match the final code. 

#### Validate