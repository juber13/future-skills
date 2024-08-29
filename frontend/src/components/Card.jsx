import React from 'react'
import { useFormik } from 'formik';
import { Link, useParams } from 'react-router-dom';

const Card = ({title , description , id}) => {
  return (
    <div className='card-section mt-10'>
      <div className='cards max-w-5xl gap-3 m-auto flex'>
        <div className='card  bg-gray-100 flex flex-col gap-1 relative max-w-[400px] h-auto min-h-[200px] pb-2 rounded-xl shadow-md pt-3'>
          <h2 className='text-lg ml-5 font-semibold'>{title}</h2>
          <hr />
          <p className='text-lg p-4 pt-1 text-gray-700'>
            {description}
          </p>
           <Link to={`/card/${title}`}>
            <a className='pl-4 text-blue-400 font-[300] absolute bottom-2'>Link</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card