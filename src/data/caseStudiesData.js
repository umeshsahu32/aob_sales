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
    closingLine: "We didn't add manpower. We engineered a Sales system.",
  },
];

export default caseStudies;
