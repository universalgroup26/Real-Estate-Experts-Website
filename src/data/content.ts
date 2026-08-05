import { BenefitCard, FaqItem, ServiceCard, StepItem } from '../types';

export const BUSINESS_INFO = {
  brand: 'Real Estate Experts',
  agentName: 'Joy Chowdhury',
  title: 'Licensed Real Estate Salesperson',
  brokerage: 'Keller Williams Realty Landmark II',
  mobilePhone: '917-565-4788',
  officePhone: '347-846-1200',
  email: 'nyjoy@kw.com',
  website: 'nyjoy.kw.com',
  address: '75-35 31st Ave, Suite 202, Jackson Heights, NY 11370',
  market: 'All five boroughs of New York City (Manhattan, Brooklyn, Queens, Bronx, Staten Island)',
  kwIndependentDisclaimer: 'Each office is independently owned and operated.',
  complianceDisclaimer: 'Real Estate Experts and Keller Williams Realty Landmark II are not affiliated with or endorsed by NYC HRA/DSS, NYCHA, HUD, or any government agency. Program eligibility, payment amounts, tenant contributions, rent reasonableness, utility allowances, documentation, inspection, and approval requirements apply. Information is provided for general educational purposes and may change. Equal Housing Opportunity.',
};

export const BENEFIT_CARDS: BenefitCard[] = [
  {
    id: 1,
    title: 'Vacancy Support',
    description: 'Connect available and upcoming units with active housing demand.',
    iconName: 'Building2',
  },
  {
    id: 2,
    title: 'Tenant-Matching Coordination',
    description: 'Review potential program-supported tenant opportunities for the property.',
    iconName: 'Users',
  },
  {
    id: 3,
    title: 'Paperwork Guidance',
    description: 'Receive help organizing landlord documents, submissions, scheduling, and program handoffs.',
    iconName: 'FileCheck',
  },
  {
    id: 4,
    title: 'Inspection Preparation',
    description: 'Understand the applicable inspection or walk-through process and what may be required.',
    iconName: 'ClipboardCheck',
  },
  {
    id: 5,
    title: 'Clear Payment Information',
    description: 'Understand which approved portion may be program-paid and whether a tenant contribution applies.',
    iconName: 'DollarSign',
  },
];

export const PROCESS_STEPS: StepItem[] = [
  {
    stepNumber: 1,
    title: 'Submit the Unit',
    description: 'Tell us the property location, bedroom count, asking rent, utilities, and availability.',
  },
  {
    stepNumber: 2,
    title: 'Review the Opportunity',
    description: 'We discuss the unit and whether a CityFHEPS or Section 8 opportunity may be appropriate.',
  },
  {
    stepNumber: 3,
    title: 'Coordinate the Process',
    description: 'We assist with potential tenant matching, landlord paperwork, scheduling, and applicable inspection steps.',
  },
  {
    stepNumber: 4,
    title: 'Make an Informed Decision',
    description: 'The owner reviews the opportunity using lawful, consistent screening criteria and decides how to proceed, subject to fair-housing and program requirements.',
  },
];

