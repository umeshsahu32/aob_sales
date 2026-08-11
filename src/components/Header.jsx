import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';

import styles from './Header.module.css';
import logo from '../assets/icons/home/aob_logo.png'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/case-study', label: 'Case Study' },
  { to: '/blogs-media', label: 'Blogs & Media' },
  { to: '/contact-us', label: 'Contact Us' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.nav}`}>
          <Link to="/" className={styles.logo} onClick={close}>
               <img src={logo}/>
          </Link>

          <ul className={styles.links}>
            {NAV_LINKS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link to="/contact-us" className={styles.ctaBtn}>
            Book Strategy Call
          </Link>

          <button
            type="button"
            className={styles.hamburger}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-drawer"
            onClick={isOpen ? close : open}
          >
            <span className={`${styles.bar} ${isOpen ? styles.barTop : ''}`} />
            <span className={`${styles.bar} ${isOpen ? styles.barMid : ''}`} />
            <span className={`${styles.bar} ${isOpen ? styles.barBot : ''}`} />
          </button>
        </div>
      </header>

      {isOpen &&
        createPortal(
          <>
            <div
              className={styles.overlay}
              onClick={close}
              aria-hidden="true"
            />
            <aside
              id="mobile-drawer"
              className={styles.drawer}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className={styles.drawerHeader}>
                <span className={styles.drawerTitle}>Menu</span>
                <button
                  type="button"
                  className={styles.closeBtn}
                  onClick={close}
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>
              <ul className={styles.drawerLinks}>
                {NAV_LINKS.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={close}
                      className={({ isActive }) =>
                        isActive ? styles.drawerActiveLink : undefined
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </aside>
          </>,
          document.body
        )}
    </>
  );
};

export default Header;
