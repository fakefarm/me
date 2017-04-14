h1. Part 1 - Creating CSR Sales
[~dave.mcvicar] will update (purchases_controller#create) to return {{consumer_id}}, {{deal_id}}, {{purchase_id}} in addition to {{msg}} each time a successful CSR Purchase occurs. 

h3. Is this accurate?
!create.png!

h1. Part 2 - Retrieving CSR Purchase Reports
h2. Model
h3. csr_purchases.rb
_we want query the purchase by purchase_id_

h4. attrs

{code:ruby title=Bar.java|borderStyle=solid}
  t.integer  :deal_id,
  t.integer  :consumer_id,
  t.integer  :csr_id,
  t.decimal  :purchase_id, :precision => 8, :scale => 2, :default => 0.0
  t.string   :promo_code, default: nil
{code}

h2. lib
h3. csr_purchase_report.rb

h4. Comments

{code:ruby title=Bar.java|borderStyle=solid}

  def initialize(params)
    @purchases = CsrPurchases(params).generate!
    # pull all CSR purchase records for that time periods, grouped by CSR ID. 
  end

  def generate!
  end

private

  def total_price_before_refunds; end
  def refundable_amount; end

{code}

h2. Controller
h3. csr_purchases_controller

{code:ruby title=Bar.java|borderStyle=solid}
  def index
    @report = CsrPurchasesReport.new(params[:search]).generate!
    format => csv
  end
{code}

h2. Routes
{code:ruby title=Bar.java|borderStyle=solid}
  resources :csr_purchases, only: [:index, :create]
{code}

h2. View

csr_purchases/index.html.erb

h2. Workflow
!read.png!

h2. Questions
1. Should making sure its Paid aasm_state be on model or lib object?
2. Should getting the amount paid (amount of original purchase) and amount remaining to be refunded be on model or lib object?
3. Where/how do we retrieve purchase information from DEALS. `purchases_info` endpoint?





===========================

Dave McVicar  10:21 AM
http://code.livingsocial.net/dev/csr_tool/blob/master/app/controllers/purchases_controller.rb#L81

1 creating the CSRPurchase Record each time a succesful CSR Purchase occurs

json {{ msg: quantity_warnings(purchase, quantity) || "Purchase created" }}

json {{ msg: "purhcase created", purchase_id: purchase.id }}

if purchases are successful then 

1 creating CSRPurchase record, that store purchase_id and other context. forget about amount and store the purchase_id In 1.

2 updated the purchases_controller#create in deals
to return purchase_id in addition to msg:

http://code.livingsocial.net/dev/deals/blob/master/app/controllers/api/v3/internal/purchases_controller.rb#L200

consumer_id, deal_id, purchase_id

Deal.purchase.save -> should have an id.


3 lib/csr_pruchase_report.rb generates the report based on input params
there is the logic where we go for time period - pull all CSR puchase records for that time periods, grouped by CSR ID. Go retrieve purchase information from DEALS. `purchases_info` endpoint

generating report, we want query the purchase by purchase_id

a. make sure its Paid aasm_state
b. get the amount paid (amount of original purchase) amount remaining to be refunded!!!




http://code.livingsocial.net/dev/csr_tool/blob/master/lib/deals_api.rb#L175
should give us amount paid and status


http://code.livingsocial.net/dev/deals/blob/master/app/controllers/api/v3/internal/purchases_controller.rb#L56
total_price_before_refunds
refundable_amount

use something like;
app/controllers/cases_controller.rb:101
then will be able to use that 'p' to run methods
p.total_price_before_refunds
p.refundable_amount



@dave will update purchase #show to return amounts before and after refund
