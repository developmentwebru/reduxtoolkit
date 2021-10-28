import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(5);
  return (
    <div>
      {isLoading && <h1>Идет загрузка</h1>}
      {error && <h1>Произошла ошибка при загрузке</h1>}
      {posts && posts.map((post) => <PostItem post={post} key={post.id} />)}
    </div>
  );
};

export default PostContainer;
