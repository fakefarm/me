# OWASP Top 10 2013

# 1. SQL Injection
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
