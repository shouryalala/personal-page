---
title: "Retail POS"
date: 2020-08-17T10:07:47+06:00
draft: false

# post thumb
image: "images/featured-post/retail-pos.webp"

# description
description: "Computer Vision powered Retail Invoicing"

# subtitle
subtitle: "Computer Vision powered Retail Invoicing"

# taxonomies
categories:
  - "Product"
tags:
  - "Computer Vision"
  - "Idea"
  - "Product"
  - "SaaS"

# post type
type: "featured"
---
To date, most of India's grocery retail happens at small local stores (kiranas), accounting for 75-78% of the consumer goods market.

Most of these local stores only track their inventory on a batch level and do not digitize their day-to-day sales. That means that close to 75-78% of a $883 billion market is offline. This leads to challenges.

#### Downsides
- Shopowners need to be conscious of their inventory and purchase stock based on what sells and what doesnt. This is usually done through intuition.
- As all the sales of the day go un-invoiced, shopowners have a difficult time calculating their end of day profits and also managing their accounts. 
- Brands have a pronounced problem. They would like to understand a bit more about which pincodes or localities are the best selling for them. They'd also like to position their inventory ahead of their competitors, as with a lot of FMCG products, products unseen are products unsold.
- Brands might also like to host targeted campaigns based on perceived interests. But they dont gain a granular understanding of specific markets, more of an aggregated understanding based on the goods sold to higher level distributors.

#### Roadblock
Big shopping stores, retail outlets and supermarkets tend to have a proper point-of-sale(POS) setup with bar code scanners and a computer with a local/cloud software for billing and invoicing. This is a luxury for kirana store operators who refuse to invest in such a setup despite the challenges.

#### Solution
A computer vision model trained on various FMCG products and fine-tuned on relevant local items with a client facing app posing as an advanced 'item scanner'.

##### Product use-case:
- A person enters a local mom-n-pop store, picks up items and approaches the billing counter.
- The billing equipment is nothing but a smartphone on a stand. Shopkeeper scans the items one-by-one within seconds by pointing it at the app opened camera.
- The app compiles the list of items and generates the bill based on pre-set prices for each item. Quantity of items will also be perceived by the app and duly factored in.
- Final prices would be editable in case some changes are required based on customer requests or current offers. 
- App displays a final screen with a QR code that can be used for payment. Transaction is recorded. User shares mobile number at their discretion in case they want a copy of the receipt as an SMS.

#### POC
- Attempted a simple image classifier by using transfer learning over an existing CNN model trained on consumer product images made available by [Stanford research](https://cvgl.stanford.edu/projects/lifted_struct/). ([Tensorflow](https://www.tensorflow.org/datasets/catalog/stanford_online_products) made it extremely simple to get started).
- Model can be trained and refined on different verticals based on categories of items sold. This will improve accuracy and keep manual intervention to a minimum.

![image](../../images/post/retail_pos.gif)

` If core solution is accepted, this can further foray into becoming a SaaS, linked to other stakeholders like distributors or brands, extending this service into automated inventory fulfilment, store offers, credit-line etc.
`

#### Notes/Caveats
- Requires the model accuracy to be strong and needs to be accommodative to new items being added to it.
- Requires the interaction medium to be text-light and action-light. Most kirana store operators are technologically unsavvy and will approach this with low inclination.
- Requires a library of items to be maintained with accurate prices which do fluctuate based on time and region.
- Lots of nuance required to make it production worthy. Some shops sell various kinds of dal and loose condiments for example. 

#### Implementation
- Fine tuning dataset with sample images of local grocery items: https://drive.google.com/file/d/162CY0A6fyVOC4NZEWaq0b7zQJ23zjD41/view?usp=sharing
- Code for using standford_online_products as base and building a specialised model using transfer learning: https://gist.github.com/shouryalala/215a7df39e9d8ec5fbe1c5d357d126e3
- Code for running this model locally on an Android app: https://github.com/shouryalala/retail-pos

