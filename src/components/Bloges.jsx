import { useEffect, useState } from "react";
import Blog from "./Blog";
import BookMark from "./BookMark";

const Blogs = () => {
  const [bookMark, setBookMark] = useState([]);
  let [markReed, setMarkReed] = useState(0);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("dummyData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  const handleClick = (Blog) => {
    const newBookMark = [...bookMark, Blog];
    setBookMark(newBookMark);
  };
  const handleReed = (Blog) => {
    const newMarkReed = Blog.reading_time;
    markReed = newMarkReed + markReed;
    setMarkReed(markReed);
  };
  return (
    <div>
      <div className="flex justify-between gap-7 mt-6">
        <div className="w-2/3">
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              blog={blog}
              handleClick={handleClick}
              handleReed={handleReed}
            ></Blog>
          ))}
        </div>
        <div className="w-1/3 ">
          <BookMark bookMark={bookMark} markReed={markReed}></BookMark>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
