import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";

function Home() {
  const [data, setData] = useState([]);
  const clientID = "ky7NU87OglbBFL25mZKW";
  const clientSecret = "8b4y_zdk_N";

  const apiData = async () => {
    await axios
      .get("/v1/search/movie.json", {
        params: {
          query: "도라에몽",
          display: 10,
        },
        headers: {
          "X-Naver-Client-Id": clientID,
          "X-Naver-Client-Secret": clientSecret,
        },
      })
      .then((res) => {
        console.log(res.data.items);
        setData(res.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    <>
      <h1>영화 검색</h1>
      {/* <input type="text" value={data} onChange={handleChange} /> */}
    </>
  );
}

export default Home;
