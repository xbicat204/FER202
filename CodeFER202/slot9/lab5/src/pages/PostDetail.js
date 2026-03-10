import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPostById, fetchUserById } from "../api/api";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const postData = await fetchPostById(id);
      setPost(postData);

      const userData = await fetchUserById(postData.userId);
      setUser(userData);
    };
    loadData();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="page">
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      {user && (
        <>
          <hr />
          <p>👤 {user.name}</p>
          <p>{user.email}</p>
        </>
      )}

      <Link to="/posts">← Back</Link>
    </div>
  );
}

export default PostDetail;
