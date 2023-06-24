---
title: "Retail POS"
date: 2021-10-29T10:07:47+06:00
draft: false

# post thumb
image: "images/featured-post/retail-pos.png"

# meta description
description: "Computer Vision powered Retail Invoicing"

# taxonomies
categories:
  - "Idea"
tags:
  - "Computer Vision"
  - "Idea"
  - "Product"
  - "SaaS"

# post type
type: "featured"
---
Till date, most of India's grocery retail happens at small local stores (kiranas), accounting for 75-78% of the consumer goods market.

Most of these local stores only track their inventory on a batch level and do not digitize their day-to-day sales. That means that close to 75-78% of a $883 billion market is offline. This leads to challenges.

#### Downsides
- Shopowners need to be concious of their inventory and purchase stock based on what sells and what doesnt. This is usually done through intuition.
- Shopowners cant calculate their EOD profits. They can only calculate their net sales for the day via cash received + the deposits settled in their bank.
- Brands have a pronounced problem. They would like to understand a bit more about which hyperlocal regions or pincodes are the best selling for them. They'd also like to position their inventory ahead of their competitors, as with a lot of fmcg products, visibility is king.
- Brands would also like to host targetted campaigns based on perceived interests. But they dont gain a granular understanding of specific markets. More of an aggregated understanding based on the goods sold to higher level distributors.

#### Roadblocks
Big shopping stores and retail outlets tend to have item scanners and a desktop setup with a local/cloud software for billing and invoicing. This is usually a luxury for kirana stores.

#### Solution
A CV model trained on various FMCG products with a client facing app posing as an enhanced 'item scanner'

##### Product level:
- User comes in, picks up items and approaches the billing counter.
- The billing equipment is nothing but a smartphone on a stand. Shopkeeper scans the items one-by-one within seconds by pointing it at the app opened camera.
- The app compiles the list of items and generates the bill based on pre-set prices for each item. Quantity of items will also be perceived by the app and duly factored in.
- Each subtotal would be editable in case some changes are required based on customer requests or current offers. 
- Transaction is stored. User shares mobile number at their discretion in case they want a copy of the receipt as an SMS.

#### POC
- Attempted a simple POC using transfer learning over an existing open dataset made available by Stanford research (link here)
- Model can be trained and refined on different verticals based on categories of items sold. This will improve accuracy and keep manual intervention to a minimum 
- If core solution is accepted, this can further foray into becoming a SaaS, linked to other stakeholders like distributors or brands, extending this service into automated invetory fulfillment, store offers, credit-line etc.  

![image](../../images/post/retail_pos.gif)

#### Notes/Caveats
- Requires the model accuracy to be strong and needs to be accomodative to new items being added to it
- Requires the interaction medium to be text-light and action-light. Most kirana store owners are technologically unsavvy individuals who will approach this with low inclination.
- Requires a library of items to be maintened and prices fluctuate based on time and region
- A lot of misc things to be thought about. Some shops sell various kinds of dal for example.  Model will be able to capture the item but not the sub category. Stores tend to sell loose condiments too. Or off-brand items. Or season based items
- Monetization - Target audience is specifically price sensitive

