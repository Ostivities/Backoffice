import React, { HTMLAttributeAnchorTarget } from "react";

export enum ACCOUNT_TYPE {
  PERSONAL = "PERSONAL",
  ORGANISATION = "ORGANISATION",
}

export interface INavLinks {
  target: HTMLAttributeAnchorTarget | undefined;
  rel: string | undefined;
  link: string;
  name: string;
}

export interface ITypography {
  content?: string | React.ReactNode;
  className?: string;
  styles?: React.CSSProperties;
  htmlFor?: string;
}

export interface IFeatures {
  icon?: React.ReactNode | any;
  title?: string;
  content?: string | React.ReactNode;
}

export interface IAuthLayout {
  children?: React.ReactNode;
}

export interface IDashboard {
  children?: React.ReactNode;
  title?: string | React.ReactNode;
  tab?: React.ReactNode;
  steppers?: React.ReactNode;
  extraComponents?: React.ReactNode;
  isLoggedIn?: Boolean | React.ReactNode;
}

export interface IHeader {
  isLoggedIn?: Boolean | React.ReactNode;
}
export interface IFormProps {
  formStep?: number;
  nextFormStep?: () => void;
  formData?: any;
}

export interface IFormInput {
  eventName: string;
  eventDetails: string;
  eventState: string;
  eventAddress: string;
  customURL: string;
  document: string;
  eventType: string;
  eventInfo: string;
  timeZone: string;
  startDateAndTime: any;
  endDateAndTime: any;
  eventFrequency?: string;
  eventImage?: string;
  websiteUrl?: string;
  twitterUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  vendorregistration: boolean;
  exhibitionspace: boolean;
  spaceType: string;
  spaceAvailable?: number;
  spaceFee?: string;
}

export interface IModal {
  open?: boolean;
  onClose?: any;
  onCancel?: any;
  onOk?: any;
  actionType?: "delete" | "warning" | "detail";
  data?: any;
  selectedRowKeys?: string | number;
}

export type FieldType = {
  ticketType?: string;
  ticketName?: string;
  ticketStock?: number;
  ticketPrice?: number;
  ticketDescription?: string;
  purchaseLimit?: number | any;
};

export interface FormContextProps {
  formState: FormState;
  setFormStage: (stage: number) => void;
}

export interface FormState {
  stages: any;
  stage: number | any;
}

export interface FormProviderProps {
  children: React.ReactNode;
}

export interface DataType {
  key: React.Key;
  eventName: string;
  eventType: string;
  ticketSold: number;
  type?: string; // Optional, since it's not used in the data generation
  sold?: number; // Optional, since it's not used in the data generation
  dateCreated: string | number | Date;
  status: "Active" | "Closed" | "Pending";
  name?: string; // Optional, since it's not used in the data generation
  age?: number | any; // Optional, since it's not used in the data generation
  address?: string; // Optional, since it's not used in the data generation
  id?: string; // Optional, since it's not used in the data generation
}

export interface AuditTrailDataType {
  key: React.Key; // Unique identifier for each row
  user: string; // Name of the user who performed the action
  userRole: string; // Role of the user (e.g., Admin, User, Viewer)
  clientName: string; // Name of the client associated with the action
  actionDescription: string; // Description of the action performed
  dateTime: string; // Date and time when the action was performed
  id: string; // Unique identifier for the action record
}


export interface UsersDataType {
  key: string; // Unique key for each record
  users: string; // User's name or identifier
  accountType: "Personal" | "Organization"; // Account type can be either Personal or Organization
  registrationDate: string; // Date of registration in string format
  lastLoginDate: string; // Date of last login in string format
  status: "Active" | "Inactive" | "Pending"; // Status of the user: Active, Inactive, or Pending
  id: string; // Unique identifier for actions, such as viewing details
}

export interface AdminDataType {
  key: string;
  staffName: string;
  designation: "CEO" | "CTO" | "Product Manager" | "HR Manager" | "Admin" | "Finance Manager" | "Customer Care";
  dateAssigned: string;
  id: string;
}

export interface RevenueDataType {
  key: string;
  month: string;
  year: number;
  expenses: string; // If 'expenses' should be a number, adjust the type and format accordingly
  totalRevenue: string; // If 'totalRevenue' should be a number, adjust the type and format accordingly
  netProfit: string; // If 'netProfit' should be a number, adjust the type and format accordingly
  revenueGrowth: string;
  cashFlowStatus: "Positive" | "Negative" | "Neutral";
}


export interface SalesDataType {
  eventType: any;
  dateCreated: any;
  key: React.Key;
  eventName: string;
  ticketSold: number;
  sold?: number; // Optional, since it's not used in the data generation
  name?: string; // Optional, since it's not used in the data generation
  age?: number | any; // Optional, since it's not used in the data generation
  address?: string; // Optional, since it's not used in the data generation
  id?: string; // Optional, since it's not used in the data generation
  revenue?: number; // Optional, since it's not used in the data generation
  fees?: number; // Optional, since it's not used in the data generation
  sales?: number; // Optional, since it
}

export interface ExhibitionDataType {
  dateCreated: any;
  key: React.Key;
  eventName: string;
  spaceBooked: number;
  sold?: number; // Optional, since it's not used in the data generation
  name?: string; // Optional, since it's not used in the data generation
  age?: number | any; // Optional, since it's not used in the data generation
  address?: string; // Optional, since it's not used in the data generation
  id?: string; // Optional, since it's not used in the data generation
  revenue?: number; // Optional, since it's not used in the data generation
  fees?: number; // Optional, since it's not used in the data generation
  sales?: number; // Optional, since it
}


export interface VendorDataType {
  key: string;
  vendorName: string;
  category: string;
  dateApplied: any;
  status: "Approved" | "Declined" | "Pending";
  id: string;
  websiteUrl?: string;
  twitterUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
}

export interface CoordinatorsDataType {
  key: string;
  id: string; // Unique identifier for the coordinator
  coordinatorsName: string;
  coordinatorsEmail: string;
  coordinatorsRole: string;
  coordinatorsphoneNumber: string;
  dateAdded: string;
  sold?: number; // Optional, since it's not used in the data generation
  name?: string; // Optional, since it's not used in the data generation
  age?: number | any; // Optional, since it's not used in the data generation
  address?: string; // Optional, since it's not used in the data generation
  revenue?: number; // Optional, since it's not used in the data generation
  fees?: number; // Optional, since it's not used in the data generation
  sales?: number; // Optional, since it
}

export interface SummaryDataType {
  key: string;
  buyerName: string;
  ticketName: string;
  checkedInBy: string;
  discountCode?: string; // optional if they can be null or undefined
  uses?: number;
  dateEnding?: string;
}

export interface PaymentDataType {
  key: string;
  recipient: string;
  bankAccount: string;
  transferFee: number;
  payout: number;
  paymentDate: string;
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  accountType: ACCOUNT_TYPE;
  confirmPassword: string;
  terms_and_condition: boolean;
  businessName: string;
  phonenumber: string;
  feedback: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IResetToken {
  email: string;
  originUrl: string;
}

export interface DiscountDataType {
  key: string;
  discountCode: string;
  uses: string;
  dateEnding: string;
}

export interface IVerifyToken {
  email: string;
  otp: number | string;
}

export interface TabProps {
  tabs: string[];
  currentTab: string;
  handleCurrentTab: (tab: string) => void;
  style?: React.CSSProperties; // Add this line to include the style prop
}
