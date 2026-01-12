import "./About.css";

function About() {
  const student = {
    id: 1,
    name: "Tong Phuc Khiem",
    avatar: "/idol.jpg",
    age: 21,
    grade: "Đại học"
  };

  return (
    <div className="about-container">
      <h1 className="about-title">Đây là trang About của tôi</h1>

      <div className="avatar-wrapper">
        <img
          src={student.avatar}
          alt="Avatar"
          className="avatar-img"
        />
      </div>

      <div className="info">
        <p><b>ID:</b> {student.id}</p>
        <p><b>Tên:</b> {student.name}</p>
        <p><b>Tuổi:</b> {student.age}</p>
        <p><b>Lớp:</b> {student.grade}</p>
      </div>
    </div>
  );
}

export default About;
