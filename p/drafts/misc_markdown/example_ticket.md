# [csr-1743](https://jira.livingsocial.net/browse/CSR-1743)

![masterpass_hero](http://code.livingsocial.net/github-enterprise-assets/0000/0365/0000/5697/09876714-dfd2-11e5-9f67-5da17bc73552.png)

> Provides CSR's with ability to know if a purchase was made with a masterpass, shorted to 'M.Pass' due to size limitations. Turns out that masterpass is a lot like apple pay... the consumer can choose from multiple stored cards on their end, and use for the purchase. Payments creates a temporary CreditCard entry to use for the purchase, but then they delete the CreditCard. That leaves the purchase with a credit_card_id that appears to be a deleted card (ie. Not found in the list of @credit_cards we have in the controller). 
>> _- @dmcvicar

## Testing

run: `bundle exec script/build`
troubleshooting: [running a single test file](http://code.livingsocial.net/dev/csr_tool/blob/master/README.md#testing-a-single-file)

#### Setup

- [ ] I'm suppose to meet with Fernando to setup a local masterpass to return `true` so that you can verify locally.

### Services

- accounts _(for csr)_
- deals _(for csr)_
- deal_bucks _(for csr)_
- fakeybiller _(for csr)_
- csr_tool
- payments
- payments/paypass_service _(for masterpass)_

### Steps

1. Login into csr: q.lsdev.co
2. search for local person: q.lsdev.co/search
3. have a local credit card setup: [ 1 ] todo
4. add masterpass to the local card: [ 1 ]

todo

[ 1 ] Meet with @fernandoaleman