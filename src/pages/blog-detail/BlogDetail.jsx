import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useBlogs } from '../../hooks/useBlogs';
import styles from './BlogDetail.module.css';

const ContentBlock = ({ block, index }) => {
  switch (block.type) {
    case 'paragraph':
      return <p className={styles.para}>{block.text}</p>;
    case 'heading-2':
      return <h2 className={styles.h2}>{block.text}</h2>;
    case 'heading-3':
      return <h3 className={styles.h3}>{block.text}</h3>;
    case 'bullet':
      return (
        <ul className={styles.ul}>
          {block.items.map((item, i) => (
            <li key={i} className={styles.li}>{item}</li>
          ))}
        </ul>
      );
    case 'image':
      return (
        <div className={styles.inlineImage}>
          <img src={block.img} alt="" loading="lazy" />
        </div>
      );
    default:
      return null;
  }
};

const BlogDetail = () => {
  const { id } = useParams();
  const { blogs, loading, error } = useBlogs();

  if (loading) {
    return (
      <div className={styles.page}>
        <div className={styles.stateWrap}>
          <div className={styles.state}>Loading article...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.page}>
        <div className={styles.stateWrap}>
          <div className={styles.state}>Failed to load article.</div>
          <Link to="/blogs-media" className={styles.back}>← Back to Blogs</Link>
        </div>
      </div>
    );
  }

  const blog = blogs.find((b) => b.id === Number(id));
  if (!blog) return <Navigate to="/blogs-media" replace />;

  const related = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <div className={styles.page}>
      <div className={styles.backBar}>
        <div className="container">
          <Link to="/blogs-media" className={styles.back}>
            ← Back to Blogs
          </Link>
        </div>
      </div>

      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroCont}>
            <span className={styles.category}>{blog.category}</span>
            <h1 className={styles.title}>{blog.title}</h1>
            <div className={styles.meta}>
              <span className={styles.author}>{blog.author}</span>
              <span className={styles.dot}>·</span>
              <span className={styles.date}>{blog.date}</span>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.featuredImage}>
        <div className="container">
          <img src={blog.image} alt={blog.title} />
        </div>
      </div>

      <section className={styles.content}>
        <div className={styles.prose}>
          {blog.content.map((block, i) => (
            <ContentBlock key={i} block={block} index={i} />
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className={styles.related}>
          <div className="container">
            <h2 className={styles.relatedTitle}>More Articles</h2>
            <div className={styles.relatedGrid}>
              {related.map((b) => (
                <Link
                  to={`/blogs-media/${b.id}`}
                  key={b.id}
                  className={styles.relatedCard}
                >
                  <div className={styles.relatedImg}>
                    <img src={b.image} alt={b.title} loading="lazy" />
                  </div>
                  <div className={styles.relatedBody}>
                    <span className={styles.relatedCat}>{b.category}</span>
                    <h4 className={styles.relatedCardTitle}>{b.title}</h4>
                    <span className={styles.relatedDate}>{b.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetail;
