import { useState, useCallback } from 'react';
import Toast from '../../../../components/Toast';
import styles from './ContactForm.module.css';

const SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL || '';

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

const infoItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 7l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Email Us',
    value: 'accounts@aobindia.org',
  },
  // {
  //   icon: (
  //     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
  //       <path d="M4.5 3.5A1 1 0 015.4 3h2.2a1 1 0 01.95.68l.8 2.4a1 1 0 01-.23 1.02L7.6 8.6c1 1.8 2.8 3.4 4.8 4.5l1.5-1.55a1 1 0 011.02-.23l2.4.8a1 1 0 01.68.95v2.2a1 1 0 01-.97 1C5.1 16.8 3 6.5 4.5 3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  //     </svg>
  //   ),
  //   label: 'Call / WhatsApp',
  //   value: '+91 — Available on request',
  // },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Response Time',
    value: 'Within 24 business hours',
  },
];

const ContactForm = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const dismissToast = useCallback(() => setToast(null), []);

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!form.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+\d\s\-()]{7,15}$/.test(form.phone)) {
      newErrors.phone = 'Enter a valid phone number';
    }
    if (!form.message.trim()) newErrors.message = 'Please tell us a bit about your needs';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!SCRIPT_URL) {
      setToast({ type: 'error', message: 'Form endpoint not configured. Please set VITE_APPS_SCRIPT_URL.' });
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        // no-cors is required for Google Apps Script — response will be opaque
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
        }),
      });
      setToast({ type: 'success', message: 'Your message has been sent! We\'ll get back to you within 24 hours.' });
      setForm(INITIAL_FORM);
      setErrors({});
    } catch {
      setToast({ type: 'error', message: 'Something went wrong. Please try again or email us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className={styles.section}>
        <div className={`container ${styles.grid}`}>

          {/* ── Left info panel ── */}
          <div className={styles.info}>
            <h2 className={styles.infoHeading}>
              Start the<br />
              <span className="text-gradient">Conversation</span>
            </h2>
            <p className={styles.infoBody}>
              Share your goals with us. Our team will review your requirements and propose a revenue
              system built around your specific targets and market.
            </p>

            <div className={styles.infoCards}>
              {infoItems.map((item) => (
                <div key={item.label} className={styles.infoCard}>
                  <span className={styles.infoIcon}>{item.icon}</span>
                  <div>
                    <p className={styles.infoLabel}>{item.label}</p>
                    <p className={styles.infoValue}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.pillars}>
              {['People', 'Process', 'Technology', 'AI'].map((p) => (
                <span key={p} className={styles.pillar}>{p}</span>
              ))}
            </div>
          </div>

          {/* ── Right form panel ── */}
          <div className={styles.formCard}>
            <form onSubmit={handleSubmit} noValidate className={styles.form}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Send Us a Message</h3>
                <p className={styles.formSubtitle}>
                  Fill in your details and we will reach out within 24 hours.
                </p>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="firstName" className={styles.label}>First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Rahul"
                    value={form.firstName}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`}
                    autoComplete="given-name"
                  />
                  {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
                </div>
                <div className={styles.field}>
                  <label htmlFor="lastName" className={styles.label}>Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Sharma"
                    value={form.lastName}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.lastName ? styles.inputError : ''}`}
                    autoComplete="family-name"
                  />
                  {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="rahul@yourcompany.com"
                  value={form.email}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  autoComplete="email"
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="phone" className={styles.label}>Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                  autoComplete="tel"
                />
                {errors.phone && <span className={styles.error}>{errors.phone}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>Tell Us More</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your business, current sales challenges, and what you're looking to achieve..."
                  value={form.message}
                  onChange={handleChange}
                  className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                />
                {errors.message && <span className={styles.error}>{errors.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`${styles.submitBtn} ${isSubmitting ? styles.submitting : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.spinner} aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>

              <p className={styles.secureNote}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <rect x="1.5" y="5.5" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M4 5.5V4a2.5 2.5 0 015 0v1.5" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                Your information is private and will never be shared.
              </p>
            </form>
          </div>

        </div>
      </section>

      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={dismissToast}
        />
      )}
    </>
  );
};

export default ContactForm;
