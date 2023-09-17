import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchBar = (props) => {
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  const [response, setResponse] = useState();



  const handleData = async (e) => {
    e.preventDefault();

    const post_array = [];

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
        setResponse(response);
        localStorage.setItem('data', JSON.stringify(response))

        // Result data
        // console.log(response);
        navigate(`/data`)

      })
      .catch(function (error) {
        // console.log(error);
      });


  };

  return (
    <div className="flex flex-col  ">
      <form className="flex flex-col items-center  " >
        <div className="relative  my-[100px]">
          <input
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            className="w-[700px] border rounded-xl pl-8 pr-4 py-2 focus:outline-none focus:ring focus:border-blue-300 text-center bg-[#F6F7FF]"
            placeholder="Enter the URL"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {/* <AiOutlineSearch className="text-black"  /> */}
          </div>
          <button type="submit" className="bg-green-400 rounded px-4 py-2 mx-3" onClick={handleData} >Search</button>
        </div>


      </form>

    </div>
  );
};

export default SearchBar;
