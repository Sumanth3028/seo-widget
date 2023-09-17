import React from "react";

const Data = (props) => {
  let result = localStorage.getItem("data");

  let response = JSON.parse(result);

  console.log(response);

  return (
    <div>
      <div className=" ml-[620px] my-24 h-[200px] ">
        <h1 className="text-xl">Results for {response?.data.tasks[0]?.data?.url}</h1>

        <div className="h-[210px] w-[210px] flex justify-center items-center bg-[#6DD29F] mx-5 my-7   rounded-full border-3">
          <div className="h-[180px] w-[180px] flex flex-col rounded-full justify-center items-center bg-white border border-gray-500">
            <h1 className="font-bold text-5xl">
              {response?.data.tasks[0]?.result[0]?.items[0]?.onpage_score}
            </h1>
            <h1 className="font-bold text-2xl italic text-[#6DD29F] font-Helvetica">
              {" "}
              OnPage Score
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-full mx-auto   px-[250px] mb-[100px] ">
        <h1 className="text-2xl mb-6">Onpage Results:</h1>
        <div className="grid grid-cols-4 gap-x-5 gap-y-5 ">
          <div className="w-[200px] h-[110px] rounded-md border-2  flex flex-col items-center justify-center">
            <h1 className="text-2xl  font-bold ">
              {
                response?.data.tasks[0]?.result[0]?.items[0]?.meta
                  ?.internal_links_count
              }
            </h1>
            <h1 className=" text-xl">Internal Links</h1>
          </div>
          <div className="w-[200px] h-[110px] rounded-md border-2  flex flex-col items-center justify-center">
            <h1 className="text-2xl  font-bold ">
              {response?.data.tasks[0]?.result[0]?.items[0]?.encoded_size}
            </h1>
            <h1 className=" text-xl">Encoded Size</h1>
          </div>
          <div className="w-[200px] h-[110px] rounded-md border-2  flex flex-col items-center justify-center">
            <h1 className="text-2xl  font-bold ">
              {
                response?.data.tasks[0]?.result[0]?.items[0]?.meta?.content
                  ?.plain_text_size
              }
            </h1>
            <h1 className=" text-xl">Plain Text Size</h1>
          </div>
          <div className="w-[200px] h-[110px] rounded-md border-2  flex flex-col items-center justify-center">
            <h1 className="text-2xl  font-bold ">
              {response?.data.tasks[0]?.result[0]?.items[0]?.meta?.content?.plain_text_rate.toFixed(
                2
              )}
            </h1>
            <h1 className=" text-xl">Plain Text Rate</h1>
          </div>
          <div className="w-[200px] h-[110px] rounded-md border-2  flex flex-col items-center justify-center">
            <h1 className="text-2xl  font-bold ">
              {
                response?.data.tasks[0]?.result[0]?.items[0]?.meta?.content
                  ?.plain_text_word_count
              }
            </h1>
            <h1 className=" text-xl">Plain Text Word </h1>
          </div>
          <div className="w-[200px] h-[110px] rounded-md border-2  flex flex-col items-center justify-center">
            <h1 className="text-2xl  font-bold ">
              {response?.data.tasks[0]?.result[0]?.items[0]?.meta?.content?.automated_readability_index.toFixed(
                2
              )}
            </h1>
            <h1 className=" text-xl">Automated Index</h1>
          </div>
          <div className="w-[200px] h-[110px] rounded-md border-2  flex flex-col items-center justify-center">
            <h1 className="text-2xl  font-bold ">
              {response?.data.tasks[0]?.result[0]?.items[0]?.meta?.content?.coleman_liau_readability_index.toFixed(
                2
              )}
            </h1>
            <h1 className=" text-xl">Liau Index</h1>
          </div>
          <div className="w-[200px] h-[110px] rounded-md border-2  flex flex-col items-center justify-center">
            <h1 className="text-2xl  font-bold ">
              {response?.data.tasks[0]?.result[0]?.items[0]?.meta?.content?.dale_chall_readability_index.toFixed(
                2
              )}
            </h1>
            <h1 className=" text-xl">Dale Index</h1>
          </div>
          <div className="w-[200px] h-[110px] rounded-md border-2  flex flex-col items-center justify-center">
            <h1 className="text-2xl  font-bold ">
              {response?.data.tasks[0]?.result[0]?.items[0]?.meta?.content?.description_to_content_consistency.toFixed(
                2
              )}
            </h1>
            <h1 className=" text-xl">Description </h1>
          </div>
          <div className="w-[200px] h-[110px] rounded-md border-2  flex flex-col items-center justify-center">
            <h1 className="text-2xl  font-bold ">
              {response?.data.tasks[0]?.result[0]?.items[0]?.meta?.content?.flesch_kincaid_readability_index.toFixed(
                2
              )}
            </h1>
            <h1 className=" text-xl">Flesch Kincaid index</h1>
          </div>
        </div>
      </div>
      <div className="w-full h-screen mx-auto  px-[250px]">
        <h1 className="text-xl mb-6">Speed Insights:</h1>
        <div className="grid grid-cols-3 gap-x-10 gap-y-5">
          <div className="w-[300px] h-[110px] rounded-md border-2  bg-gray-200 flex flex-col items-center justify-center">
            <h1 className="text-2xl  font-bold ">
              {
                response?.data.tasks[0]?.result[0]?.items[0]?.page_timing
                  .time_to_secure_connection
              }
            </h1>
            <h1 className=" text-xl">Time to Secure Connection</h1>
          </div>
          <div className="w-[300px] h-[110px] rounded-md border-2  bg-gray-200 flex flex-col items-center justify-center">
            <h1 className="text-2xl  font-bold ">
              {
                response?.data.tasks[0]?.result[0]?.items[0]?.page_timing
                  .waiting_time
              }
            </h1>
            <h1 className=" text-xl">Waiting Time</h1>
          </div>
          <div className="w-[300px] h-[110px] rounded-md border-2  bg-gray-200 flex flex-col items-center justify-center">
            <h1 className="text-2xl  font-bold ">
              {
                response?.data.tasks[0]?.result[0]?.items[0]?.page_timing
                  .download_time
              }
            </h1>
            <h1 className=" text-xl">Download Time</h1>
          </div>
          <div className="w-[300px] h-[110px] rounded-md border-2  bg-gray-200 flex flex-col items-center justify-center">
            <h1 className="text-2xl  font-bold ">
              {
                response?.data.tasks[0]?.result[0]?.items[0]?.page_timing
                  .time_to_interactive
              }
            </h1>
            <h1 className=" text-xl">Time to Interactive</h1>
          </div>
          <div className="w-[300px] h-[110px] rounded-md border-2  bg-gray-200 flex flex-col items-center justify-center">
            <h1 className="text-2xl  font-bold ">
              {
                response?.data.tasks[0]?.result[0]?.items[0]?.page_timing
                  .dom_complete
              }
            </h1>
            <h1 className=" text-xl">DOM Complete</h1>
          </div>
          <div className="w-[300px] h-[110px] rounded-md border-2  bg-gray-200 flex flex-col items-center justify-center">
            <h1 className="text-2xl  font-bold ">
              {
                response?.data.tasks[0]?.result[0]?.items[0]?.page_timing
                  .largest_contentful_paint
              }
            </h1>
            <h1 className=" text-xl">Largest Contentful Paint</h1>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Data;
