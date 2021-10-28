import { FC } from "react";
import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
}

const PostItem: FC<PostItemProps> = ({ post: post }) => {
  return (
    <div>
      {post.id}. {post.title}
      <button>Delete</button>
    </div>
  );
};

export default PostItem;
