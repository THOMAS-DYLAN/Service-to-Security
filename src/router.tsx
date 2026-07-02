import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OurStory from "./pages/about/OurStory";
import OurMission from "./pages/about/OurMission";
import Team from "./pages/about/Team";
import WhyChooseUs from "./pages/about/WhyChooseUs";
import MedicareBasics from "./pages/medicare/Basics";
import MedicareAdvantage from "./pages/medicare/Advantage";
import MedicareSupplement from "./pages/medicare/Supplement";
import PartD from "./pages/medicare/PartD";
import Enrollment from "./pages/medicare/Enrollment";
import MedicareFaqs from "./pages/medicare/Faqs";
import Income from "./pages/retirement/Income";
import SocialSecurity from "./pages/retirement/SocialSecurity";
import LongTermCare from "./pages/retirement/LongTermCare";
import Annuities from "./pages/retirement/Annuities";
import AssetProtection from "./pages/retirement/AssetProtection";
import LifeInsurance from "./pages/retirement/LifeInsurance";
import EstatePlanning from "./pages/retirement/EstatePlanning";
import Information from "./pages/resources/Information";
import Guides from "./pages/resources/Guides";
import Checklist from "./pages/resources/Checklist";
import Faq from "./pages/resources/Faq";
import MedicareGuide from "./pages/resources/MedicareGuide";
import Schedule from "./pages/contact/Schedule";
import Contact from "./pages/contact/Contact";
import Locations from "./pages/contact/Locations";
import ContactUs from "./pages/contact/ContactUs";
import Consultation from "./pages/contact/Consultation";

export const routers = [
  {
    path: "/",
    name: "home",
    element: <Index />,
  },
  // About
  { path: "/about/our-story", name: "our-story", element: <OurStory /> },
  { path: "/about/our-mission", name: "our-mission", element: <OurMission /> },
  { path: "/about/team", name: "team", element: <Team /> },
  { path: "/about/why-choose-us", name: "why-choose-us", element: <WhyChooseUs /> },
  // Medicare
  { path: "/medicare/basics", name: "medicare-basics", element: <MedicareBasics /> },
  { path: "/medicare/advantage", name: "medicare-advantage", element: <MedicareAdvantage /> },
  { path: "/medicare/supplement", name: "medicare-supplement", element: <MedicareSupplement /> },
  { path: "/medicare/part-d", name: "medicare-part-d", element: <PartD /> },
  { path: "/medicare/enrollment", name: "medicare-enrollment", element: <Enrollment /> },
  { path: "/medicare/faqs", name: "medicare-faqs", element: <MedicareFaqs /> },
  // Retirement
  { path: "/retirement/income", name: "retirement-income", element: <Income /> },
  { path: "/retirement/social-security", name: "social-security", element: <SocialSecurity /> },
  { path: "/retirement/long-term-care", name: "long-term-care", element: <LongTermCare /> },
  { path: "/retirement/annuities", name: "annuities", element: <Annuities /> },
  { path: "/retirement/asset-protection", name: "asset-protection", element: <AssetProtection /> },
  { path: "/retirement/life-insurance", name: "life-insurance", element: <LifeInsurance /> },
  { path: "/retirement/estate-planning", name: "estate-planning", element: <EstatePlanning /> },
  // Resources
  { path: "/resources/information", name: "information", element: <Information /> },
  { path: "/resources/checklist", name: "checklist", element: <Checklist /> },
  { path: "/resources/guides", name: "guides", element: <Guides /> },
  { path: "/resources/faq", name: "faq", element: <Faq /> },
  { path: "/resources/medicare-guide", name: "medicare-guide", element: <MedicareGuide /> },
  // Contact
  { path: "/contact/schedule", name: "schedule", element: <Schedule /> },
  { path: "/contact", name: "contact", element: <Contact /> },
  { path: "/contact/us", name: "contact-us", element: <ContactUs /> },
  { path: "/contact/consultation", name: "consultation", element: <Consultation /> },
  { path: "/contact/locations", name: "locations", element: <Locations /> },
  // 404 catch-all
  {
    path: "*",
    name: "404",
    element: <NotFound />,
  },
];