export const SERVICES: ServiceCard[] = [
  {
    id: 1,
    title: 'Active Vacancy Support',
    description: 'Dedicated assistance for filling ready-to-rent NYC residential units across all five boroughs.',
    badge: 'Popular',
    iconName: 'Home',
  },
  {
    id: 2,
    title: 'Upcoming Turnover Planning',
    description: 'Proactive planning and tenant lead matching for units with upcoming lease expirations or turnovers.',
    badge: 'Planning',
    iconName: 'CalendarClock',
  },
  {
    id: 3,
    title: 'CityFHEPS Opportunity Review',
    description: 'Clear guidance on navigating the CityFHEPS rental assistance voucher program and voucher requirements.',
    badge: 'Educational',
    iconName: 'ShieldCheck',
  },
  {
    id: 4,
    title: 'Section 8 Opportunity Review',
    description: 'Comprehensive review of NYCHA and HPD Housing Choice Voucher (Section 8) rental processes.',
    badge: 'Educational',
    iconName: 'CheckCircle2',
  },
  {
    id: 5,
    title: 'Landlord Paperwork Coordination',
    description: 'Structured aid organizing required landlord package documents, leasing disclosures, and agency packets.',
    iconName: 'FileText',
  },
  {
    id: 6,
    title: 'Inspection & Scheduling Guidance',
    description: 'Walkthrough checklists, scheduling coordination, and advice on standard NYC program inspection standards.',
    iconName: 'Sliders',
  },
  {
    id: 7,
    title: 'Property Manager Portfolio Review',
    description: 'Tailored single point of contact for property management firms with multiple available or turnover units.',
    badge: 'Portfolio',
    iconName: 'Building',
  },
  {
    id: 8,
    title: 'Broker & Agent Cooperation',
    description: 'Professional co-broke and referral relationships with NYC licensed real estate professionals.',
    badge: 'Cooperation',
    iconName: 'Handshake',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: 'How is the rent paid?',
    answer: 'An approved portion may be paid directly by the administering agency, while a tenant contribution may also apply. Payment amounts and continued assistance depend on eligibility, compliance, and applicable program rules.',
  },
  {
    id: 2,
    question: 'Can I choose the tenant?',
    answer: 'Owners retain leasing decision-making using lawful and consistently applied screening criteria, subject to fair-housing and source-of-income laws.',
  },
  {
    id: 3,
    question: 'Are inspections involved?',
    answer: 'Applicable programs generally require documentation and an inspection or walk-through. We help explain and coordinate the process, but we cannot guarantee an inspection result.',
  },
  {
    id: 4,
    question: 'Can I set my own rent?',
    answer: 'An owner may request a rent, but the approved amount can be affected by payment standards, utilities, rent reasonableness, documentation, and program review.',
  },
  {
    id: 5,
    question: 'How long does the process take?',
    answer: 'Timing varies based on the program, unit readiness, documents, inspection scheduling, and agency review. Do not promise a fixed approval timeline.',
  },
  {
    id: 6,
    question: 'What if I had a difficult experience in the past?',
    answer: 'We will listen to the specific concern and explain how our documentation, communication, and coordination process works. No particular outcome can be guaranteed.',
  },
  {
    id: 7,
    question: 'What if I do not have a vacancy now?',
    answer: 'The owner can submit an expected availability date and request a future follow-up.',
  },
  {
    id: 8,
    question: 'Is there an obligation to proceed?',
    answer: 'No. Requesting information or reviewing an opportunity does not require an owner to complete a transaction. All decisions remain subject to applicable laws and program requirements.',
  },
];

export const FAQS = [
  {
    id: 1,
    category: 'Payments & Rent',
    question: 'How is the rent paid and direct deposited?',
    answer: 'Under NYC rental voucher programs (such as CityFHEPS and Section 8), approved rent payments are paid directly to the landlord or management company via Electronic Funds Transfer (EFT direct deposit) or check from the administering agency (HRA or NYCHA). Any tenant portion is paid directly by the tenant according to the lease agreement.',
  },
  {
    id: 2,
    category: 'Tenant Selection',
    question: 'Can I screen prospective voucher-holding tenants?',
    answer: 'Yes. Landlords retain the legal right to apply standard, non-discriminatory screening criteria (such as landlord references, criminal history review where permitted by NYC law, and interview evaluation). However, under NYC Fair Housing Law, landlords cannot discriminate based on Source of Income (including CityFHEPS or Section 8 vouchers).',
  },
  {
    id: 3,
    category: 'Inspections & Process',
    question: 'What happens during the HPD / NYCHA physical unit inspection?',
    answer: 'Before lease sign-off and voucher approval, HPD or NYCHA inspectors perform a physical walk-through to ensure the unit complies with NYC Housing Maintenance Code. Key items checked include working smoke/CO detectors, window guards, absence of peeling lead paint, functional heat/hot water, and secure electrical faceplates.',
  },
  {
    id: 4,
    category: 'Payments & Rent',
    question: 'Can I set my asking rent, or does HRA mandate a cap?',
    answer: 'Property owners can request their desired market rent; however, final approved amounts are subject to agency Payment Standards, Utility Allowances, and Rent Reasonableness evaluations (comparing your unit against similar unassisted units in the immediate neighborhood).',
  },
  {
    id: 5,
    category: 'Inspections & Process',
    question: 'How long does the entire paperwork and placement process take?',
    answer: 'While individual timelines vary based on document completeness, inspection scheduling, and agency backlog, typical lease coordination takes between 2 to 5 weeks from initial landlord packet submission to move-in clearance.',
  },
  {
    id: 6,
    category: 'General',
    question: 'Is there any upfront fee for landlords or property owners?',
    answer: 'No! Joy Chowdhury provides landlord placement coordination and paperwork assistance without upfront fees to property owners.',
  },
  {
    id: 7,
    category: 'Property Managers',
    question: 'Do you offer portfolio support for property management companies?',
    answer: 'Yes. We work closely with NYC property managers handling multi-family portfolios (5 to 100+ units), providing a dedicated single point of contact, bulk vacancy intake, and streamlined paperwork review.',
  },
  {
    id: 8,
    category: 'General',
    question: 'What if my apartment is not vacant yet, but will be available next month?',
    answer: 'We encourage property owners to submit upcoming turnover dates 30 to 60 days in advance. Pre-screening upcoming vacancies reduces downtime between tenant leases.',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    stepNumber: 1,
    title: 'Submit the Vacancy Intake',
    timeline: 'Day 1 (Instant)',
    description: 'Provide property specs (borough, address, bedrooms, bathrooms, asking rent, utility inclusions, and target availability date) via our simple online intake form.',
    details: [
      'Enter property address and unit specifications',
      'Indicate included utilities (heat, hot water, gas, electric)',
      'Specify expected move-in availability window',
      'Automatic GoHighLevel CRM log creation',
    ],
  },
  {
    stepNumber: 2,
    title: 'Voucher & Rent Review',
    timeline: 'Days 2 - 4',
    description: 'We evaluate your unit against current NYC CityFHEPS & Section 8 payment standards, calculate utility allowances, and review program compatibility.',
    details: [
      'Compare asking rent against HRA payment standard caps',
      'Calculate estimated landlord direct deposit portion',
      'Pre-screen applicant voucher paperwork and voucher limits',
      'Provide owner with detailed program breakdown',
    ],
  },
  {
    stepNumber: 3,
    title: 'Paperwork & Inspection Prep',
    timeline: 'Days 5 - 14',
    description: 'We assist with compiling the complete Landlord Package (W-9, Deed/Tax bill, Lease agreement, Lead paint disclosures) and schedule the required unit inspection.',
    details: [
      'Compile landlord W-9, Deed/HPD registration, and proposed lease',
      'Complete pre-inspection walkthrough checklist (detectors, window guards)',
      'Submit packet to HRA / NYCHA / HPD portal',
      'Coordinate inspector access date with owner',
    ],
  },
  {
    stepNumber: 4,
    title: 'Lease Execution & Move-In Clearance',
    timeline: 'Days 15 - 28',
    description: 'Upon passing inspection and receiving agency approval, final lease agreements are signed, security vouchers/direct deposit is set up, and key handoff occurs.',
    details: [
      'Execute formal NYC Residential Lease Agreement',
      'Confirm HRA Direct Deposit authorization setup',
      'Review landlord sign-on incentive bonus status if applicable',
      'Final key exchange and tenant move-in clearance',
    ],
  },
];

