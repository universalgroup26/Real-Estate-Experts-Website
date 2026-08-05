export interface VacancyFormData {
  fullName: string;
  role: 'Owner' | 'Property Manager' | 'Broker/Agent' | 'Other';
  mobilePhone: string;
  email: string;
  preferredContact: 'Phone call' | 'Text message' | 'Email';
  borough: 'Manhattan' | 'Brooklyn' | 'Queens' | 'Bronx' | 'Staten Island';
  unitCount: '1' | '2-4' | '5-10' | '10+';
  bedroomCount: 'Studio' | '1 BR' | '2 BR' | '3 BR' | '4+ BR';
  askingRent: string;
  utilities: 'Landlord pays all' | 'Tenant pays gas/electric' | 'Tenant pays all' | 'Split/Other';
  availability: 'Available now' | 'Next 30 days' | '30-60 days' | 'Future date';
  moveInReady: 'Yes' | 'Needs minor work' | 'Needs full turnover';
  previousExperience: 'Yes - Positive' | 'Yes - Had challenges' | 'No experience';
  mainQuestion: string;
  propertyAddress?: string;
  companyName?: string;
  additionalInfo?: string;
  consentAgreed: boolean;
}

export interface BookingData {
  fullName: string;
  phone: string;
  email: string;
  consultationType: 'phone' | 'video';
  date: string;
  timeSlot: string;
  borough?: string;
  notes?: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface BenefitCard {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceCard {
  id: number;
  title: string;
  description: string;
  badge?: string;
  iconName: string;
}

export interface StepItem {
  stepNumber: number;
  title: string;
  description: string;
}

export interface LeadRecord {
  id: string;
  fullName: string;
  role: string;
  mobilePhone: string;
  email: string;
  borough: string;
  unitCount: string;
  bedroomCount: string;
  askingRent: string;
  availability: string;
  tags: string[];
  pipelineStage: string;
  assignedTo: string;
  createdAt: string;
}
