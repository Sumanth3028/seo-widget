import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = (props) => {
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  let response = {
    version: "0.1.20230825",
    status_code: 20000,
    status_message: "Ok.",
    time: "7.2556 sec.",
    cost: 0.001375,
    tasks_count: 1,
    tasks_error: 0,
    tasks: [
      {
        id: "09170814-6706-0275-0000-710e5e55b414",
        status_code: 20000,
        status_message: "Ok.",
        time: "7.1503 sec.",
        cost: 0.001375,
        result_count: 1,
        path: ["v3", "on_page", "instant_pages"],
        data: {
          api: "on_page",
          function: "instant_pages",
          url: "https://www.algoexpert.io/",
          enable_javascript: true,
          custom_js: "meta = {}; meta.url = document.URL; meta;",
        },
        result: [
          {
            crawl_progress: "finished",
            crawl_status: null,
            crawl_gateway_address: "168.119.141.170",
            items_count: 1,
            items: [
              {
                resource_type: "html",
                status_code: 200,
                location: null,
                url: "https://www.algoexpert.io/",
                meta: {
                  title: "AlgoExpert | Ace the Coding Interviews",
                  charset: 65001,
                  follow: true,
                  generator: null,
                  htags: {
                    h1: ["AlgoExpert", "AlgoExpert"],
                    h4: [
                      "Max Profit With K Transactions",
                      "Our customers have gotten offers from awesome companies.",
                    ],
                    h2: [
                      "What is AlgoExpert?",
                      "A Better Way to Prep for Coding Interviews.",
                      "With Great Outcomes.",
                      "And Over 200,000 Satisfied Engineers.",
                      "195 Questions Spanning 15 Categories.",
                      "Our Videos Set Us Apart.",
                      "Data Structures Crash Course.",
                      "We Speak 9 Languages.",
                      "The Perfect Practice Environment.",
                      "Big O Notation Made Easy.",
                      "Time Complexity",
                      "Space Complexity",
                      "A Better Way To Land Interviews.",
                    ],
                    h3: [
                      "195 Hand-Picked Questions",
                      "100+ Hours Of Video Explanations",
                      "Data Structures Crash Course",
                      "Solutions In 9 Languages",
                      "Feature-Rich Coding Workspace",
                      "Space-Time Complexity Analyses",
                      "4 Curated Assessments",
                      "Mock Coding Interviews",
                      "Recruiting Profile & Certificate",
                      "Conceptual Overview",
                      "Code Walkthrough",
                    ],
                    h5: [
                      "Alex",
                      "Software Engineer",
                      "Corbin",
                      "Software Developer",
                      "Carlos",
                      "Software Developer Intern",
                      "Marlies",
                      "Software Engineer",
                      "Adarsh",
                      "Software Engineer",
                      "Elana",
                      "Senior Software Engineer",
                      "Alberto",
                      "Software Engineer",
                      "Onyeka",
                      "Web Developer",
                      "Ayoub",
                      "Software Engineer Intern",
                      "Sreepriya",
                      "Software Developer",
                      "Erik",
                      "Software Engineer",
                      "Eren",
                      "Data Engineer",
                      "Mitch",
                      "Software Engineer",
                      "Jeremy",
                      "Analyst",
                      "You",
                      "Dream Job",
                    ],
                  },
                  description:
                    "AlgoExpert is the leading platform to prepare for coding interviews. Master essential algorithms and data structures, and land your dream job with AlgoExpert.",
                  favicon:
                    "https://assets.algoexpert.io/static/images/main-favicon.png",
                  meta_keywords: null,
                  canonical: "https://www.algoexpert.io/product",
                  internal_links_count: 16,
                  external_links_count: 0,
                  inbound_links_count: 0,
                  images_count: 36,
                  images_size: 0,
                  scripts_count: 5,
                  scripts_size: 0,
                  stylesheets_count: 0,
                  stylesheets_size: 0,
                  title_length: 38,
                  description_length: 158,
                  render_blocking_scripts_count: 0,
                  render_blocking_stylesheets_count: 5,
                  cumulative_layout_shift: 0,
                  meta_title: null,
                  content: {
                    plain_text_size: 13673,
                    plain_text_rate: 0.06910022640899167,
                    plain_text_word_count: 2166,
                    automated_readability_index: 9.879028717696976,
                    coleman_liau_readability_index: 12.57012003693444,
                    dale_chall_readability_index: 7.816806215739215,
                    flesch_kincaid_readability_index: 41.413088116694155,
                    smog_readability_index: 17.349366588058153,
                    description_to_content_consistency: 0.9047619104385376,
                    title_to_content_consistency: 1,
                    meta_keywords_to_content_consistency: null,
                  },
                  deprecated_tags: null,
                  duplicate_meta_tags: null,
                  spell: null,
                  social_media_tags: {
                    "og:title": "AlgoExpert | Ace the Coding Interviews",
                    "og:description":
                      "The leading platform to prepare for coding interviews. Master essential algorithms and data structures, and land your dream job with AlgoExpert.",
                    "og:image":
                      "https://assets.algoexpert.io/static/images/ae-social-logo.png",
                    "og:url": "https://www.algoexpert.io",
                    "twitter:title": "AlgoExpert | Ace the Coding Interviews",
                    "twitter:description":
                      "The leading platform to prepare for coding interviews. Master essential algorithms and data structures, and land your dream job with AlgoExpert.",
                    "twitter:image":
                      "https://assets.algoexpert.io/static/images/ae-social-logo-twitter.png",
                    "twitter:card": "summary",
                  },
                },
                page_timing: {
                  time_to_interactive: 536,
                  dom_complete: 1402,
                  largest_contentful_paint: 0,
                  first_input_delay: 0,
                  connection_time: 154,
                  time_to_secure_connection: 134,
                  request_sent_time: 0,
                  waiting_time: 237,
                  download_time: 0,
                  duration_time: 1404,
                  fetch_start: 0,
                  fetch_end: 1404,
                },
                onpage_score: 97.44,
                total_dom_size: 197885,
                custom_js_response: {
                  url: "https://www.algoexpert.io/",
                },
                resource_errors: {
                  errors: null,
                  warnings: null,
                },
                broken_resources: false,
                broken_links: false,
                duplicate_title: false,
                duplicate_description: false,
                duplicate_content: false,
                click_depth: 0,
                size: 197885,
                encoded_size: 2277,
                total_transfer_size: 2277,
                fetch_time: "2023-09-17 08:15:01 +00:00",
                cache_control: {
                  cachable: false,
                  ttl: 0,
                },
                checks: {
                  no_content_encoding: false,
                  high_loading_time: false,
                  is_redirect: false,
                  is_4xx_code: false,
                  is_5xx_code: false,
                  is_broken: false,
                  is_www: true,
                  is_https: true,
                  is_http: false,
                  high_waiting_time: false,
                  has_micromarkup: false,
                  has_micromarkup_errors: false,
                  no_doctype: false,
                  has_html_doctype: true,
                  canonical: false,
                  no_encoding_meta_tag: false,
                  no_h1_tag: false,
                  https_to_http_links: false,
                  size_greater_than_3mb: false,
                  meta_charset_consistency: false,
                  has_meta_refresh_redirect: false,
                  has_render_blocking_resources: false,
                  low_content_rate: false,
                  high_content_rate: false,
                  low_character_count: false,
                  high_character_count: false,
                  small_page_size: false,
                  large_page_size: false,
                  low_readability_rate: false,
                  irrelevant_description: false,
                  irrelevant_title: false,
                  irrelevant_meta_keywords: false,
                  title_too_long: false,
                  has_meta_title: false,
                  title_too_short: false,
                  deprecated_html_tags: false,
                  duplicate_meta_tags: false,
                  duplicate_title_tag: false,
                  no_image_alt: false,
                  no_image_title: false,
                  no_description: false,
                  no_title: false,
                  no_favicon: false,
                  seo_friendly_url: false,
                  flash: false,
                  frame: true,
                  lorem_ipsum: false,
                },
                content_encoding: "gzip",
                media_type: "text/html",
                server: null,
                is_resource: false,
                url_length: 26,
                relative_url_length: 1,
                last_modified: null,
              },
            ],
          },
        ],
      },
    ],
  };

  localStorage.setItem('data',JSON.stringify(response))

  const handleData = async (e) => {
    e.preventDefault();

    const post_array = [];

    // post_array.push({
    //   url: url,
    //   enable_javascript: true,
    //   custom_js: "meta = {}; meta.url = document.URL; meta;",
    // });
    // axios({
    //   method: "post",
    //   url: "https://api.dataforseo.com/v3/on_page/instant_pages",
    //   auth: {
    //     username: "surajbahadur58@gmail.com",
    //     password: "3d7163a7924fb861",
    //   },
    //   data: post_array,
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // })
    //   .then(function (response) {
    //     var result = response["data"]["tasks"];
    //     // Result data
    //     console.log(result);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    navigate(`/data`)
  };

  return (
    <div className="flex flex-col  ">
      <form className="flex flex-col items-center  " >
        <div className="relative  my-[100px]">
          <input
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
