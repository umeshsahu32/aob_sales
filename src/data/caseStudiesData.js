const caseStudies = [
  {
    id: 'andromeda',
    company: 'Andromeda',
    tagline: 'Transforming Loan Distribution Through AI-Powered Revenue Systems',
    industry: 'Financial Services',
    segment: 'Loan Distribution',
    keyMetrics: [
      { label: 'OPEX', value: '↓ 35%' },
      { label: 'Capacity', value: '↑ 2×' },
      { label: 'Effort', value: '↓ 60%' },
    ],
    overview: {
      industry: 'Financial Services / Loan Distribution',
      business: "India's largest loan distributor",
      focusSegment: 'Home Loan, Mortgage Loan, Auto Loan',
      challenge: 'Scale secured loan acquisition while controlling CAC and operational cost.',
    },
    intro: {
      heading: "Andromeda's secured loan business faced a classic scaling problem.",
      lines: ['Growth was available.', 'Efficiency was not.'],
    },
    challenges: [
      {
        title: 'High Lead Leakage',
        desc: 'Large lead volumes but inconsistent qualification.',
      },
      {
        title: 'Manual Calling Bottleneck',
        desc: 'Human calling capacity restricted scalability.',
      },
      {
        title: 'High OPEX',
        desc: 'Linear manpower growth meant increasing cost.',
      },
      {
        title: 'Low Sales Utilization',
        desc: 'Experienced agents spent time chasing low-intent prospects instead of closing.',
      },
      {
        title: 'High CAC Pressure',
        desc: 'Secured loans carry longer decision cycles and higher acquisition costs.',
      },
    ],
    people: {
      oldModel: ['20 Human Agents'],
      newModel: ['10 Loan Specialists', '1 AI Voice Bot (10 parallel lines)'],
      outcome: '20-seat equivalent execution with optimized manpower structure.',
    },
    process: [
      'Lead Capture',
      'AI Qualification',
      'AI Calling',
      'Smart Routing',
      'Human Closing',
      'Document Collection',
      'Conversion',
    ],
    technology: [
      'AI Qualification Bot',
      'Voice Calling Engine',
      'CRM',
      'Reporting Dashboard',
      'Automation Layer',
      'Smart Lead Routing',
    ],
    impactMetrics: [
      {
        label: 'OPEX Reduction',
        value: '25–35%',
        direction: 'down',
        detail:
          'Reduced manpower dependency, lower repetitive workload, AI first-touch automation.',
      },
      {
        label: 'Calling Capacity',
        value: '2×',
        direction: 'up',
        detail: 'AI calling layer handling parallel outreach at scale.',
      },
      {
        label: 'Manual Effort Reduced',
        value: '40–60%',
        direction: 'down',
        detail:
          'AI absorbed first touch, follow-ups, qualification reinforcement, and document prompts.',
      },
      {
        label: 'Sales Productivity',
        value: '30–50%',
        direction: 'up',
        detail:
          'Humans engaged only hot leads, loan consultation, relationship management, and closing.',
      },
      {
        label: 'Lead Utilization',
        value: '20–30%',
        direction: 'up',
        detail: 'AI routing: Cold → AI nurture, Warm → Hybrid, Hot → Human closing.',
      },
      {
        label: 'CAC Optimization',
        value: 'Lower',
        direction: 'down',
        detail:
          'Better qualification, automated nurturing, reduced leakage, higher intent handoff.',
      },
    ],
    transformation: [
      {
        from: 'Manpower-led sales scaling',
        to: 'AI-powered revenue infrastructure',
      },
      { from: 'People Heavy', to: 'AI + Human Hybrid' },
      { from: 'Linear Scale', to: 'Non-linear Scale' },
      { from: 'High Cost', to: 'Optimized OPEX' },
    ],
    transformIntro:
      'Andromeda moved from manpower-led sales scaling to AI-powered revenue infrastructure.',
    closingLine: "We didn't add manpower. We engineered a Sales system.",
  },
  {
    id: 'byjus',
    company: "BYJU'S",
    tagline: 'Re-Engineering High-Volume EdTech Sales with AI + Human Execution',
    industry: 'EdTech',
    segment: 'Inside Sales',
    keyMetrics: [
      { label: 'OPEX / Enrolment', value: '↓ 28%' },
      { label: 'Capacity', value: '↑ 60%' },
      { label: 'Follow-Up', value: '↓ 55%' },
    ],
    overview: {
      industry: 'EdTech / Admissions Sales',
      business: 'Large-scale EdTech admissions sales operation',
      focusSegment: 'Course Enquiries, Counselling, Enrolment',
      challenge:
        'Improve counsellor productivity, reduce cost per conversion and create a scalable admission engine.',
    },
    intro: {
      heading:
        "BYJU'S high-volume sales engine faced a classic productivity problem.",
      lines: ['Leads were abundant.', 'Counsellor time was expensive.'],
    },
    challenges: [
      {
        title: 'High Cost of First-Level Qualification',
        desc: 'Experienced counsellors spent significant time identifying basic eligibility, requirement and purchase intent.',
      },
      {
        title: 'Uneven Lead Prioritisation',
        desc: 'High-intent and low-intent enquiries entered similar follow-up journeys, reducing productive selling time.',
      },
      {
        title: 'Follow-Up Dependency',
        desc: 'Large lead volumes required repeated calls, reminders and nurturing, creating heavy manpower dependency.',
      },
      {
        title: 'Conversion Leakage',
        desc: 'Without a unified qualification layer, valuable leads were lost between enquiry, counselling, demo and enrolment.',
      },
    ],
    people: {
      oldModel: ['Counsellor-Led Calling Model', 'Manual First-Level Qualification'],
      newModel: [
        'AI Qualification Layer',
        'Inside-Sales Counsellors',
        'Automated Engagement Bot',
      ],
      outcome:
        'Higher enquiry volumes processed without a proportionate increase in counsellor headcount.',
    },
    process: [
      'Lead Capture',
      'AI Qualification',
      'Automated Engagement',
      'Lead Scoring & Routing',
      'Human Counselling',
      'Conversion & Revenue Operations',
    ],
    technology: [
      'Centralized CRM',
      'AI Qualification Engine',
      'Automated Communication',
      'Lead Scoring & Routing',
      'Counsellor Productivity Dashboard',
      'Revenue Operations Analytics',
    ],
    impactMetrics: [
      {
        label: 'Sales OPEX per Enrolment',
        value: '28%',
        direction: 'down',
        detail:
          'First-level qualification and low-intent nurturing shifted away from expensive counselling resources.',
      },
      {
        label: 'Lead-Handling Capacity',
        value: '60%',
        direction: 'up',
        detail:
          'Lead-processing capacity separated from human headcount, allowing volumes to scale independently.',
      },
      {
        label: 'Manual Follow-Up',
        value: '55%',
        direction: 'down',
        detail:
          'Automated acknowledgement, reminders, missed-call follow-ups and re-engagement absorbed repetitive work.',
      },
      {
        label: 'Lead-to-Counselling',
        value: '33%',
        direction: 'up',
        detail:
          'Intent-based routing moved more qualified prospects into active counselling conversations.',
      },
      {
        label: 'Counselling-to-Enrolment',
        value: '27%',
        direction: 'up',
        detail:
          'Counsellors received better-qualified, prioritized opportunities instead of filtering raw enquiries.',
      },
      {
        label: 'First Response TAT',
        value: '<10 min',
        direction: 'down',
        detail:
          'Automated first engagement cut response time from 45–90 mins to under 10 mins — up to 85% faster.',
      },
    ],
    transformation: [
      { from: 'Manpower-heavy calling model', to: 'Intent-driven counselling model' },
      { from: 'More Leads = More Callers', to: 'More Leads = AI Qualification' },
      { from: 'Linear Growth', to: 'Scalable Growth' },
      { from: 'Higher OPEX', to: 'Optimized Sales OPEX' },
    ],
    transformIntro:
      'BYJU\'S shifted from a manpower-heavy calling model to an intent-driven, AI-assisted counselling engine.',
    closingLine: "We didn't add counsellors. We engineered a Revenue Engine.",
  },
  {
    id: 'neosoft',
    company: 'NeoSOFT',
    tagline: 'Building a Predictable US Enterprise Sales Engine for Digital Engineering Services',
    industry: 'IT Services & Digital Engineering',
    segment: 'International Sales',
    keyMetrics: [
      { label: 'Intl. OPEX', value: '↓ 35–45%' },
      { label: 'Account Coverage', value: '↑ 2.5×' },
      { label: 'Prospecting', value: '↓ 50–60%' },
    ],
    overview: {
      industry: 'IT Services & Digital Engineering',
      business: 'Digital engineering services provider serving US enterprises',
      focusSegment: 'US Enterprise Accounts (CIO / CTO / Digital Transformation)',
      challenge:
        'Build a predictable US sales engine that continuously identifies, engages, qualifies and converts enterprise opportunities.',
    },
    intro: {
      heading:
        'NeoSOFT had the delivery capability and global credentials — but not a predictable US pipeline.',
      lines: ['Capability was proven.', 'Predictable pipeline was not.'],
    },
    challenges: [
      {
        title: 'Complex Buyer Universe',
        desc: 'Different services required engaging different decision-makers — CIOs, CTOs, technology heads, product and transformation leaders.',
      },
      {
        title: 'Long Enterprise Sales Cycles',
        desc: 'Digital engineering deals needed multiple conversations, technical validation and commercial follow-ups before conversion.',
      },
      {
        title: 'High Prospecting Cost',
        desc: 'Using experienced tech sales professionals for database building and first-level outreach raised acquisition cost.',
      },
      {
        title: 'Pipeline Consistency',
        desc: 'Predictable US revenue required continuous qualified flow, not dependence on referrals or sporadic inbound enquiries.',
      },
    ],
    people: {
      oldModel: ['Senior Sales-Led Prospecting', 'Manual Account Research'],
      newModel: [
        'Dedicated US-Shift Inside-Sales Team',
        'NeoSOFT Solution Specialists (at qualified stage)',
      ],
      outcome:
        'Prospecting built in India; solution specialists engaged only once opportunities reached the right stage.',
    },
    process: [
      'Target Account',
      'Decision-Maker Mapping',
      'Multi-Channel Outreach',
      'AI-Assisted Qualification',
      'Discovery Meeting',
      'Solution Discussion',
      'Proposal & Follow-Up',
      'Conversion',
    ],
    technology: [
      'Account & Prospect Research',
      'Decision-Maker Identification',
      'Contact Enrichment',
      'Multi-Channel Outreach (LinkedIn + Email + Voice)',
      'CRM & Follow-Up Automation',
      'Lead Scoring & Pipeline Analytics',
    ],
    impactMetrics: [
      {
        label: 'International Sales OPEX',
        value: '35–45%',
        direction: 'down',
        detail:
          'Prospecting, account research, outreach and qualification centralized through an India-based sales operation.',
      },
      {
        label: 'Sales Productivity',
        value: '40–50%',
        direction: 'up',
        detail:
          'Solution specialists engaged prospects only after account fit and initial business interest were established.',
      },
      {
        label: 'US Account Coverage',
        value: '2.5×',
        direction: 'up',
        detail:
          'AI-assisted research and structured prospecting covered far more accounts without growing the sales team proportionately.',
      },
      {
        label: 'Qualified Meeting Ratio',
        value: '30–40%',
        direction: 'up',
        detail:
          'Qualification before handover kept discovery calls focused on real technology requirements, not generic intros.',
      },
      {
        label: 'Manual Prospecting Effort',
        value: '50–60%',
        direction: 'down',
        detail:
          'Senior professionals spent less time searching for prospects and more on discovery, solutioning and conversion.',
      },
      {
        label: 'Pipeline Visibility',
        value: 'Real-Time',
        direction: 'up',
        detail:
          'Structured account selection, outreach and follow-up created a measurable pipeline instead of relationship-dependent flow.',
      },
    ],
    transformation: [
      { from: 'Senior-Sales Heavy', to: 'Specialized Sales Architecture' },
      { from: 'Manual Prospecting', to: 'AI-Assisted Account Intelligence' },
      { from: 'Sporadic Opportunities', to: 'Structured US Pipeline' },
      { from: 'Lead Generation', to: 'Lead-to-Revenue Ownership' },
    ],
    transformIntro:
      'NeoSOFT moved from senior-sales-led business development to a scalable, AI-assisted US revenue engine.',
    closingLine: 'We didn\'t chase leads. We engineered a US pipeline.',
  },
  {
    id: 'abitzu',
    company: 'Abitzu',
    tagline: 'Building a Scalable Sales Engine for Vertical SaaS',
    industry: 'SaaS / Beauty & Wellness Technology',
    segment: 'Vertical SaaS',
    keyMetrics: [
      { label: 'Sales OPEX', value: '↓ 25–35%' },
      { label: 'Capacity', value: '↑ 1.7×' },
      { label: 'Demo Productivity', value: '↑ 35–45%' },
    ],
    overview: {
      industry: 'SaaS / Beauty & Wellness Technology',
      business: 'Cloud business management platform for salons, spas and wellness centres',
      focusSegment: 'Independent Outlets, Premium Chains, Multi-Location Businesses',
      challenge:
        'Build a predictable customer acquisition engine that moves businesses from interest to paid subscription.',
    },
    intro: {
      heading:
        'Abitzu had a powerful vertical SaaS product — but needed a predictable acquisition engine.',
      lines: ['The product was proven.', 'The sales engine was not.'],
    },
    challenges: [
      {
        title: 'Fragmented Target Market',
        desc: 'Prospects ranged from independent salons and spas to premium chains and multi-location businesses.',
      },
      {
        title: 'Product Needed Demonstration',
        desc: 'A feature-rich SaaS platform could not be sold through advertising alone — prospects had to experience its value.',
      },
      {
        title: 'High Follow-Up Requirement',
        desc: 'Owners typically needed multiple interactions between enquiry, demo, evaluation and final decision.',
      },
      {
        title: 'Founder / Senior Team Dependency',
        desc: 'Using senior resources for prospecting, qualification and repetitive follow-up limited scalability.',
      },
      {
        title: 'Free-to-Paid Conversion',
        desc: 'With a low-friction entry, the process had to identify serious commercial prospects, not just maximize registrations.',
      },
    ],
    people: {
      oldModel: ['Founder / Senior Team-Led Selling', 'Manual Qualification & Follow-Up'],
      newModel: [
        'Dedicated Inside-Sales Operation',
        'Product Specialists (for deeper technical discussions)',
      ],
      outcome:
        'Prospecting, qualification and follow-up separated from specialist product conversations to unlock capacity.',
    },
    process: [
      'Lead',
      'Qualification',
      'Business Need Discovery',
      'Product Demo',
      'Trial',
      'Follow-Up',
      'Subscription',
      'Onboarding',
    ],
    technology: [
      'Lead Capture & CRM',
      'Lead Scoring',
      'Automated Follow-Up',
      'Demo Reminders & Trial Nurturing',
      'Sales Pipeline Tracking',
      'Lost-Lead Revival',
    ],
    impactMetrics: [
      {
        label: 'Sales OPEX',
        value: '25–35%',
        direction: 'down',
        detail:
          'An inside-sales layer reduced dependence on founders and senior resources for prospecting, qualification and follow-up.',
      },
      {
        label: 'Sales Handling Capacity',
        value: '1.7×',
        direction: 'up',
        detail:
          'Separating prospecting and follow-up from specialist conversations created capacity without growing senior headcount.',
      },
      {
        label: 'Demo Productivity',
        value: '35–45%',
        direction: 'up',
        detail:
          'Only prospects matching defined business and intent criteria were moved to product demonstrations.',
      },
      {
        label: 'Lead-to-Demo Conversion',
        value: '30–40%',
        direction: 'up',
        detail:
          'Structured qualification, faster response and appointment management improved movement from enquiry to demo.',
      },
      {
        label: 'Demo-to-Trial Movement',
        value: '20–30%',
        direction: 'up',
        detail:
          'Conversations focused on measurable business problems rather than presenting software features in isolation.',
      },
      {
        label: 'Manual Follow-Up',
        value: '40–50%',
        direction: 'down',
        detail:
          'CRM workflows and automated reminders kept prospects inside a defined journey after demos and trials.',
      },
    ],
    transformation: [
      { from: 'Product-Led Selling', to: 'Revenue-Led Selling' },
      { from: 'Manual Follow-Up', to: 'Structured Nurturing' },
      { from: 'Senior Resource Dependency', to: 'Specialized Sales Architecture' },
      { from: 'Software Features', to: 'Business Outcomes' },
    ],
    transformIntro:
      'Abitzu moved from a great SaaS product to a repeatable, AI-assisted revenue system.',
    closingLine: "We didn't sell features. We engineered SaaS revenue.",
  },
  {
    id: 'thrise',
    company: 'Thrise',
    tagline: 'Building a Predictable Client Acquisition Engine for an Amazon Growth Agency',
    industry: 'E-Commerce / Amazon Growth Services',
    segment: 'Client Acquisition',
    keyMetrics: [
      { label: 'Sales Capacity', value: '↑ 2×' },
      { label: 'Specialist Productivity', value: '↑ 35–45%' },
      { label: 'Response TAT', value: '↓ 70%' },
    ],
    overview: {
      industry: 'E-Commerce / Amazon Growth Services',
      business: 'Amazon growth agency — marketplace strategy, advertising and account management',
      focusSegment: 'Established Brands with Amazon Growth Ambitions',
      challenge:
        'Build a repeatable acquisition engine that finds brands with real Amazon growth problems and converts them into qualified opportunities.',
    },
    intro: {
      heading:
        'Thrise had strong Amazon expertise and a large market — but an unstructured acquisition opportunity.',
      lines: ['The expertise existed.', 'The acquisition engine did not.'],
    },
    challenges: [
      {
        title: 'Finding the Right Brands',
        desc: 'Not every Amazon seller was the same opportunity — the process had to identify established brands with real ambition.',
      },
      {
        title: 'Identifying the Real Pain Point',
        desc: 'Prospects could struggle with advertising, catalogue, account health, conversion, inventory or overall profitability.',
      },
      {
        title: 'Founder-Led Selling Dependency',
        desc: 'Specialist agencies often depend heavily on founders and senior experts to explain value and close business.',
      },
      {
        title: 'Inconsistent Follow-Up',
        desc: 'Agency sales rarely converts in one call — audits, consultations and internal decisions precede onboarding.',
      },
      {
        title: 'Scaling Client Acquisition',
        desc: 'Growth required a repeatable system rather than dependence on referrals, networks and inbound opportunities.',
      },
    ],
    people: {
      oldModel: ['Founder / Specialist-Led Selling', 'Ad-Hoc Prospecting & Follow-Up'],
      newModel: [
        'Dedicated Telesales Operation',
        'Thrise Amazon Specialists (for strategy & solutioning)',
      ],
      outcome:
        'Prospecting, qualification and follow-up separated from specialist consulting so experts focus on high-value conversations.',
    },
    process: [
      'Lead Generation',
      'Qualification',
      'Amazon Business Discovery',
      'Opportunity Scoring',
      'Strategy Consultation',
      'Follow-Up',
      'Client Onboarding',
    ],
    technology: [
      'Centralised Lead Capture',
      'CRM & Lead Prioritisation',
      'Follow-Up Workflows',
      'Call Disposition Tracking',
      'Consultation Scheduling',
      'Pipeline Monitoring & Lead Revival',
    ],
    impactMetrics: [
      {
        label: 'Sales Handling Capacity',
        value: '2×',
        direction: 'up',
        detail:
          'A dedicated sales layer let far more brands be engaged without proportionately increasing senior sales involvement.',
      },
      {
        label: 'Qualified Consultation Ratio',
        value: '30–40%',
        direction: 'up',
        detail:
          'Prospects reached specialists only after marketplace presence, requirement, growth intent and challenges were identified.',
      },
      {
        label: 'Specialist Productivity',
        value: '35–45%',
        direction: 'up',
        detail:
          'Amazon specialists spent less time prospecting and more time analysing businesses, presenting solutions and closing.',
      },
      {
        label: 'Lead Response TAT',
        value: '70%',
        direction: 'down',
        detail:
          'A dedicated sales operation replaced ad-hoc responses with a defined first-contact process.',
      },
      {
        label: 'Follow-Up Leakage',
        value: '40–50%',
        direction: 'down',
        detail:
          'Every opportunity stayed within a structured journey with defined dispositions, next actions and accountability.',
      },
      {
        label: 'Lead Utilisation',
        value: '25–30%',
        direction: 'up',
        detail:
          'A measurable funnel from lead generation through consultation to onboarding replaced referral-dependent flow.',
      },
    ],
    transformation: [
      { from: 'Referral Dependency', to: 'Predictable Acquisition' },
      { from: 'Raw Enquiries', to: 'Qualified Opportunities' },
      { from: 'Specialist-Led Prospecting', to: 'Dedicated Inside Sales' },
      { from: 'Selling Services', to: 'Solving Amazon Growth Problems' },
    ],
    transformIntro:
      'Thrise moved from expertise-led selling to a scalable, structured client acquisition engine.',
    closingLine: "We didn't sell services. We engineered Amazon growth.",
  },
  {
    id: 'heibuddy',
    company: 'HeiBuddy.ai',
    tagline: 'Building a Scalable Marketplace Sales Engine for a Pan-India Agentic AI Platform',
    industry: 'AI-Powered Service Marketplace',
    segment: 'Marketplace Acquisition',
    keyMetrics: [
      { label: 'Merchant Coverage', value: '↑ 25–40%' },
      { label: 'OPEX / Paid Merchant', value: '↓ 15–30%' },
      { label: 'Field Follow-Up Time', value: '↓ 30–50%' },
    ],
    overview: {
      industry: 'AI-Powered Service Marketplace (Ugasys Software Pvt. Ltd.)',
      business: 'Agentic AI multi-category service aggregation platform',
      focusSegment: 'Multi-City, Multi-Category Merchant Acquisition',
      challenge:
        'Acquire and monetise 10,000 merchants/month at 30–40% paid conversion while keeping acquisition OPEX under control.',
    },
    intro: {
      heading:
        'HeiBuddy did not just need registrations — it needed activated, paying merchants at scale.',
      lines: ['Onboarding is acquisition.', 'Paid conversion is the KPI.'],
    },
    challenges: [
      {
        title: 'High Acquisition Volume',
        desc: 'Thousands of merchants had to be identified, approached, educated, onboarded and activated every month.',
      },
      {
        title: 'Paid Conversion',
        desc: 'Free onboarding is easy; convincing merchants to pay requires clear ROI, trust, category relevance and follow-up.',
      },
      {
        title: 'Multi-Category Complexity',
        desc: 'A restaurant, doctor, broker and salon each need different messaging, objections, ROI logic and activation journeys.',
      },
      {
        title: 'Multi-City Execution',
        desc: 'National scale demands territory mapping, team allocation, local supervision and merchant-density planning.',
      },
      {
        title: 'Linear Manpower Economics',
        desc: 'A pure field model means more cities → more salespeople → more supervisors → OPEX rising faster than revenue.',
      },
    ],
    people: {
      oldModel: ['Large Field Team', 'Field-Led Follow-Up & Conversion'],
      newModel: [
        'Field Sales (acquisition)',
        'Inside Sales (activation & paid conversion)',
        'Team Leaders + Shared Strategy & Analytics',
      ],
      outcome:
        'Expensive field resources focus on acquisition; lower-cost inside sales and automation handle repetitive post-onboarding work.',
    },
    process: [
      'Merchant Identified',
      'Merchant Contacted',
      'Merchant Interested',
      'Merchant Onboarded',
      'Merchant Activated',
      'Subscription Presented',
      'Paid Conversion',
      'Retained / Renewed',
    ],
    technology: [
      'Merchant CRM & Field Activity Tracking',
      'Category Tagging & City-Wise Dashboards',
      'Lead Disposition & Onboarding Status',
      'Automated Follow-Up',
      'Paid Conversion & Payment Tracking',
      'Salesperson Productivity Reporting',
    ],
    impactMetrics: [
      {
        label: 'Merchant Coverage',
        value: '25–40%',
        direction: 'up',
        detail:
          'A field + inside + automation model expanded acquisition capacity beyond a field-dependent structure.',
      },
      {
        label: 'Follow-Up Coverage',
        value: '90%+',
        direction: 'up',
        detail:
          'System-driven follow-up replaced individual-dependent chasing across the merchant journey.',
      },
      {
        label: 'Field Time on Follow-Up',
        value: '30–50%',
        direction: 'down',
        detail:
          'Follow-up, plan explanation, reminders and upgrades shifted to inside sales and automation.',
      },
      {
        label: 'OPEX per Paid Merchant',
        value: '15–30%',
        direction: 'down',
        detail:
          'Hybrid execution optimised the real unit economic — cost per paid merchant, not cost per onboarding.',
      },
      {
        label: 'Paid Conversion Focus',
        value: 'Funnel KPI',
        direction: 'up',
        detail:
          'Incentives shifted from registrations to paid-merchant productivity — the true commercial KPI.',
      },
      {
        label: 'Sales Visibility',
        value: 'Real-Time',
        direction: 'up',
        detail:
          'A central CRM replaced fragmented reporting, making every salesperson, city and category measurable.',
      },
    ],
    transformation: [
      { from: 'Cost Per Onboarding', to: 'Cost Per Paid Merchant' },
      { from: 'Large Field Team', to: 'Field + Inside + Automation Hybrid' },
      { from: 'Generic Marketplace Pitch', to: 'Category-Specific Selling' },
      { from: 'Linear Headcount Scale', to: 'Process + Tech Assisted Scale' },
    ],
    transformIntro:
      'HeiBuddy shifted from an activity mindset ("how many onboarded?") to an economics mindset ("how much revenue per city, category and salesperson?").',
    closingLine:
      "We didn't deploy manpower. We engineered a marketplace revenue engine.",
  },
  {
    id: 'blackbuck',
    company: 'BlackBuck',
    tagline: 'Building a Scalable Sales Engine Through People, Process, Technology & AI',
    industry: 'Logistics / B2B Technology',
    segment: 'Managed Sales Operations',
    keyMetrics: [
      { label: 'Human Dependency', value: '↓ 20–30%' },
      { label: 'Sales Capacity', value: '↑ 25–40%' },
      { label: 'Cost / Conversion', value: '↓ 20%' },
    ],
    overview: {
      industry: 'Logistics / B2B Technology',
      business: 'High-growth logistics platform with large-scale sales requirement',
      focusSegment: 'End-to-End Managed Sales Operations',
      challenge:
        'Scale sales efficiently across a large, fragmented market at the lowest sustainable cost per conversion.',
    },
    intro: {
      heading: "Growth wasn't the challenge. Scaling sales efficiently was.",
      lines: ['Volume was available.', 'Efficient scale was not.'],
    },
    challenges: [
      {
        title: 'Rising Sales OPEX',
        desc: 'A manpower-heavy structure meant costs increased in step with sales volume.',
      },
      {
        title: 'Inconsistent Productivity',
        desc: 'Output depended on individual performers, creating uneven results and key-person dependence.',
      },
      {
        title: 'Lead Leakage & Follow-Up',
        desc: 'Inconsistent, salesperson-dependent follow-up let acquired leads slip through the funnel.',
      },
      {
        title: 'Limited Management Visibility',
        desc: 'Fragmented reporting left management asking "what is happening?" instead of "where is the funnel leaking?"',
      },
      {
        title: 'Lengthy Ramp-Up',
        desc: 'Internal team build-out made rapid, repeatable scaling slow and expensive.',
      },
    ],
    people: {
      oldModel: ['Manpower-Led Selling', 'Individual Selling Styles'],
      newModel: [
        'Dedicated Trained Sales Resources',
        'Team Leaders',
        'AI & Automation Layer',
      ],
      outcome:
        'Humans concentrated on conversation, negotiation and conversion while automation absorbed low-value work.',
    },
    process: [
      'Lead Assigned',
      'First Contact',
      'Qualification',
      'Requirement Captured',
      'Follow-Up',
      'Conversion Opportunity',
      'Closure',
      'Disposition & Learning',
    ],
    technology: [
      'Unified Sales CRM',
      'Activity & Contact Tracking',
      'Follow-Up Reminders & Disposition Intelligence',
      'First-Level Qualification & Lead Prioritisation',
      'Conversation Summaries & Salesperson Assist',
      'Real-Time Productivity & Pipeline Analytics',
    ],
    impactMetrics: [
      {
        label: 'Human Dependency',
        value: '20–30%',
        direction: 'down',
        detail:
          'Fewer human minutes needed to produce the same sales output through process and automation.',
      },
      {
        label: 'Non-Selling Work',
        value: '25–35%',
        direction: 'down',
        detail:
          'Automation removed prospecting admin, CRM updates and reporting, returning capacity to selling.',
      },
      {
        label: 'Sales Capacity',
        value: '25–40%',
        direction: 'up',
        detail:
          'Productivity-driven capacity replaced headcount-dependent scaling.',
      },
      {
        label: 'Follow-Up Coverage',
        value: '90%+',
        direction: 'up',
        detail:
          'System-driven follow-up moved coverage from agent-dependent to compliant across every lead.',
      },
      {
        label: 'Cost per Conversion',
        value: '20%',
        direction: 'down',
        detail:
          'Same OPEX, ~25% more output — the real measure of whether a sales operation works.',
      },
      {
        label: 'Performance Visibility',
        value: 'Real-Time',
        direction: 'up',
        detail:
          'A single operating view shifted management from reporting the past to improving what happens next.',
      },
    ],
    transformation: [
      { from: 'Number of Seats', to: 'Revenue Productivity per Seat' },
      { from: 'Cost per Onboarding', to: 'Cost per Conversion' },
      { from: 'Manpower-Led Sales', to: 'Managed Revenue Engine' },
      { from: 'Linear Scale', to: 'Modular Plug-and-Play Scale' },
    ],
    transformIntro:
      'BlackBuck\'s question changed from "how many salespeople do we need?" to "what mix of people, process and technology gives the lowest cost per conversion?"',
    closingLine:
      'BlackBuck didn\'t need more salespeople. It needed every salesperson to produce more.',
  },
  {
    id: 'hiflier',
    company: 'Hiflier Travels',
    tagline: 'Scaling a Destination-Led Travel Business Through an AI-Powered Sales Engine',
    industry: 'Travel & Hospitality',
    segment: 'AI-Powered Sales',
    keyMetrics: [
      { label: 'First Response', value: '↓ 60–90%' },
      { label: 'Consultant Capacity', value: '↑ 30–60%' },
      { label: 'OPEX / Booking', value: '↓ 15–30%' },
    ],
    overview: {
      industry: 'Travel & Hospitality',
      business: 'Destination-led travel company (est. 2011) — customized holidays & group departures',
      focusSegment: 'Maldives, Mauritius & International / Domestic Leisure Travel',
      challenge:
        'Convert accumulated destination expertise into a scalable, system-led sales engine without linear OPEX growth.',
    },
    intro: {
      heading: 'Great travel products, held back by a difficult sales model.',
      lines: ['The expertise was proven.', 'The sales system was not.'],
    },
    challenges: [
      {
        title: 'Lead Leakage',
        desc: 'Large enquiry volumes became difficult to follow up consistently across a long comparison cycle.',
      },
      {
        title: 'Slow Response Time',
        desc: 'Travel enquiries are highly perishable — a delayed response quickly becomes someone else\'s booking.',
      },
      {
        title: 'Qualifying Instead of Selling',
        desc: 'Agents repeatedly answered questions on dates, budget, travellers, hotels and visas, cutting selling time.',
      },
      {
        title: 'Person-Dependent Destination Knowledge',
        desc: 'A strong consultant may know Maldives or Mauritius deeply, but scaling that across a team is hard.',
      },
      {
        title: 'Scaling Sales Means Scaling OPEX',
        desc: 'More enquiries → more salespeople → more supervisors, so revenue grew almost linearly with manpower.',
      },
    ],
    people: {
      oldModel: ['Consultant-Led Enquiry Handling', 'Person-Dependent Destination Knowledge'],
      newModel: [
        'Trained Travel Consultants (closers)',
        'AI Qualification & Nurture Layer',
        'Structured Destination Knowledge Base',
      ],
      outcome:
        'AI handles repetitive admin so consultants become closers, and destination expertise becomes shared infrastructure.',
    },
    process: [
      'New Enquiry',
      'Contacted',
      'Qualified',
      'Requirement Captured',
      'Itinerary Shared',
      'Follow-Up',
      'Negotiation',
      'Booking',
    ],
    technology: [
      'CRM & Sales Dashboards',
      'AI Lead Qualification & Scoring',
      'WhatsApp & Email Automation',
      'Automated Follow-Up',
      'Itinerary / Content Workflows',
      'Conversation Intelligence & Performance Reporting',
    ],
    impactMetrics: [
      {
        label: 'First Response Time',
        value: '60–90%',
        direction: 'down',
        detail:
          'Automated engagement and instant routing replaced manual, variable first-contact times on perishable enquiries.',
      },
      {
        label: 'Repetitive Sales Work',
        value: '30–50%',
        direction: 'down',
        detail:
          'AI and automation absorbed qualification admin, follow-ups and content sharing.',
      },
      {
        label: 'Leads per Consultant',
        value: '30–60%',
        direction: 'up',
        detail:
          'AI-assisted qualification lifted handling capacity beyond what manual effort allowed.',
      },
      {
        label: 'Follow-Up Coverage',
        value: '90%+',
        direction: 'up',
        detail:
          'System-driven follow-up moved coverage from salesperson-dependent to consistent across every enquiry.',
      },
      {
        label: 'Sales OPEX per Booking',
        value: '15–30%',
        direction: 'down',
        detail:
          'A hybrid AI + human model reduced the manpower intensity behind each booking.',
      },
      {
        label: 'Released Capacity',
        value: '~35%',
        direction: 'up',
        detail:
          'Removing ~35% of repetitive activity freed capacity equal to ~3.5 FTEs per 10-member team — without new hires.',
      },
    ],
    transformation: [
      { from: 'Individual Knowledge', to: 'AI Knowledge Layer' },
      { from: 'Manual Follow-Up', to: 'Automated Nurturing' },
      { from: 'Enquiry Handlers', to: 'Booking Closers' },
      { from: 'Lead → Salesperson → Hope', to: 'Lead → Intelligence → Conversion' },
    ],
    transformIntro:
      'Hiflier moved from manpower-led sales to a system where every enquiry enters a funnel designed to convert it.',
    closingLine:
      "Hiflier didn't need more people chasing enquiries. It needed every enquiry to enter a system built to convert it.",
  },
  {
    id: 'avs',
    company: 'AVS Construction',
    tagline: 'Building a Predictable US Sales Pipeline Through a Managed Pre-Sales Engine',
    industry: 'Construction Services',
    segment: 'Managed Pre-Sales',
    keyMetrics: [
      { label: 'Sales Capacity', value: '↑ 25–40%' },
      { label: 'Mgmt Overhead', value: '↓ 15–25%' },
      { label: 'Follow-Up Coverage', value: '90%+' },
    ],
    overview: {
      industry: 'Construction Services (US Market)',
      business: 'Construction takeoffs & cost-estimation services provider',
      focusSegment: 'US General Contractors, Subcontractors, Builders & Developers',
      challenge:
        'Consistently reach the right US buyers and create qualified sales conversations without building an outbound org internally.',
    },
    intro: {
      heading: 'Strong delivery capability. Inconsistent market access.',
      lines: ['The capability existed.', 'Repeatable market access did not.'],
    },
    challenges: [
      {
        title: 'Identifying the Right Prospects',
        desc: 'The US construction market is enormous — the challenge was the right contractor profile, geography and decision-maker.',
      },
      {
        title: 'US Business-Hour Coverage',
        desc: 'Prospecting from India required dedicated resources aligned to US working hours for consistent outreach.',
      },
      {
        title: 'Building an Outbound Function',
        desc: 'Doing it internally meant managing recruitment, training, tools, processes, supervision and attrition first.',
      },
      {
        title: 'Converting Data Into Conversations',
        desc: 'Thousands of contractor records have little value until someone contacts, qualifies and follows up on them.',
      },
      {
        title: 'Protecting Senior Management Time',
        desc: 'Using technical and senior sales resources for prospecting and repetitive follow-up reduced sales efficiency.',
      },
    ],
    people: {
      oldModel: ['Management-Led Prospecting', 'Mixed Sales Responsibilities'],
      newModel: [
        'Dedicated US-Shift Inside-Sales Pod',
        'AVS Technical / Sales Team (at qualified stage)',
      ],
      outcome:
        'AOB creates the opportunity; AVS converts it — a fully managed sales capability, not just manpower.',
    },
    process: [
      'ICP Identification',
      'Prospect Research',
      'Outreach',
      'Engagement',
      'Qualification',
      'Follow-Up',
      'Qualified Meeting',
      'Proposal & Closure',
    ],
    technology: [
      'LinkedIn & Sales Navigator',
      'B2B Intelligence Platforms',
      'Prospect Databases & Contact Intelligence',
      'Email Outreach',
      'CRM & Communication Tracking',
      'Performance Dashboards',
    ],
    impactMetrics: [
      {
        label: 'Productive Sales Capacity',
        value: '25–40%',
        direction: 'up',
        detail:
          'Separating prospecting and follow-up from technical and closing conversations released senior resources.',
      },
      {
        label: 'Management Overhead',
        value: '15–25%',
        direction: 'down',
        detail:
          'AOB\'s managed model absorbed recruitment, training, supervision, QA and attrition replacement.',
      },
      {
        label: 'Follow-Up Coverage',
        value: '90%+',
        direction: 'up',
        detail:
          'Moving follow-up from individual memory to a defined process created consistent coverage of qualified opportunities.',
      },
      {
        label: 'Go-to-Market',
        value: 'Faster',
        direction: 'up',
        detail:
          'Plug-and-play deployment replaced building recruitment, training, process and management infrastructure internally.',
      },
      {
        label: 'Lead Utilisation',
        value: 'Improved',
        direction: 'up',
        detail:
          'Prospects and conversations became organisational assets that could be reactivated, nurtured and reassigned.',
      },
      {
        label: 'Sales Visibility',
        value: 'Real-Time',
        direction: 'up',
        detail:
          'Centralised reporting made the funnel measurable, comparable and optimisable across segments and resources.',
      },
    ],
    transformation: [
      { from: 'Management-Led Prospecting', to: 'Dedicated Pre-Sales Engine' },
      { from: 'Inconsistent Outreach', to: 'Structured Outbound Process' },
      { from: 'Manual Follow-Up', to: 'Managed Follow-Up' },
      { from: 'Person-Dependent Knowledge', to: 'Institutionalised Sales Intelligence' },
    ],
    transformIntro:
      'AVS redesigned where human effort was used — a dedicated engine finds and qualifies opportunities so senior resources concentrate on converting them.',
    closingLine:
      "AVS didn't need more people searching for customers. It needed a system that consistently creates sales conversations.",
  },
  {
    id: 'keepe',
    company: 'Keepe',
    tagline: 'Transforming a US Telesales Operation From Activity-Driven Calling to Outcome-Driven Sales',
    industry: 'Home Services / Field Service Marketplace',
    segment: 'Managed Telesales',
    keyMetrics: [
      { label: 'Productive Capacity', value: '↑ 20–35%' },
      { label: 'Follow-Up Coverage', value: '90%+' },
      { label: 'Productivity Model', value: 'Outcome-Led' },
    ],
    overview: {
      industry: 'Home Services / Field Service Marketplace (US Market)',
      business: 'US home-services marketplace dependent on technician availability',
      focusSegment: 'Technician Acquisition & Activation',
      challenge:
        'Turn high telesales activity into outcome-driven productivity — technicians assigned and jobs fulfilled.',
    },
    intro: {
      heading: "High activity doesn't necessarily mean high productivity.",
      lines: ['Calls were plentiful.', 'Productive outcomes were not.'],
    },
    challenges: [
      {
        title: 'Persuasion-Heavy Selling',
        desc: 'Not basic telecalling — executives had to explain the proposition, handle objections and persuade technicians.',
      },
      {
        title: 'US Market Communication',
        desc: 'Dedicated 9 PM–6 AM IST coverage with agents able to communicate effectively with US-based prospects.',
      },
      {
        title: 'Recruitment Quality',
        desc: 'Poor hiring triggers weak conversations, low conversion, high attrition and constant retraining.',
      },
      {
        title: 'Process Consistency',
        desc: 'Agents cannot independently decide how to pitch, when to follow up or when an opportunity is exhausted.',
      },
      {
        title: 'Wrong Productivity Metrics',
        desc: 'A top agent isn\'t the one making the most calls — it\'s whose activity leads to technician assignment.',
      },
    ],
    people: {
      oldModel: ['Activity-Driven Sales Agents', 'Generic Telesales Hiring'],
      newModel: [
        'US-Shift Sales Talent (multi-stage screened)',
        'QA & Coaching Layer',
        'Performance Management',
      ],
      outcome:
        'Recruitment became sales strategy — sales productivity starts with who you hire, then continuous QA-driven coaching.',
    },
    process: [
      'Prospect Allocation',
      'First Contact',
      'Discovery',
      'Qualification',
      'Objection Handling',
      'Follow-Up',
      'Activation',
      'Assignment / Business Outcome',
    ],
    technology: [
      'CRM & Prospect Allocation',
      'Call Monitoring & QA',
      'Conversion Funnel Analytics',
      'Structured Follow-Up Cadence',
      'Activity / Sales / Business KPI Tracking',
      'Performance Dashboards',
    ],
    impactMetrics: [
      {
        label: 'Productive Sales Capacity',
        value: '20–35%',
        direction: 'up',
        detail:
          'Focusing on conversion rather than raw call volume moved agent time to activities that advance technicians.',
      },
      {
        label: 'Follow-Up Coverage',
        value: '90%+',
        direction: 'up',
        detail:
          'Every interested technician gained a defined status, next action, follow-up date and ownership.',
      },
      {
        label: 'Recruitment Leakage',
        value: 'Reduced',
        direction: 'down',
        detail:
          'Multi-stage screening cut deployment of resources unsuitable for US, night-shift, persuasion-heavy sales.',
      },
      {
        label: 'Performance Correction',
        value: 'Faster',
        direction: 'up',
        detail:
          'Call monitoring + QA + weekly review addressed issues within the operating week, not at month-end.',
      },
      {
        label: 'Management Dependency',
        value: 'Reduced',
        direction: 'down',
        detail:
          'AOB managed recruitment, training, QA, coaching, process and reporting so Keepe focused on business outcomes.',
      },
      {
        label: 'Sales Visibility',
        value: 'Funnel + Outcomes',
        direction: 'up',
        detail:
          'Visibility across resource, funnel, process and outcome levels separated activity problems from conversion problems.',
      },
    ],
    transformation: [
      { from: 'Call Productivity', to: 'Outcome Productivity' },
      { from: 'Generic Telesales Hiring', to: 'Multi-Stage Recruitment' },
      { from: 'Blaming the Agent', to: 'Diagnosing the Funnel' },
      { from: 'Telesales Operation', to: 'Managed Sales Engine' },
    ],
    transformIntro:
      'Keepe\'s biggest change was not more calls — it was redefining productivity from "how much activity?" to "what business outcome did it create?"',
    closingLine:
      "Keepe didn't need agents making more calls. It needed every call to move closer to a business outcome.",
  },
  {
    id: 'anaya',
    company: 'Anaya by BrikBuild',
    tagline: 'Engineering the Go-to-Market for a ₹2.5 Crore Luxury Weekend-Home Proposition',
    industry: 'Luxury Real Estate / Hospitality',
    segment: 'GTM & Sales Engineering',
    keyMetrics: [
      { label: 'Low-Prob. Conversations', value: '↓ 40–60%' },
      { label: 'GTM Decision', value: 'Data-Led' },
      { label: 'Commitment Stage', value: '₹5L EOI' },
    ],
    overview: {
      industry: 'Luxury Real Estate / Hospitality (Hyderabad Region)',
      business: 'Professionally managed luxury weekend homes with an integrated convention ecosystem',
      focusSegment: 'Full Villa Ownership (~₹2.5 Cr) & Fractional Ownership (~₹50 L)',
      challenge:
        'Find the right product-market-sales equation for a high-ticket proposition instead of scaling the wrong one.',
    },
    intro: {
      heading: "A strong asset doesn't automatically create a strong product.",
      lines: ['The asset was compelling.', 'The proposition was complex.'],
    },
    challenges: [
      {
        title: 'Product Positioning',
        desc: 'Real estate, investment, weekend home or managed hospitality asset — the answer reshapes audience, pitch and lead cost.',
      },
      {
        title: 'High-Ticket Customer Acquisition',
        desc: 'At ~₹2.5 Cr, mass-market lead generation wastes spend — the goal is financially capable, lifestyle-aligned prospects.',
      },
      {
        title: 'Ownership Model Uncertainty',
        desc: 'Full ownership (~₹2.5 Cr) vs fractional (~₹50 L per fraction) — the market, not assumption, should decide.',
      },
      {
        title: 'Rental as a Credible Story',
        desc: 'An assured-rental structure (~₹60k/month) needed the underlying asset, demand and management to feel believable.',
      },
      {
        title: 'Moving From Lead to Commitment',
        desc: 'For a ₹2.5 Cr discretionary purchase, an enquiry means little — the funnel must reach EOI and sale.',
      },
    ],
    people: {
      oldModel: ['Generic Real-Estate Marketing', 'All-Enquiry Human Effort'],
      newModel: [
        'Automation (capture, qualify, nurture, follow-up)',
        'Human Consultants (qualification → closure)',
      ],
      outcome:
        'Automation handles volume; expensive human selling time is reserved for financially qualified, high-intent buyers.',
    },
    process: [
      'Lead Capture',
      'Qualification',
      'Consultation',
      'Nurture',
      'Site Visit',
      'Commercial Discussion',
      '₹5L EOI',
      'Closure',
    ],
    technology: [
      'Meta / Digital Campaign Capture',
      'CRM & Lead Qualification',
      'Nurture & Trust-Asset Workflows',
      'Dual-GTM Test Analytics',
      'Full Revenue-Funnel Measurement (CPL → Cost per Sale)',
      'Performance Dashboards',
    ],
    impactMetrics: [
      {
        label: 'Low-Probability Conversations',
        value: '40–60%',
        direction: 'down',
        detail:
          'Structured financial and intent qualification removed casual browsers, returning capacity to high-intent buyers.',
      },
      {
        label: 'GTM Launch Risk',
        value: 'Lower',
        direction: 'down',
        detail:
          'Independent full vs fractional GTM tests over a 60-day window replaced management assumption with market evidence.',
      },
      {
        label: 'Product Differentiation',
        value: 'Stronger',
        direction: 'up',
        detail:
          'Positioning shifted from "buy a villa" to Own · Enjoy · Earn, with the convention centre as a demand engine.',
      },
      {
        label: 'Sales Qualification',
        value: 'Financial + Intent',
        direction: 'up',
        detail:
          'Broad enquiries gave way to capacity-, intent- and timeline-based qualification, raising sales efficiency.',
      },
      {
        label: 'Commitment Visibility',
        value: '₹5L EOI',
        direction: 'up',
        detail:
          'A ₹5 Lakh Expression of Interest stage gave management real intent signals beyond superficial lead metrics.',
      },
      {
        label: 'Scale Decision',
        value: 'Revenue-Led',
        direction: 'up',
        detail:
          'Measurement extended from cost-per-lead to cost-per-revenue-outcome, so only proven propositions get scaled.',
      },
    ],
    transformation: [
      { from: 'Guess What the Market Wants', to: 'Test It (Dual GTM)' },
      { from: 'Property-Led Positioning', to: 'Own · Enjoy · Earn' },
      { from: 'Cost Per Lead', to: 'Cost Per Revenue Outcome' },
      { from: 'Marketing a Property', to: 'Engineering its Go-to-Market' },
    ],
    transformIntro:
      'Anaya moved from "we have 12 villas, how do we sell them?" to "what combination of product, positioning, audience and economics will make them sell?"',
    closingLine:
      "Anaya didn't need another real-estate campaign. It needed the market to tell us what would sell.",
  },
  {
    id: 'unibotix',
    company: 'UniBotix Global',
    tagline: 'Engineering a High-Intent Student Acquisition Funnel for Dubai Admissions',
    industry: 'International Education / EdTech',
    segment: 'Admissions Pre-Sales',
    keyMetrics: [
      { label: 'Counsellor Wastage', value: '↓ 30–50%' },
      { label: 'Counselling Capacity', value: '↑ 25–40%' },
      { label: 'HOT-A Response', value: '≤30 min' },
    ],
    overview: {
      industry: 'International Education / EdTech',
      business: 'Overseas education agency promoting Brookstone Institute of Global Studies, Dubai',
      focusSegment: 'North India — Global Management, Master\'s & STEM (Aug/Sep 2026 intake)',
      challenge:
        'Generate admission-ready conversations for a ₹15–30 Lakh education decision, not just cheap enquiries.',
    },
    intro: {
      heading: 'Education generates enquiries easily. Admissions are harder.',
      lines: ['Interest is easy.', 'Admission intent is not.'],
    },
    challenges: [
      {
        title: 'High Lead Wastage',
        desc: 'Many enquire without budget, eligibility, decision-maker approval or immediate intake intent — flooding counsellors.',
      },
      {
        title: 'High-Consideration Decision',
        desc: 'A ₹15–30 Lakh choice needs nurturing across program, eligibility, fees, scholarship and destination confidence.',
      },
      {
        title: 'Speed-to-Lead',
        desc: 'Education leads deteriorate fast — a student contacted days later may already be engaged elsewhere.',
      },
      {
        title: 'Repetitive Qualification',
        desc: 'Counsellors repeatedly ask intake, course, background, budget and parent involvement before real selling begins.',
      },
      {
        title: 'Scholarship as Trigger, Not Discount',
        desc: 'The 20% scholarship had to become a qualification + conversion trigger, not just an advertising offer.',
      },
    ],
    people: {
      oldModel: ['Counsellor-Led Qualification', 'Individual Sales Ability'],
      newModel: [
        'QBot AI Qualification Layer',
        'Counsellors as Conversion Specialists',
        'Lead Intelligence & Intent Scoring',
      ],
      outcome:
        'AI qualifies, humans convince — counselling capacity concentrates where trust creates revenue.',
    },
    process: [
      'Lead',
      'AI Qualification',
      'Intent Scoring (HOT-A / HOT-B / Nurture)',
      'Prioritised Counselling',
      'Eligibility Validation',
      'Program Consultation',
      'Scholarship & Urgency',
      'Application & Interview',
      'Follow-Up',
      'Admission',
    ],
    technology: [
      'Meta Campaign Capture',
      'QBot AI Qualification',
      'Lead Intent Scoring (HOT-A / HOT-B / Nurture)',
      'Response-Time SLA Routing',
      'Application & Follow-Up Automation',
      'Funnel-Level Admission Analytics',
    ],
    impactMetrics: [
      {
        label: 'Counsellor Wastage',
        value: '30–50%',
        direction: 'down',
        detail:
          'AI handled repetitive first-stage qualification, cutting low-value initial counselling effort.',
      },
      {
        label: 'High-Intent Response',
        value: '≤30 min',
        direction: 'down',
        detail:
          'HOT-A prospects reached within 30 minutes and HOT-B within 2 hours instead of a uniform queue.',
      },
      {
        label: 'Counselling Capacity',
        value: '25–40%',
        direction: 'up',
        detail:
          'Removing repetitive qualification let the same team spend more time with commercially relevant students.',
      },
      {
        label: 'Follow-Up Coverage',
        value: '90%+',
        direction: 'up',
        detail:
          'Defined next actions — application link, document checklist, interview booking, CRM reminder — after every call.',
      },
      {
        label: 'Lead Intelligence',
        value: 'Richer',
        direction: 'up',
        detail:
          'Behaviour + qualification signals replaced basic form data, so unready students became future opportunities with context.',
      },
      {
        label: 'Funnel Visibility',
        value: 'Stage-by-Stage',
        direction: 'up',
        detail:
          'Measurement moved from cost-per-lead to cost-per-admission across the full advertisement-to-enrolment funnel.',
      },
    ],
    transformation: [
      { from: 'More Education Leads', to: 'Fewer Wasted Counselling Conversations' },
      { from: 'Uniform Lead Response', to: 'Intent-Based Response SLAs' },
      { from: 'Scholarship as Discount', to: 'Scholarship as Conversion Trigger' },
      { from: 'Cost Per Lead', to: 'Cost Per Admission' },
    ],
    transformIntro:
      'UniBotix separated information collection from human persuasion — AI where efficiency matters, people where confidence matters.',
    closingLine:
      "UniBotix didn't need more students clicking an ad. It needed the right students reaching counsellors at the right moment.",
  },
  {
    id: '5paisa',
    company: '5paisa',
    tagline: 'Building a Scalable Demat Account Acquisition Engine',
    industry: 'FinTech / Financial Services',
    segment: 'Managed Sales Outsourcing',
    keyMetrics: [
      { label: 'Go-to-Market', value: '↑ 20–30%' },
      { label: 'Cost / Acquisition', value: '↓ 20%' },
      { label: 'Mgmt Overhead', value: '↓ 15–25%' },
    ],
    overview: {
      industry: 'FinTech / Financial Services',
      business: 'Digital investment & financial-services platform',
      focusSegment: 'Demat Account Acquisition',
      challenge:
        'Build a repeatable customer-acquisition process for Demat account opening — not just deploy more salespeople.',
    },
    intro: {
      heading: 'Digital account opening still requires sales execution.',
      lines: ['The platform was digital.', 'Acquisition still needed a system.'],
    },
    challenges: [
      {
        title: 'Inconsistent Engagement',
        desc: 'Moving prospects from awareness through intent to account opening varied widely without a defined process.',
      },
      {
        title: 'Salesperson-Dependent Follow-Up',
        desc: 'Multi-touch acquisition risked opportunities lost when follow-up relied on individual memory.',
      },
      {
        title: 'High Management Requirement',
        desc: 'Recruitment, training, supervision and reporting created heavy internal management overhead.',
      },
      {
        title: 'Compliance & Data Security',
        desc: 'Financial-services acquisition carried compliance sensitivity and strict data-security requirements.',
      },
      {
        title: 'Scaling Acquisition Capacity',
        desc: 'Adding capacity quickly was hard when the whole acquisition function had to be rebuilt each time.',
      },
    ],
    people: {
      oldModel: ['Headcount-Led Acquisition', 'Generic Telecallers'],
      newModel: [
        'Dedicated Sales Resources (product-trained)',
        'Deployed Alongside 5paisa for Knowledge Transfer',
      ],
      outcome:
        'Resources built around the product to facilitate Demat acquisition, with managed infrastructure and governance.',
    },
    process: [
      'Prospect',
      'Contact',
      'Product Explanation',
      'Interest / Intent',
      'Account-Opening Assistance',
      'Demat Account Acquisition',
    ],
    technology: [
      'Managed Operating Infrastructure',
      'CRM & Prospect-Stage Tracking',
      'Structured Follow-Up',
      'Performance-Standard Monitoring',
      'Data Ownership & Governance Controls',
      'Compliance & Security Framework',
    ],
    impactMetrics: [
      {
        label: 'Go-to-Market',
        value: '20–30%',
        direction: 'up',
        detail:
          'A managed model compressed recruitment, training, infrastructure and setup into one operating framework.',
      },
      {
        label: 'Management Overhead',
        value: '15–25%',
        direction: 'down',
        detail:
          'Outsourcing recruitment, supervision, training, replacement and reporting reduced direct management dependency.',
      },
      {
        label: 'Productive Sales Time',
        value: '20–30%',
        direction: 'up',
        detail:
          'A structured process reduced variation in prospect handling, follow-up and escalation, lifting selling capacity.',
      },
      {
        label: 'Follow-Up Coverage',
        value: '85–90%+',
        direction: 'up',
        detail:
          'A defined prospect journey reduced opportunities lost to memory-dependent follow-up.',
      },
      {
        label: 'Cost per Acquisition',
        value: '20%',
        direction: 'down',
        detail:
          '~25% more account openings from a similar operating base lowered cost per acquired Demat account.',
      },
      {
        label: 'Data & Compliance Control',
        value: 'Client-Owned',
        direction: 'up',
        detail:
          'Execution was outsourced while data ownership, compliance and governance stayed with 5paisa.',
      },
    ],
    transformation: [
      { from: 'Headcount-Led Acquisition', to: 'Managed Acquisition Engine' },
      { from: 'People Deployed', to: 'Cost per Acquired Account' },
      { from: 'Individual Knowledge', to: 'Organisational Sales Knowledge' },
      { from: 'Rebuild the Function', to: 'Replicate the Engine' },
    ],
    transformIntro:
      '5paisa outsourced a defined business process — customer acquisition — rather than simply outsourcing salespeople.',
    closingLine:
      "5paisa didn't outsource salespeople. It outsourced the engine that moved prospects towards Demat account opening.",
  },
  {
    id: 'ketto',
    company: 'Ketto',
    tagline: 'Building a Performance-Led Donor Acquisition Engine for Recurring Giving',
    industry: 'Crowdfunding / Social Impact / FinTech',
    segment: 'Managed Inside Sales',
    keyMetrics: [
      { label: 'Productive Calling', value: '↑ 15–25%' },
      { label: 'Lead Action Coverage', value: '90%+' },
      { label: 'Retention', value: 'LTV-Aligned' },
    ],
    overview: {
      industry: 'Crowdfunding / Social Impact / FinTech',
      business: 'Online crowdfunding platform for medical, social and charitable causes',
      focusSegment: 'Social Impact Plan (SIP) Recurring Donor Acquisition',
      challenge:
        'Acquire recurring donors who continue giving — not just maximise one-time signups.',
    },
    intro: {
      heading: 'Acquiring a donor is easy to measure. Retaining one creates value.',
      lines: ['Signups are easy.', 'Sustained giving is the real goal.'],
    },
    challenges: [
      {
        title: 'Conversion Quality, Not Just Volume',
        desc: 'Maximising short-term signups risked compromising long-term donor quality and continuity.',
      },
      {
        title: 'Building Cause & Platform Trust',
        desc: 'A donor had to understand the cause and trust the platform before committing to monthly giving.',
      },
      {
        title: 'Completing the Recurring Commitment',
        desc: 'Success meant a completed SIP signup and a successful first donation, not merely a verbal yes.',
      },
      {
        title: 'Retention & Dropout Risk',
        desc: 'A six-month dropout clawback tied acquisition economics directly to post-signup donor continuity.',
      },
      {
        title: 'Quality, Compliance & Audit',
        desc: 'Recorded lines, CRM discipline and audits were required across every donor conversation.',
      },
    ],
    people: {
      oldModel: ['Generic Telecalling', 'Signup-Target Agents'],
      newModel: [
        'Trained Donor Acquisition Specialists',
        'Background-Verified, Dedicated Resources',
      ],
      outcome:
        'Agents explained the cause, how SIP works and why monthly giving matters — acquiring donors who continue giving.',
    },
    process: [
      'Leads (50 / agent / day)',
      'Connects',
      'Engagement',
      'Intent',
      'SIP Signup',
      'Successful Donation',
      'Retention',
    ],
    technology: [
      'Ozonetel Cloud Telephony',
      'Ketto CRM (Lead & Customer Management)',
      'Recorded Calls (Quality & Compliance)',
      'Real-Time Lead Tracking',
      'ASV & Daily MTD/YTD Reporting',
      'Dropout Monitoring',
    ],
    impactMetrics: [
      {
        label: 'Productive Calling Capacity',
        value: '15–25%',
        direction: 'up',
        detail:
          'A defined 50-leads/agent/day universe replaced fragmented allocation and manually managed follow-up.',
      },
      {
        label: 'Lead Action Coverage',
        value: '90%+',
        direction: 'up',
        detail:
          'CRM-based lead tracking gave visibility over untouched and pending opportunities.',
      },
      {
        label: 'Operational Management Load',
        value: '20–30%',
        direction: 'down',
        detail:
          'Recruitment, payroll, continuity, training and workforce administration shifted to the managed operation.',
      },
      {
        label: 'Conversion Measurement',
        value: 'Signup + Donation',
        direction: 'up',
        detail:
          'Success was measured as retained donors (signups minus dropouts), not gross conversion alone.',
      },
      {
        label: 'Retention Accountability',
        value: '6-Month Clawback',
        direction: 'up',
        detail:
          'A dropout clawback aligned the sales engine with donor lifetime value, not just sign-up count.',
      },
      {
        label: 'Revenue Visibility',
        value: 'Cohort-Based',
        direction: 'up',
        detail:
          'Donor cohorts by signup month, donation and continuation rate turned reporting into revenue intelligence.',
      },
    ],
    transformation: [
      { from: 'Cost Per Signup', to: 'Cost Per Retained Donor' },
      { from: 'Quantity of Signups', to: 'Quality of Conversion' },
      { from: 'Acquisition Activity', to: 'Recurring Donor Acquisition Engine' },
      { from: 'Sales Reporting', to: 'Revenue Intelligence' },
    ],
    transformIntro:
      'Ketto\'s sales system was economically encouraged to care about what happened after the sale — balancing volume, conversion, trust and retention.',
    closingLine:
      "Ketto didn't outsource telecalling. It outsourced the engine that converted leads into recurring donors.",
  },
  {
    id: 'care-health',
    company: 'Care Health Insurance',
    tagline: 'Building an End-to-End Health Insurance Sales Engine — From Lead to Policy Closure',
    industry: 'Insurance / Financial Services',
    segment: 'End-to-End Managed Sales',
    keyMetrics: [
      { label: 'Conversion Uplift', value: '↑ 30%' },
      { label: 'Effective CAC', value: '↓ 23%' },
      { label: 'Follow-Up Coverage', value: '90%+' },
    ],
    overview: {
      industry: 'Insurance / Financial Services',
      business: 'Standalone health insurer for individuals, families and businesses',
      focusSegment: 'Retail Health, Top-Up, Personal Accident, Critical Illness & Group',
      challenge:
        'Own the full journey from lead to policy closure, not just deliver prospects — solving lead-to-policy conversion.',
    },
    intro: {
      heading: 'Health insurance is not bought like a commodity.',
      lines: ['Generating a lead is easy.', 'Converting it is a trust-led sale.'],
    },
    challenges: [
      {
        title: 'Trust-Led, Consultative Sale',
        desc: 'Customers decide on protection against an unknown future event — a confidence-building, not scripted, conversation.',
      },
      {
        title: 'Complex Need Discovery',
        desc: 'Age, family composition, existing cover, sum insured, affordability and pre-existing conditions all shape the fit.',
      },
      {
        title: 'Fragmented Handoffs',
        desc: 'Marketing → telecalling → advisor → follow-up → sales — every handoff created funnel leakage.',
      },
      {
        title: 'Multi-Touch Follow-Up',
        desc: '"Call me after salary day" or "I need to discuss with my spouse" is an unfinished sale, not a bad lead.',
      },
      {
        title: 'Activity-Based Measurement',
        desc: 'Measuring calls or leads contacted obscured progression through the real lead-to-policy funnel.',
      },
    ],
    people: {
      oldModel: ['Scripted Telecallers', 'Fragmented Sales Handoffs'],
      newModel: [
        'Trained Insurance Sales Consultants',
        'End-to-End Closure Ownership (lead → policy)',
      ],
      outcome:
        'The salesperson became the conversion layer — identifying the protection gap and owning the customer to closure.',
    },
    process: [
      'Lead Received',
      'First Contact',
      'Need Discovery',
      'Qualification',
      'Product Consultation',
      'Quote / Premium',
      'Objection Handling',
      'Follow-Up',
      'Proposal / Payment',
      'Policy Closure',
    ],
    technology: [
      'Lead Management',
      'Telephony (Measurable Engagement)',
      'CRM (Disposition & Next Action)',
      'Structured Follow-Up',
      'Funnel Performance Data',
      'Premium & Revenue Analytics',
    ],
    impactMetrics: [
      {
        label: 'Lead-to-Sale Conversion',
        value: '30%',
        direction: 'up',
        detail:
          'Structured qualification, consultative selling and systematic follow-up lifted policies from the same lead volume.',
      },
      {
        label: 'Effective CAC',
        value: '23%',
        direction: 'down',
        detail:
          'Constant media spend with better conversion drove cost per acquisition down without more leads.',
      },
      {
        label: 'Follow-Up Coverage',
        value: '90%+',
        direction: 'up',
        detail:
          'A structured follow-up process kept multi-touch health-insurance opportunities active.',
      },
      {
        label: 'Productive Sales Time',
        value: '20–30%',
        direction: 'up',
        detail:
          'Separating admin from selling and disciplined lead allocation returned time to consultations and closures.',
      },
      {
        label: 'Operational Management Load',
        value: '20–30%',
        direction: 'down',
        detail:
          'Recruitment, training, supervision, QA and reporting shifted into the managed sales operation.',
      },
      {
        label: 'Sales Ownership',
        value: 'End-to-End',
        direction: 'up',
        detail:
          'Removing fragmented handoffs put engagement, qualification, consultation, follow-up and closure under one owner.',
      },
    ],
    transformation: [
      { from: 'Cost Per Lead', to: 'Cost Per Policy Sold' },
      { from: 'Fragmented Handoffs', to: 'End-to-End Sales Ownership' },
      { from: 'Scripted Telecalling', to: 'Consultative Selling' },
      { from: 'Activity Reporting', to: 'Revenue Analytics' },
    ],
    transformIntro:
      'Care proved outsourced sales can go far deeper than lead generation — taking responsibility from lead to money.',
    closingLine:
      "Care didn't outsource calling. It outsourced the journey from lead to policy sale.",
  },
];

export default caseStudies;
