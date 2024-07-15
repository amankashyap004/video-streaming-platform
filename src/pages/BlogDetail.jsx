import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { WiTime8 } from "react-icons/wi";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch("/mockData/blogData.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      const foundBlog = jsonData.find((post) => post.slug === slug);
      setBlog(foundBlog);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [slug]);

  return (
    <div className="container px-4 lg:px-20 flex justify-center items-center">
      {blog?.slug ? (
        <div className="flex flex-col justify-start items-start gap-4 lg:gap-8">
          <div className="flex justify-center items-center gap-2 font-semibold">
            <Link to={"/"}>Home</Link>
            <p>&gt;</p>
            <Link to={"/blog"}>Blogs</Link>
            <p>&gt;</p>
            <p className="opacity-60 line-clamp-1">
              {blog?.slug?.split("-").slice(0, 3).join("-")}...
            </p>
          </div>
          <section className="flex flex-col justify-start items-start gap-4 w-full">
            <div className="space-y-2">
              <p className="text-xl lg:text-3xl font-semibold">{blog?.title}</p>
              <p className="flex justify-start items-center gap-1 opacity-50">
                <span className="text-lg">
                  <WiTime8 />
                </span>
                <span className="text-sm">{blog?.date}</span>
              </p>
            </div>
            <div className="space-y-2">
              <p>{blog?.dissertation}</p>
              <div className="space-y-2">
                {blog?.content.map((paragraph, index) => (
                  <p key={index} className="">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      ) : (
        <section className="flex justify-center items-center w-full h-[80dvh]">
          <div className="flex flex-col justify-center items-center w-full gap-2 p-4">
            <p className="text-2xl font-bold text-center">
              Oops! Blog not found.
            </p>
            <div className="flex flex-col justify-center items-center w-full text-center text-lg">
              <p className="">Check out our blog collection.</p>
              <Link to="/blog" className="text-pink-500 underline font-bold">
                Here
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetailPage;
