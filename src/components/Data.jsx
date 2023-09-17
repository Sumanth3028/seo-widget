import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Data = (props) => {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("data");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const post_array = [];

    post_array.push({
      id: id,
      filters: [
        ["resource_type", "=", "html"],
        "and",
        ["meta.scripts_count", ">", 40],
      ],
      order_by: ["meta.content.plain_text_word_count,desc"],
      limit: 10,
    });

    axios({
      method: "post",
      url: "https://api.dataforseo.com/v3/on_page/pages",
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
  };

  return (
    <div>
      <h1>Retrieved Data:</h1>
    </div>
  );
};

export default Data;
