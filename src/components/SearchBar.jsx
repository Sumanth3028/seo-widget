import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchBar = (props) => {
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  const handleData = async (e) => {
    e.preventDefault();

    const post_array = [];
    let response;

    post_array.push({
      url: url,
      enable_javascript: true,
      custom_js: "meta = {}; meta.url = document.URL; meta;",
    });
    axios({
      method: "post",
      url: "https://api.dataforseo.com/v3/on_page/instant_pages",
      auth: {
        username: "surajbahadur58@gmail.com",
        password: "3d7163a7924fb861",
      },
      data: post_array,
      headers: {
        "content-type": "application/json",
      },
    })
      .then(function (response) {
        var result = response["data"]["tasks"];
        // Result data
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });

    // try {
    //   post_array.push({
    //     target: url,
    //     max_crawl_pages: 10,
    //     load_resources: true,
    //     enable_javascript: true,
    //     custom_js: "meta = {}; meta.url = document.URL; meta;",
    //     tag: "some_string_123",
    //   });

    //   response = await axios({
    //     method: "post",
    //     url: "https://api.dataforseo.com/v3/on_page/task_post",
    //     auth: {
    //       username: "surajbahadur58@gmail.com",
    //       password: "3d7163a7924fb861",
    //     },
    //     data: post_array,
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //   });

    //   const taskId = response?.data?.tasks[0]?.id;
    //   if (taskId) {
    //     navigate(`/data?data=${taskId}`);
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div>
      <form className="flex" onSubmit={handleData}>
        <input
          type="text"
          placeholder="Enter a URL"
          className=" w-full px-[30px] py-5 border text-gray-400"
          onChange={(e) => setUrl(e.target.value)}
        ></input>
        <button type="submit" className="bg-blue-400 px-5 py-5 text-black">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
