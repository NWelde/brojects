
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './YourCustomStyleSheet.module.css'; // Import your custom CSS module

const ScrollablePage = () => {
  return (
    <div className="container my-4">
      <div className="scrollable-content" style={{height: '500px', overflowY: 'scroll'}}>
        <h1>Scrollable Page</h1>
        <p>Content goes here...</p>
        {/* Add more content here to make the page scrollable */}
      </div>
    </div>
  );
};

export default ScrollablePage;