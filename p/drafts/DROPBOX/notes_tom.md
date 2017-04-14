# notes with Tom.

deals-service to get an LS::Deals::Deal instance stored in database (deals-service)
travel-service

irb(main):074:0> Deal.find(1369816).short_title
=> "Full Service Oil Change"

irb(main):075:0> Deal.get(1369816).short_title
=> "Full Service Oil Change"

Deal.find(1369816).class # uses AR to query db.
=> LocalDeal(id: integer, short_title: string, long_title: string, description: text, additional_information: text, offer_starts_at: datetime, image_url: string, fine_print: text, created_at: datetime, updated_at: datetime, coupon_print_instructions: text, phone: string, short_url: string, offer_ends_at: datetime, city_id: integer, coupons_count: integer, gift_title: string, maximum_orders_per_purchase: integer, bronto_clicks: integer, bronto_opens: integer, expires_on: date, revenue: float, living_social_percentage: decimal, charge_credit_card_fees_to_merchant: boolean, bonus_deal: boolean, check_payee: string, check_address: string, pipeline_deal_id: integer, incentivize_fans: boolean, fb_fan_incentive_amount: decimal, fb_fan_page_id: integer, zoom: integer, secondary_image_url: string, created_by: integer, rejection_reason: text, contract_signed_on: date, deal_comments_count: integer, expiration: string, terms: text, merchant_id: integer, limit_orders_per_purchase: boolean, coupons_per_redemption: integer, maximum_number_of_gifts: integer, aasm_state: string, other_deal_limitations: text, special_date_request: string, deleted_at: datetime, scheduling_note: string, salesforce_account_id: string, copy_complete: boolean, copywriter_id: integer, copy_due_on: date, designer_id: integer, cannot_be_gifted: boolean, neighborhood_id: integer, charged_amount: decimal, charge_daily: boolean, from_salesforce: boolean, send_expiration_email_on: date, merchant_portal: boolean, facebook_shares_count: integer, deal_types: integer, type: string, language_id: integer, cloned_from: integer, nearby_radius: integer, referred_by: integer, merchant_display_name: string, owned_by: integer, twitter_shares_count: integer, approval_type: string)



irb(main):078:0> Deal.get(1369816).class
=> LS::Deals::Deal 


front:  deals
gem:    ls-deals
back:   deals-service
