// import React from 'react';
// import '../styles/App.css';

// const BlogPost = ({ post }) => {
//   if (!post) {
//     return <div className="content">Select a blog to view content.</div>;
//   }

//   return (
//     <div className="content">
//       <div className="images-container">
//         {post.images.map((img, index) => (
//           <img key={index} src={img} alt={`Blog visual ${index + 1}`} className="blog-image" />
//         ))}
//       </div>
//       <p className="description">{post.description}</p>
//     </div>
//   );
// };

// export default BlogPost;







import React from 'react';
import '../styles/App.css';

const BlogPost = ({ post }) => {
  if (!post) {
    return null;
  }

  return (
    <div id={`post-${post.id}`} className="blog-post">
      <div className="images-container">
        {post.images.map((img, index) => (
          <img key={index} src={img} alt={`Blog visual ${index + 1}`} className="blog-image" />
        ))}
      </div>
      <h2 className="title-heading">{post.titleHeading}</h2>
      <p className="description">{post.description}</p>
    </div>
  );
};
export default BlogPost;