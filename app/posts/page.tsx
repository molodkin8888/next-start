'use client';

import { NextPage } from 'next';
import { fetchInstance } from '@/api/config';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface IPosts {
  id: number;
  userId: number;
  title: string;
}

const Posts: NextPage = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetchInstance('/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <p key={post.id}>
            <Link href={`/posts/${post.id}`} key={post.id}>
              {post.title}
            </Link>
          </p>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
