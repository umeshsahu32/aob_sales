import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBlogs } from '../../hooks/useBlogs';
import mediaItems from '../../data/mediaData';
import styles from './BlogsMedia.module.css';

const CATEGORIES = ['All', 'Business', 'Technology'];

/* ── Media components ─────────────────────────────── */

const FeaturedMediaCard = ({ item }) => (
  <a
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.featuredCard}
  >
    <div className={styles.featuredImg}>
      <img src={item.img} alt={item.title} loading="eager" />
    </div>
    <div className={styles.featuredBody}>
      <span className={styles.sourceTag}>{item.source}</span>
      <h2 className={styles.featuredTitle}>{item.title}</h2>
      <p className={styles.featuredDesc}>{item.description}</p>
      <span className={styles.articleLink}>Read Full Article →</span>
    </div>
  </a>
);

const MediaCard = ({ item }) => (
  <a
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.mediaCard}
  >
    <div className={styles.mediaCardImg}>
      <img src={item.img} alt={item.title} loading="lazy" />
      <span className={styles.mediaSourceBadge}>{item.source}</span>
    </div>
    <div className={styles.mediaCardBody}>
      <h3 className={styles.mediaCardTitle}>{item.title}</h3>
      <p className={styles.mediaCardDesc}>{item.description}</p>
      <span className={styles.mediaReadLink}>Read Full Article →</span>
    </div>
  </a>
);

/* ── Page ─────────────────────────────────────────── */

const BlogsMedia = () => {
  const { blogs, loading, error } = useBlogs();
  const [activeTab, setActiveTab] = useState('blogs');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  const countFor = (cat) =>
    cat === 'All' ? blogs.length : blogs.filter((b) => b.category === cat).length;

  const [featuredItem, ...restMedia] = mediaItems;

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.badge}>BLOGS & MEDIA</span>
          <h1 className={styles.heroTitle}>
            Knowledge <span className="text-gradient">Center</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Perspectives on AI, lead generation, and revenue transformation
          </p>
        </div>
      </section>

      <div className={styles.tabSection}>
        <div className="container">
          <div className={styles.tabRow}>
            <button
              className={`${styles.tabBtn} ${activeTab === 'blogs' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('blogs')}
            >
              Blogs
              <span className={styles.tabCount}>{blogs.length}</span>
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'media' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('media')}
            >
              Media Coverage
              <span className={styles.tabCount}>{mediaItems.length}</span>
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'blogs' && (
        <>
          <section className={styles.filterSection}>
            <div className="container">
              <div className={styles.filterRow}>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                    <span className={styles.count}>{countFor(cat)}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.gridSection}>
            <div className="container">
              {loading && <div className={styles.state}>Loading articles...</div>}
              {error && <div className={styles.state}>Failed to load articles. Please try again.</div>}
              {!loading && !error && filtered.length === 0 && (
                <div className={styles.state}>No articles in this category yet.</div>
              )}
              {!loading && !error && filtered.length > 0 && (
                <div className={styles.cards}>
                  {filtered.map((blog) => (
                    <Link
                      to={`/blogs-media/${blog.id}`}
                      key={blog.id}
                      className={styles.card}
                    >
                      <div className={styles.cardImage}>
                        <img src={blog.image} alt={blog.title} loading="lazy" />
                        <span className={styles.cardCategory}>{blog.category}</span>
                      </div>
                      <div className={styles.cardBody}>
                        <span className={styles.cardDate}>{blog.date}</span>
                        <h3 className={styles.cardTitle}>{blog.title}</h3>
                        <p className={styles.cardDesc}>{blog.description}</p>
                        <div className={styles.cardFooter}>
                          <span className={styles.cardAuthor}>{blog.author}</span>
                          <span className={styles.readMore}>Read More →</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {activeTab === 'media' && (
        <section className={styles.mediaSection}>
          <div className="container">
            <FeaturedMediaCard item={featuredItem} />

            <div className={styles.mediaDivider}>
              <span className={styles.mediaDividerLabel}>More Coverage</span>
            </div>

            <div className={styles.mediaGrid}>
              {restMedia.map((item) => (
                <MediaCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogsMedia;
