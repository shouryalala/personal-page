---
title: "CRYB"
date: 2021-10-28T10:07:47+06:00
draft: false

# post thumb
image: "images/featured-post/cryb-banner.webp"

# meta description
description: "Hyperlocal Home Assistance by empowering the overlooked"

# taxonomies
categories:
  - "Product"
tags:
  - "Firebase"
  - "Node.js"
  - "Java"
  - "Dart"
  - "Hyperlocal"

# post type
type: "featured"
---
Hyperlocal Home Assistance by empowering the overlooked

*An app based, on demand solution for providing reliable home assistance for a diverse range of requirements, with a focus on diligence, creating trust amongst users and empowering assistants.*

The core idea was to build an incredibly capable interface for engaging with an illiterate target audience. This would allow us to unlock more gig opportunities for this audience using technology, thereby driving more income.

### Background:
- 4/5 metropolitan households rely on domestic help for daily household chores such as home cleaning, cooking, odd chores etc
- There are over 50 million domestic help workers in India. Most of them women. Most of them uneducated.
- The entire demand and supply exists on an informal economy with no structure for sourcing, vetting, or payments.
- There is a distinct sense of dis-satisfaction on both sides - residential customers living in societies and gig workers who are averse to technology.

### CRYB - Core Offering:
1. Simple vernacular UI for assistants who have a basic grasp of language.
2. Voice first - each text element had text to speech.
3. Built as an app for Android OS and KaiOS (lightweight OS used by $20 JioPhones).
4. Also supported a conversational interface via dynamic IVR - Assistants could use a simple T9 non-smartphone and call a number and press digits to engage in their local language.

### More features:
- Schedule management based on ongoing and upcoming work, location, and availability.
- Full screen overlay over lock screen to drive ease of use - Reminder of upcoming work or a new job request would wake up the entire phone and put yes/no actions in front.
- Dynamic request relaying - If a job request goes unanswered after multiple tries, the request gets forwarded to the next eligible assistant in real-time without customer hassle (similar to Uber searching for drivers)
- Automatically raises volume if accidentally muted. Automatically alerts about phone low battery. Automatically alerts about phone internet recharge or no connection. Offline reminder mechanism even if internet not available. (These were added keeping the target audience in mind)
- Rating mechanism, job history, payment history and income statement and such. 

<!-- ![MVP Screenshots](../../images/post/cryb-asset-1.webp) -->

### Expected outcome:
- Assistants no longer have to solely rely on word of mouth to find new jobs.
- Residents can leverage this added ease of requesting for help to get even more done.. eg: help with guests coming over in the evening.
- Adhoc requests would mean that assistants can earn more income by utilising their idle time much more effectively.
- Resident feedbacks, on-time presence, ratings, past work history etc will drive accountability and deter abrupt loss of job.
- Standardisation in service would mean consistent pricing and better income. 

### Execution:
* This product could act as a seamless plug-in for companies currently active in urban household service provider domain. This includes startups in the gated community management business or companies providing skilled labour for hire or even hyperlocal e-commerce.
* Go-to-market as a standalone product also has advantages as societies act as small demarcated units with their own pool of assistants and hundreds of residents. This allows focussed marketing and agile scaling.
* As this augments an existing service, demand supply flywheel does not need to get created from scratch and can in fact, onboard the existing network and grow from there.

### MVP/v0:
![Tech Stack](../../images/post/cryb-asset-2.webp)

A fairly extensive MVP was created with Java for the assistant client app and Node.js deployed on serverless Cloud Functions on the backend. A resident facing client app was also created using Flutter. The codebase for each exists here:

- Code for the Assistant Client App: **https://github.com/shouryalala/kanta-maid-client-app**
- Code for the Resident Client App: **https://github.com/shouryalala/ria_client_app**
- Code for the Serverless backend: **https://github.com/shouryalala/ria-server**
- Wannabe pitch deck: [Pitch Deck](https://docs.google.com/presentation/d/e/2PACX-1vS8S7T9MG4xInt_CD_3i6cSaBSh22D9mbCFrq2YzaFMj__qMSaRkUUfVMPkzmj2PW4oHYPTR_9NBm-m/pub?start=true&loop=false&delayms=2000)
- A no-frills demo of the entire product: 

{{< youtube KgZ5oHvjgjE >}}
