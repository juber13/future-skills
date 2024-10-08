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
      .get("https://future-skills-7tfw.onrender.com/api/cards")
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
        <h1 className='sm:text-5xl text-2xl text-center font-medium'>How can we help?</h1>
        <div className='border items-center p-3 sm:w-[40%] m-auto bg-white flex border-black rounded-md shadow-md'>
          <input
            type='text'
            placeholder='Search'
            className='w-[98%] outline-none bg-transparent'
            onChange={(e) => setInputValue(e.target.value)}
          />
          <GoArrowRight />
        </div>
      </div>
      <div className='grid sm:grid-cols-3 gap-4 w-[80%] flex-wrap m-auto items-center justify-center mt-7 '>
        {loading ? (
          <p className="text-center">Loading...</p>
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
