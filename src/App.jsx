import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import BlogPost from './components/BlogPost';
import { fetchBlogPosts } from './api/blogData';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [activePostId, setActivePostId] = useState(null);
  const [isManualScroll, setIsManualScroll] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    fetchBlogPosts().then((data) => {
      setPosts(data);
      setActivePostId(data[0]?.id || null);
    });
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current || isManualScroll) return;
      const sections = posts.map(post => document.getElementById(`post-${post.id}`));
      const scrollPosition = contentRef.current.scrollTop;

      let currentId = activePostId;
      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPosition + 10) {
          currentId = parseInt(section.id.replace('post-', ''));
        }
      });
      setActivePostId(currentId);
    };

    const contentDiv = contentRef.current;
    if (contentDiv) {
      contentDiv.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (contentDiv) {
        contentDiv.removeEventListener('scroll', handleScroll);
      }
    };
  }, [posts, activePostId, isManualScroll]);

  const handleSelectPost = (id) => {
    setIsManualScroll(true);
    const element = document.getElementById(`post-${id}`);
    if (element && contentRef.current) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActivePostId(id);
    setTimeout(() => setIsManualScroll(false), 500);
  };

  return (
    <div className="app">
      <Sidebar posts={posts} onSelectPost={handleSelectPost} activePostId={activePostId} />
      <div className="content" ref={contentRef}>
        {posts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
      <div className="empty-sidebar"></div>
    </div>
  );
}

export default App;














// import React, { useState, useEffect, useRef } from 'react';
// import Sidebar from './components/Sidebar';
// import BlogPost from './components/BlogPost';
// import { fetchBlogPosts } from './api/blogData';
// import './styles/App.css';

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [activePostId, setActivePostId] = useState(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     fetchBlogPosts().then((data) => {
//       setPosts(data);
//       setActivePostId(data[0]?.id || null);
//     });
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!contentRef.current) return;
//       const sections = posts.map(post => document.getElementById(`post-${post.id}`));
//       const scrollPosition = contentRef.current.scrollTop;

//       let currentId = activePostId;
//       sections.forEach(section => {
//         if (section && section.offsetTop <= scrollPosition + 10) {
//           currentId = parseInt(section.id.replace('post-', ''));
//         }
//       });
//       setActivePostId(currentId);
//     };

//     const contentDiv = contentRef.current;
//     if (contentDiv) {
//       contentDiv.addEventListener('scroll', handleScroll);
//     }
//     return () => {
//       if (contentDiv) {
//         contentDiv.removeEventListener('scroll', handleScroll);
//       }
//     };
//   }, [posts, activePostId]);

//   const handleSelectPost = (id) => {
//     const element = document.getElementById(`post-${id}`);
//     if (element && contentRef.current) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setActivePostId(id);
//   };

//   return (
//     <div className="app">
//       <Sidebar posts={posts} onSelectPost={handleSelectPost} activePostId={activePostId} />
//       <div className="content" ref={contentRef}>
//         {posts.map(post => (
//           <BlogPost key={post.id} post={post} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;




// import React, { useState, useEffect, useRef } from 'react';
// import Sidebar from './components/Sidebar';
// import BlogPost from './components/BlogPost';
// import { fetchBlogPosts } from './api/blogData';
// import './styles/App.css';

// function App() {
//   const [posts, setPosts] = useState([]);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     fetchBlogPosts().then((data) => {
//       setPosts(data);
//     });
//   }, []);

//   const handleSelectPost = (id) => {
//     const element = document.getElementById(`post-${id}`);
//     if (element && contentRef.current) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="app">
//       <Sidebar posts={posts} onSelectPost={handleSelectPost} />
//       <div className="content" ref={contentRef}>
//         {posts.map(post => (
//           <BlogPost key={post.id} post={post} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;












