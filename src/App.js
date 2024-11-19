import './App.css';

import CoursesData from './coursesData';

function App() {
  const parentStyle = {
    height: '100%',
  }
  const containerStyle = {
    width: '100%',
    paddingTop: '1rem',
    paddingBottom: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const titleContainerStyle = {
    background: 'linear-gradient(#a8edea, 135deg, #fed6e3)',
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    width: '50%',
    position: 'relative',
    textAlign: 'center',
    overflow: 'hidden',
  };

  const courseTitleStyle = {
    fontFamily: 'Fjalla One, Arial',
    fontSize: '5rem',
    padding: '10px',
    position: 'relative',
    zIndex: '20',
  };

  const subHeadingStyle = {
    textAlign: 'center',
    marginBottom: '1rem',
  }
  return (

    <div style={parentStyle}>
      <div style={containerStyle}>
        <div style={titleContainerStyle}>
          <h1 className="main-title" style={courseTitleStyle}>
            Learning Management System<br />
          </h1>
        </div>
      </div>
      <div style={subHeadingStyle}>
        <h1>Available courses list</h1>
      </div>
      <CoursesData />
    </div>
  );
}
export default App;
