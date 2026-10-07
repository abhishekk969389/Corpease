import corpData from "./corpease.json";
export type RawCorpData = typeof corpData;

const sec = corpData.CorpEase.sections;

export type CorpEaseSubBannerData = typeof sec.SubBanner.variants.about;
export type CorpEaseBrandData = typeof sec.Brand.variants.CorpEaseBrand1;
export type CorpEaseHeaderData = typeof sec.Header.variants.CorpEaseHeader1;
export type CorpEaseBannerData = typeof sec.Banner.variants.CorpEaseBanner1;
export type CorpEaseAboutSectionData = typeof sec.AboutSection.variants.CorpEaseAboutSection1;
export type CorpEaseAboutPageDetailsData = typeof sec.AboutPageDetails.variants.CorpEaseAboutPageDetails1;
export type CorpEaseStatsData = typeof sec.Stats.variants.CorpEaseStats1;
export type CorpEaseServicesData = typeof sec.Services.variants.CorpEaseServices1;
export type CorpEaseTestimonialData = typeof sec.Testimonial.variants.CorpEaseTestimonial1;
export type CorpEaseBlogData = typeof sec.Blog.variants.CorpEaseBlog1;
export type CorpEaseBlogPageData = typeof sec.Blog.variants.CorpEaseBlogPage1;
export type CorpEaseFooterData = typeof sec.Footer.variants.CorpEaseFooter1;
export type CorpEaseWhyChooseUsData = typeof sec.WhyChooseUs.variants.CorpEaseWhyChooseUs1;
export type CorpEaseQuoteData = typeof sec.Quote.variants.CorpEaseQuote1;
export type CorpEaseContactSecData = typeof sec.ContactSec.variants.CorpEaseContact1;
export type CorpEaseThankYouData = typeof sec.ThankYou.variants.CorpEaseThankYou1;
export type CorpEaseServiceSidebarData = typeof sec.ServiceSidebar.variants.CorpEaseServiceSidebar1;
export type CorpEaseServiceDetailsData = typeof sec.ServiceDetails.variants["private-limited-company"];
export type CorpEaseBlogDetailsData = typeof sec.BlogDetails.variants["private-limited-company-registration-guide"];

export const site = {
  brand: sec.Brand.variants.CorpEaseBrand1,
  navbar: sec.Header.variants.CorpEaseHeader1,
  banner: sec.Banner.variants.CorpEaseBanner1,
  about: sec.AboutSection.variants.CorpEaseAboutSection1,
  aboutPageDetails: sec.AboutPageDetails.variants.CorpEaseAboutPageDetails1,
  stats: sec.Stats.variants.CorpEaseStats1,
  ourServices: sec.Services.variants.CorpEaseServices1,
  testimonialSec: sec.Testimonial.variants.CorpEaseTestimonial1,
  ourBlogs: sec.Blog.variants.CorpEaseBlog1,
  blogPageData: sec.Blog.variants.CorpEaseBlogPage1,
  footer: sec.Footer.variants.CorpEaseFooter1,
  subBanners: sec.SubBanner.variants,
  whyChooseUs: sec.WhyChooseUs.variants.CorpEaseWhyChooseUs1,
  quoteSec: sec.Quote.variants.CorpEaseQuote1,
  contactSec: sec.ContactSec.variants.CorpEaseContact1,
  thankYouSec: sec.ThankYou.variants.CorpEaseThankYou1,
  serviceSidebar: sec.ServiceSidebar.variants.CorpEaseServiceSidebar1,
  serviceDetails: sec.ServiceDetails.variants,
  blogDetails: sec.BlogDetails.variants,
};

export default corpData;
