const BookMark = ({ bookMark, markReed }) => {
  return (
    <div>
      <div className="bg-[#111111] bg-opacity-5 rounded-md p-5 mb-6">
        <h1 className="bg-white mt-3 p-3 rounded-md text-xl font-bold text-purple-700">
          Spent time on read :{markReed} min
        </h1>
      </div>
      <div className=" bg-[#111111] bg-opacity-5 rounded-md p-5">
        <h1 className="text-2xl font-bold">
          Bookmarked Blogs :{bookMark.length}
        </h1>
        <div>
          {bookMark.map((item, idx) => (
            <div
              key={idx}
              className="bg-white mt-3 p-3 rounded-md h-16 flex justify-evenly items-center gap-3"
            >
              <img className="w-11" src={item.author_img}></img>
              <h1>{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookMark;
