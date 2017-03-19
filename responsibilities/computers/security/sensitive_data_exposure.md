# OWASP Top 10 2013

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
items to validate include
- quality of threats
- qualities of mitigation
- dependencies
- assumptions

## Cryptography Defenses

Strong crypto mostly has to do with storing sensitive data, algorithms, and protecing keys.

### Data
If possible don't store data that is considered _sensitive_. If you do store it, it should never be stored in plain-text and instead should be encrypted. When storing encrypted data using one-way hashes, add salt to prevent automated attacks.

### Algirithms
Don't develop your own encryption algorithms. Instead use cryptographically strong APIs provided by the programming language. Understand which algorithms have known weaknesses.

### Key Management
Use cryptographically strong random number generators to create private keys. Avoid pseudo-random or weak generators as they may not be sufficient for encryption. Key management often means thinking about policies for key creation, rotation, destruction and controlling access to keys.

## Transport Layer Security (SSL / TLS)
To protect confidentiality on the Internet you will need TLS or some know this as SSL and HTTPS. Web traffic by default is unencrpyted and open for anyone to intercept and log.

This is acceptable in situations when data is public or low sensitivity, but if you have a high confidentiality requirement, say safeguarding a user's password, you will want to implement encryption on the network layer to protect confidentiality.

## Hashing with Salts
Salting a hash means adding random data data to the message so that it does not always produce same output.

## Summary

Don't store sensitive information if you don't have to because doing cryptography is difficult. But if you must store date, remember to use strong crypto algorighmms (SHA 256) that are proven and tested. Key management is a process that is not always easy, so ensure you have documentation to securely protect and manage your keys.