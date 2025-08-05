import React, { useState } from 'react';
import BlogDetails from './Components/BlogDetails';
import BookDetails from './Components/BookDetails';
import CourseDetails from './Components/CourseDetails';


function App() {
  const [showBlog, setShowBlog] = useState(true);
  const [showCourse, setShowCourse] = useState(true);

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => setShowBlog(!showBlog)}>
        {showBlog ? "Hide Blog" : "Show Blog"}
      </button>
      <button onClick={() => setShowCourse(!showCourse)}>
        {showCourse ? "Hide Course" : "Show Course"}
      </button>

      <BookDetails />
      <BlogDetails show={showBlog} />
      <CourseDetails show={showCourse} />
    </div>
  );
}

export default App;
