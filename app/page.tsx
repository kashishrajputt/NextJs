import { useState} from "react";

export default function Blogs()
{
    const [blogs, setBlogs] = useState([
        {
            id : 1,
            title : "Blog Title 1",
            description : "Blog 1 Excerpt",
            slug : "blog-1"
        },
        {
            id : 2,
            title : "Blog Title 2",
            description : "Blog 2 Excerpt",
            slug : "blog-2"
        },
        {
            id : 3,
            title : "Blog Title 3",
            description : "Blog 3 Excerpt",
            slug : "blog-3"
        },
    ]);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
}