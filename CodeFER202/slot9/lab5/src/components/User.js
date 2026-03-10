import { useEffect, useState } from "react";
import { fetchUsers } from "../api/api";
import "./User.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError("❌ Không thể tải danh sách người dùng. Kiểm tra kết nối mạng!");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  // ⏳ Loading
  if (loading) {
    return <p style={{ textAlign: "center" }}>⏳ Đang tải users...</p>;
  }

  // ❌ Mất mạng / lỗi API
  if (error) {
    return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;
  }

  return (
    <div className="page">
      <h2>👥 Users</h2>

      {users.length === 0 && <p>Không có dữ liệu</p>}

      {users.map(user => (
        <div className="user-card" key={user.id}>
          <h4>{user.name}</h4>
          <p>📧 {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;
