import { GetServerSideProps } from 'next';
import { NextPage } from 'next';
import { fetchInstance } from '@/api/config';

interface PostProps {
  post: {
    title: string;
    id: number;
  };
}

const Post: NextPage<PostProps> = ({ post }) => {
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.id}</p>
    </div>
  );
};

export default Post;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const { postId } = params;

  const response = await fetchInstance(`/posts/${postId}`, {
    cache: 'force-cache',
  });
  const post = await response.json();

  return {
    props: {
      post,
    },
  };
};
