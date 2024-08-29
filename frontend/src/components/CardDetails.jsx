import axios from "axios";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const CardDetails = () => {
  const {title} = useParams();
  console.log(title)
//   const title = "valid-title"; 
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading , setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://future-skills-7tfw.onrender.com/api/singleCard`,{params: { title },}
        );
        
        setLoading(false);
        setData(res.data.result);
      } catch (err) {
        setError(err);
        console.error("Error fetching data:", err);
        setLoading(false);
      }finally{
        setLoading(false)
      }
    };

    fetchData();
  }, [title]); // Re-run effect if title changes

  return (
    <div className='card-section mt-10'>
     {loading ? <h1 className="text-center">Loading...</h1>
      :
      <div className='cards max-w-5xl gap-3 m-auto flex items-center justify-center'>
        <div className='card  bg-gray-100 flex flex-col gap-1 relative max-w-[400px] h-auto min-h-[200px] pb-2 rounded-xl shadow-md pt-3'>
          <h2 className='text-lg ml-5 font-semibold'>{data?.title}</h2>
          <hr />
          <p className='text-lg p-4 pt-1 text-gray-700'>{data?.description}</p>
          {/* <Link to={`/card/${title}`}>
            <a className='pl-4 text-blue-400 font-[300] absolute bottom-2'>
              Link
            </a>
          </Link> */}
        </div>
      </div>
     }

    </div>
  );
};

export default CardDetails;
