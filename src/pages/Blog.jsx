import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { WiTime8 } from "react-icons/wi";

const Blog = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("./mockData/blogData.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData()
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(data);

  return (
    <div className="w-full">
      <div className="container px-4 lg:px-20 flex flex-col justify-center items-center gap-8 lg:gap-16">
        <FeaturePost data={data[0]} />
        <AllPost data={data} />
      </div>
    </div>
  );
};

export default Blog;

const FeaturePost = ({ data }) => {
  return (
    <div className="">
      <Link
        to={`/blog/${data?.slug}`}
        className="flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-8 w-full"
      >
        <div className="flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-8 w-full">
          <div className="lg:hidden space-y-2">
            <p className=" text-xl lg:text-3xl font-semibold line-clamp-2">
              {data?.title}
            </p>
            <p className="flex justify-start items-center gap-1 opacity-50">
              <span className="text-lg">
                <WiTime8 />
              </span>
              <span className="text-sm">{data?.date}</span>
            </p>
          </div>
          <div className="w-full lg:w-1/2 h-52 lg:h-80 rounded-md">
            <img
              src={data?.image}
              alt=""
              className="object-cover w-full rounded-md"
            />
          </div>
          <div className="flex flex-col justify-start items-start w-full gap-4 lg:w-1/2">
            <div className="hidden lg:block space-y-2">
              <p className="text-xl lg:text-3xl font-semibold line-clamp-2">
                {data?.title}
              </p>
              <p className="flex justify-start items-center gap-1 opacity-50">
                <span className="text-lg">
                  <WiTime8 />
                </span>
                <span className="text-sm">{data?.date}</span>
              </p>
            </div>
            <div className="w-full space-y-4">
              <p className="lg:line-clamp-3">{data?.dissertation}</p>
              <p className="line-clamp-1 lg:line-clamp-2">{data?.content[0]}</p>
            </div>
            <div className="flex justify-start items-center w-full">
              <button className="bg-gradient-to-l from-pink-600 to-pink-900 rounded-full px-6 py-2 text-white font-semibold">
                Read More
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const AllPost = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-8 lg:gap-12">
      <section className="bg-red-600/20 backdrop-blur-lg py-2 lg:py-3 px-2 rounded-md w-full">
        <div className="flex justify-center items-center w-full">
          <p className="text-2xl lg:text-3xl font-semibold">ALL BLOGS</p>
        </div>
      </section>

      <section className="flex justify-center items-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 w-full h-full">
          {data?.map((post, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-full h-full"
            >
              <Link
                to={`/blog/${post?.slug}`}
                className="flex justify-center items-center w-full h-full"
              >
                <div className="text-black rounded-lg shadow-xl hover:-translate-y-1 duration-200 w-full h-full  bg-gradient-to-t from-[#F79BD3] to-[#FACBEA] hover:from-[#FACBEA] hover:to-[#F79BD3]">
                  <div className="rounded-t-lg w-full h-48 lg:h-60">
                    <img
                      src={post?.image}
                      alt=""
                      className="object-cover w-full h-full rounded-md"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start p-3">
                    <p className="text-lg lg:text-xl font-semibold line-clamp-2 lg:line-clamp-2">
                      {post?.title}
                    </p>
                    <p className="flex justify-start items-center gap-1 opacity-50">
                      <span className="text-lg">
                        <WiTime8 />
                      </span>
                      <span className="text-sm">{post?.date}</span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
