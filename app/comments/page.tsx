'use client';

import { NextPage } from 'next';
import { fetchInstance } from '@/api/config';
import { useEffect, useState } from 'react';

interface Comment {
  id: number;
  name: string;
}

const Comments: NextPage = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetchInstance('/comments');
      const data = await response.json();
      setComments(data);
    };

    fetchComments();
  }, []);

  return (
    <div>
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
