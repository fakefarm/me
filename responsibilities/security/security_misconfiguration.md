# OWASP Top 10 2013

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
