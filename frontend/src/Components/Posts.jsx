import React from "react";
import { articles, courses , projects} from "../assets/constants";
import { code} from "../assets/images";
const Posts = () => {
  return (
    <div className="">
      <div className="md:flex justify-between">
        <div className="bg-white md:w-3/4 rounded-2xl">
          {articles.map((article) => (
            <div className="p-4 md:border-none border-b-2 border-gray-400">
              <div className="md:flex justify-between">
                <div className="ml-4">
                  <div className="bg-[#0085FF1F] align-middle flex gap-4 px-1 rounded-full w-fit">
                    <img
                      src={article.authorimg}
                      alt="Article Image"
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="text-neutral-700 text-sm md:text-[15px] py-2 font-semibold">
                      {article.author}
                      <span className="text-center mx-4 text-sky-600 text-sm md:text-[12px] font-bold uppercase">
                        ALUMNI
                      </span>
                    </div>
                  </div>

                  {/* Article Title */}
                  <div className="font-medium my-1 text-gray-500 text-sm md:text-xl">
                    {article.title}
                  </div>

                  {/* Article Author */}
                  <div className="text-sm text-gray-500">
                    {article.description}
                  </div>
                </div>
                <div className="mx-4">
                  {/* Add margin-bottom to the post image */}
                  <img
                    src={article.postimage}
                    className="md:w-[200px] w-full h-full md:h-[120px] rounded-none md:rounded-2xl mb-4"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-1/4 my-6 md:my-0 mx-4 text-center">
          <div>
            <div class="text-gray-600 text-base font-normal">
              Recommended Courses
            </div>
            <div className="bg-white text-left rounded-3xl my-4 px-4 py-2">
              {courses.map((course) => (
                <div className="flex mx-4 my-2 justify-between">
                  <img
                    src={course.courseimg}
                    alt="Course Image"
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="text-sky-600 text-lg mx-4 text-left font-medium hover:text-sky-800 hover:underline cursor-pointer">
                    {course.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div class="text-gray-600 text-base font-normal">
              Recommended Projects
            </div>
            <div className="bg-white rounded-3xl my-4 px-4 py-2">
              {projects.map((project) => (
                <div className="flex mx-2 my-2">
                  <img
                    src={code}
                    alt="Course Image"
                    className="h-16 w-16 rounded-full"
                  />
                  <div className="md:mx-2">
                    <div className="text-sky-600 text-left text-lg mx-4 font-medium hover:text-sky-800 hover:underline cursor-pointer">
                      {project.title}
                    </div>
                    <div className="text-s mx-4 text-left font-medium">
                    {project.tag.split(", ").map((word, index) => (
                      <span key={index} className="px-1 py-1 mx-1 rounded-lg bg-gray-300 text-gray-500 text-s">
                        {word}
                      </span>
                    ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
