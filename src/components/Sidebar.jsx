import React from 'react';
import '../styles/App.css';

const Sidebar = ({ posts, onSelectPost, activePostId }) => {
  return (
    <div className="sidebar">
    <div className="sidebar-header">
      <h2>Be the first to know</h2>
      <p>Get the latest news and updates from the world of AI and technology.</p>
    </div>
      {posts.map((post) => (
        <div
          key={post.id}
          className={`sidebar-item ${activePostId === post.id ? 'active' : ''}`}
          onClick={() => onSelectPost(post.id)}
        >
          {post.title}
        </div>
      ))}
      <div className="sidebar-social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="Twitter" className="social-icon" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" className="social-icon" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;






// import React from 'react';
// import '../styles/App.css';

// const Sidebar = ({ posts, onSelectPost, activePostId }) => {
//   return (
//     <div className="sidebar">
//       {posts.map((post) => (
//         <div
//           key={post.id}
//           className={`sidebar-item ${activePostId === post.id ? 'active' : ''}`}
//           onClick={() => onSelectPost(post.id)}
//         >
//           {post.title}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Sidebar;