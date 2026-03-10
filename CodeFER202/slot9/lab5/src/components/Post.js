import { useEffect, useState } from "react";
import { fetchPosts } from "../api/api";
import "./Post.css";

function Post() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        setError("❌ Không thể tải dữ liệu. Vui lòng kiểm tra kết nối mạng!");
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  // ⏳ Đang tải
  if (loading) {
    return <p style={{ textAlign: "center" }}>⏳ Đang tải bài viết...</p>;
  }

  // ❌ Lỗi / mất mạng
  if (error) {
    return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;
  }

  return (
    <div className="page">
      <h2>📝 Posts</h2>

      {posts.length === 0 && <p>Không có bài viết</p>}

      {posts.slice(0, 10).map(post => (
        <div className="post-card" key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Post;
