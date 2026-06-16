import { useState, useEffect } from 'react';

let cache = null;

export const useBlogs = () => {
  const [blogs, setBlogs] = useState(cache || []);
  const [loading, setLoading] = useState(!cache);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cache) return;

    fetch('/blogs.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load blogs');
        return res.json();
      })
      .then((data) => {
        cache = data;
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { blogs, loading, error };
};
