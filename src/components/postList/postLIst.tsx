import React, { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

interface PostLIstProps {}
const pages = [1, 2, 3, 4, 5];

const PostLIst: React.FC<PostLIstProps> = () => {
  const { error, limit, loading, page, posts } = useTypedSelector(
    (state) => state.post
  );
  const { fetchPosts, setPagePost } = useActions();
  useEffect(() => {
    fetchPosts(page, limit);
  }, [page]);

  if (loading) {
    return <div>Loading... posts</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            {post.id}- {post.title}
          </div>
        ))}
      <div style={{ display: "flex" }}>
        {pages.map((p, idx) => (
          <div
            onClick={() => setPagePost(p)}
            style={{
              border: p === page ? "1px solid yellow" : "",
              padding: "15px",
              cursor: "pointer",
            }}
            key={idx}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostLIst;
