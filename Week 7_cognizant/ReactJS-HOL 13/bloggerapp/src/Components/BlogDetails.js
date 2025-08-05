import React from 'react';

function BlogDetails({ show }) {
  if (!show) return null; // Conditional rendering

  return (
    <div className="v1">
      <h1>Blog Details</h1>
      <h3>React Learning</h3>
      <h4>Stephen Biz</h4>
      <p>Welcome to learning React!</p>
      <h3>Installation</h3>
      <h4>Schewzdenier</h4>
      <p>You can install React from npm.</p>
    </div>
  );
}

export default BlogDetails;
