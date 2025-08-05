import React from 'react';

const courseList = [
  { id: 1, name: "Angular", date: "6/3/20201" },
  { id: 2, name: "React", date: "6/3/20201" },
];

function CourseDetails({ show }) {
  if (!show) return null;

  return (
    <div className="mystyle1">
      <h1>Course Details</h1>
      {courseList.map(course => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
