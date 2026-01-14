import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import StudentData from "../data/StudentData";

function StudentList() {
  const handleViewProfile = (student) => {
    alert(
      `Name: ${student.name}\nAge: ${student.age}\nMajor: ${student.major}\nGPA: ${student.gpa}`
    );
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {StudentData.map((student) => (
          <div className="col-md-3 mb-4" key={student.id}>
            <Card className="student-card">
              <Card.Img
                variant="top"
                src={student.avatar}
                className="student-img"
              />
              <Card.Body>
                <Card.Title className="text-center">
                  {student.name}
                </Card.Title>

                <Card.Text>
                  Age: {student.age} <br />
                  Major: {student.major} <br />
                  GPA: {student.gpa}
                </Card.Text>

                {/* BUTTON ĐÃ FIX */}
                <Button
                  className="student-btn"
                  onClick={() => handleViewProfile(student)}
                >
                  View Profile
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentList;
