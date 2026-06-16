import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Footer.module.css";

const LinkedInIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

/* Maps each footer service label to a homepage service card ID */
const services = [
  { label: "Sales Outsourcing Company in India", id: "service-outsourcing" },
  { label: "AI Automation Agency India", id: "service-automation" },
  { label: "Lead Generation Service", id: "service-meetings" },
  { label: "Sales Revenue Operations Outsourcing", id: "service-revenue-ops" },
  { label: "Sales Automation Services", id: "service-automation" },
  { label: "Outsourced Sales Team India", id: "service-outsourcing" },
];

const Footer = () => {
  const [showTop, setShowTop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  /* Navigate to homepage then scroll to the target service card */
  const goToService = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 350);
    }
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.grid}>
            {/* ── Brand + Address ── */}
            <div className={styles.brand}>
              <h3 className={styles.brandName}>AOB India</h3>
              <p className={styles.brandTagline}>AI-Powered Sales Systems</p>
              <address className={styles.address}>
                AOB India Private Limited,
                <br />
                # 8-2-248/A, 2nd Floor, Maharshi House,
                <br />
                Road No 3, Banjara Hills,
                <br />
                Hyderabad, Telangana – 500034
              </address>
              <div className={styles.tags}>
                <span>People</span>
                <span className={styles.divider}>|</span>
                <span>Process</span>
                <span className={styles.divider}>|</span>
                <span>Technology</span>
                <span className={styles.divider}>|</span>
                <span>AI</span>
              </div>
            </div>

            {/* ── Quick Links ── */}
            <div className={styles.col}>
              <h4 className={styles.colHeading}>Quick Links</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/blogs-media">Knowledge Center</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact</Link>
                </li>
              </ul>
            </div>

            {/* ── Services ── */}
            <div className={styles.col}>
              <h4 className={styles.colHeading}>Services</h4>
              <ul className={styles.linkList}>
                {services.map((s) => (
                  <li key={s.label}>
                    <a href={`/#${s.id}`} onClick={(e) => goToService(e, s.id)}>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Legal ── */}
            <div className={styles.col}>
              <h4 className={styles.colHeading}>Policies</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-conditions">Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link to="/refund-cancellation">
                    Refund &amp; Cancellation
                  </Link>
                </li>
              </ul>
            </div>

            {/* ── Connect ── */}
            <div className={styles.col}>
              <h4 className={styles.colHeading}>Connect</h4>
              <div className={styles.socialIcons}>
                <a
                  href="https://www.linkedin.com/company/aob-sales/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://www.facebook.com/people/AOB-Sales/61583753110673/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://www.instagram.com/aobsales/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className={styles.bottom}>
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} AOB India. All rights reserved.
            </p>
            
          </div>
        </div>
      </footer>

      {/* ── Scroll to top (portalled to body so fixed positioning is never trapped) ── */}
      {showTop &&
        createPortal(
          <button
            className={styles.scrollTop}
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5" />
              <path d="M5 12l7-7 7 7" />
            </svg>
          </button>,
          document.body,
        )}
    </>
  );
};

export default Footer;