export const CITYFHEPS_INFO = {
  description: 'CityFHEPS is the primary New York City rental assistance program administered by the Department of Social Services (DSS) and Human Resources Administration (HRA). It consolidates former programs (such as LINC, SEPS, and CITYFEPS) into a unified voucher system.',
  keyPoints: [
    'Direct landlord rental payments deposited monthly by HRA',
    'Up to 15-year voucher duration for qualifying households',
    'Potential one-time landlord sign-on bonus for eligible emergency placements',
    'Access to NYC Unit Repair Assurance funds for owner peace of mind',
    'Subject to annual HRA rent reasonableness and utility allowance adjustments',
  ],
  maxRentEstimate: [
    { size: 'Studio', rent: '$2,387 / mo*' },
    { size: '1 Bedroom', rent: '$2,453 / mo*' },
    { size: '2 Bedroom', rent: '$2,780 / mo*' },
    { size: '3 Bedroom', rent: '$3,485 / mo*' },
    { size: '4 Bedroom', rent: '$3,724 / mo*' },
  ],
};

export const SECTION8_INFO = {
  description: 'Section 8 (Housing Choice Voucher Program) is a federally funded program administered locally in New York City by NYCHA, HPD, and NYS HCR. It allows low-income families to rent market-rate apartments with federal subsidy support.',
  keyPoints: [
    'Federally backed monthly rental subsidy payments directly from NYCHA or HPD',
    'Long-standing, highly reliable program structure across all NYC boroughs',
    'Landlord portal access for direct tracking of payment history and inspection status',
    'Rent increases permitted annually upon HRA/NYCHA market review request',
    'Mandatory initial and biennial HQS physical unit inspections',
  ],
};

export const ABOUT_JOY_DATA = {
  bio: 'Joy Chowdhury is a dedicated Licensed Real Estate Salesperson with Keller Williams Realty Landmark II in Queens, NY. Specializing in NYC residential rentals, landlord representation, and rental assistance voucher coordination (CityFHEPS, Section 8, HASA, FHEPS), Joy brings professionalism, deep local market knowledge, and clear communication to every transaction.',
  philosophyPoints: [
    'Transparent, honest communication with zero hidden fees for landlords',
    'Rigorous compliance with NYC, NY State, and Federal Fair Housing Laws',
    'Multilingual client care in English and Bengali (বাংলা)',
    'Fast response times and dedicated single point of contact',
  ],
};
