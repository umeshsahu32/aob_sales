import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './components/Layout';
const Home = lazy(() => import('./pages/home/Home'));
const AboutUs = lazy(() => import('./pages/about-us/AboutUs'));
const Services = lazy(() => import('./pages/services/Services'));
const ContactUs = lazy(() => import('./pages/contact-us/ContactUs'));
const CaseStudy = lazy(() => import('./pages/case-study/CaseStudy'));
const BlogsMedia = lazy(() => import('./pages/blogs-media/BlogsMedia'));
const BlogDetail = lazy(() => import('./pages/blog-detail/BlogDetail'));
const CaseStudyDetail = lazy(() => import('./pages/case-study-detail/CaseStudyDetail'));
const PrivacyPolicy = lazy(() => import('./pages/privacy-policy/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/terms-conditions/TermsConditions'));
const RefundCancellation = lazy(() => import('./pages/refund-cancellation/RefundCancellation'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/case-study",
        element: <CaseStudy />,
      },
      {
        path: "/case-study/:id",
        element: <CaseStudyDetail />,
      },
      {
        path: "/blogs-media",
        element: <BlogsMedia />,
      },
      {
        path: "/blogs-media/:id",
        element: <BlogDetail />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-conditions",
        element: <TermsConditions />,
      },
      {
        path: "/refund-cancellation",
        element: <RefundCancellation />,
      },
    ],
  },
]);

export default router;
