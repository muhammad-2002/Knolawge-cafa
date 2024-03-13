import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, handleClick, handleReed }) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="space-y-3 mb-6 ">
      <img className="w-full" src={cover} alt={`the blog is ${title}`} />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div>
            <img className="w-12" src={author_img}></img>
          </div>
          <div>
            <h1 className="font-extrabold ">{author}</h1>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <p className=" font-bold flex justify-center items-center gap-2">
            {`${reading_time} min read`}
            <span
              onClick={() => handleClick(blog)}
              className="inline-block text-xl cursor-pointer"
            >
              <CiBookmark />
            </span>
          </p>
        </div>
      </div>
      <h1 className="text-2xl font-extrabold">{title}</h1>
      <p>{hashtags.map((tag) => `#${tag} ${" "}`)}</p>

      <p onClick={() => handleReed(blog)} className="underline text-blue-700">
        Mark as Read
      </p>
    </div>
  );
};

export default Blog;
