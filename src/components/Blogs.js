import React from "react";

const Blogs = ({ blogs }) => {
  return (
    <div className="w-full bg-white mt-36 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title Section */}
        <div className="text-left mb-4">
          <div className="text-[18px] font-medium text-black">Our Blog</div>
          <div className="text-[30px] font-bold text-black">Latest</div>
        </div>

        {/* Blog Content */}
        <div className="w-full flex justify-between">
          {/* First Column */}
          <div className="flex flex-col space-y-4">
            {blogs.slice(0, 2).map((blog, index) => (
              <div
                key={index}
                className="relative"
                style={{ width: "352px", height: "200px" }}
              >
                <img
                  src={blog.featuredImage.node.sourceUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                  <p className="text-white text-sm mb-3">
                    {new Date(blog.date).toLocaleDateString("en-GB")}
                  </p>
                  <h3 className="text-white text-lg font-bold">{blog.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Column (Single Large Image) */}
          <div className="mx-4">
            <div
              className="relative"
              style={{ width: "466px", height: "420px" }}
            >
              <img
                src={blogs[2].featuredImage.node.sourceUrl}
                alt={blogs[2].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <p className="text-white text-sm mb-3">
                  {new Date(blogs[2].date).toLocaleDateString("en-GB")}
                </p>
                <h3 className="text-white text-xl font-bold mb-4">
                  {blogs[2].title}
                </h3>

                <button className="w-[108px] h-[38px] bg-white rounded-[20px] text-[#00C1DE] font-semibold">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div className="flex flex-col space-y-4">
            {blogs.slice(3, 5).map((blog, index) => (
              <div
                key={index}
                className="relative"
                style={{ width: "352px", height: "200px" }}
              >
                <img
                  src={blog.featuredImage.node.sourceUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                  <p className="text-white text-sm mb-3">
                    {new Date(blog.date).toLocaleDateString("en-GB")}
                  </p>
                  <h3 className="text-white text-lg font-bold">{blog.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
