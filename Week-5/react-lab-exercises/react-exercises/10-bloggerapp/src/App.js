import React, { useState } from 'react';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';

function App() {
  const [selection, setSelection] = useState('book');
  const [showCourse, setShowCourse] = useState(true);

  // Technique 1: if/else statement (as a helper function)
  const renderWithIfElse = () => {
    if (selection === 'book') {
      return <BookDetails />;
    } else if (selection === 'blog') {
      return <BlogDetails />;
    } else {
      return <CourseDetails />;
    }
  };

  // Technique 2: element variable
  let elementVariable;
  if (selection === 'book') {
    elementVariable = <BookDetails />;
  } else if (selection === 'blog') {
    elementVariable = <BlogDetails />;
  } else {
    elementVariable = <CourseDetails />;
  }

  // Technique 3: ternary operator
  const ternaryElement = selection === 'book' ? <BookDetails /> : <BlogDetails />;

  // Technique 4: switch statement
  const renderWithSwitch = () => {
    switch (selection) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      case 'course':
        return <CourseDetails />;
      default:
        return <p>Please select a category</p>;
    }
  };

  return (
    <div>
      <h1>Blogger App</h1>

      <button onClick={() => setSelection('book')}>Show Book</button>
      <button onClick={() => setSelection('blog')}>Show Blog</button>
      <button onClick={() => setSelection('course')}>Show Course</button>
      <button onClick={() => setShowCourse(!showCourse)}>
        Toggle Course Section (&amp;&amp; operator)
      </button>

      <h3>1. Conditional rendering with if/else</h3>
      {renderWithIfElse()}

      <h3>2. Conditional rendering with element variable</h3>
      {elementVariable}

      <h3>3. Conditional rendering with ternary operator</h3>
      {ternaryElement}

      <h3>4. Conditional rendering with switch statement</h3>
      {renderWithSwitch()}

      <h3>5. Conditional rendering with logical &amp;&amp; operator</h3>
      {showCourse && <CourseDetails />}
    </div>
  );
}

export default App;
