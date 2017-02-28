
# OWASP Top 10 2013

#  Missing functional level access control

Sometimes known as 'force browsing' or failure to restrict access. It is a common vulnerability where URLs or links, are not adequately protected when they are browsed directly. [Just in time: Facebook restores New Year’s messaging service after plugging privacy loophole](https://thenextweb.com/facebook/2012/12/31/just-in-time-facebook-restores-new-years-messaging-service-after-plugging-privacy-loophole/#!zayAT)

The best defense is good auth management which usually rquires using code to restrict access to internal application pages.

Most frameworks have the ability to define roles or auth (Pundit) but applying it to the framework requires significant advanced planning of roles and responsibilities.

## Defenses
### Page level authorization
the goal is to check access level of the user. However, the problem with page-level access control is that if a user has access to the page, they potentially have access to all its functions as well. (CRUD) when they should only be allowed to READ. You cannot assume page level authorization is enough.

### Programmed Authorization
It's easy to check whether a user has logged in, but often more granularity is required where only certain users should have authorization to read or even modify data. Typically what you need to do is design controls within your application to perform complete mediation and use programmed application logic to control authorization. It requires sound architecture as many pages can be involved.
