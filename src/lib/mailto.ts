import { siteContact } from "@/data/site";

export function mailtoHref(email: string, subject: string) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

export const mailtoLinks = {
  enquiry: mailtoHref(siteContact.email, "Website Enquiry"),
  referral: mailtoHref(siteContact.email, "Referral Enquiry"),
  career: mailtoHref(siteContact.email, "Career Enquiry"),
  feedback: mailtoHref(siteContact.feedbackEmail, "Feedback or Complaint"),
  meetAndGreet: mailtoHref(siteContact.email, "Meet & Greet Request"),
  jobApplication: mailtoHref(siteContact.email, "Job Application - No Assumption Support Service"),
} as const;
