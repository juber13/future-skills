import React, { useState, useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import Card from "./Card";
import axios from "axios";

const Content = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    axios
      .get("/api/cards")
      .then((res) => {
        setData(res.data.result);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  // Filter data based on inputValue
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className='hero-section w-full items-center justify-center'>
      <div className='flex flex-col gap-5 bg-[#d3c2e7] w-full p-12'>
        <h1 className='text-5xl text-center font-medium'>How can we help?</h1>
        <div className='border items-center p-3 sm:w-[40%] m-auto bg-white flex border-black rounded-md'>
          <input
            type='text'
            placeholder='Search'
            className='w-[98%] outline-none bg-transparent'
            onChange={(e) => setInputValue(e.target.value)}
          />
          <GoArrowRight />
        </div>
      </div>
      <div className='flex flex-wrap gap-4 items-center justify-center'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          filteredData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              id={card.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Content;
