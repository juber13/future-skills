// eslint-disable-next-line no-unused-vars
import React, { act } from "react";
import { useFormik } from "formik";
import cardSchema from "../schema";
import axios from "axios";
import toast , {Toaster} from "react-hot-toast";

const CreateCard = () => {
  const data = {
    title: "",
    description: "",
  };

  const { values, errors, handleChange, handleBlur, handleSubmit, touched } = useFormik({
      initialValues: data,
      validationSchema: cardSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        axios.post("/api/cards" , values).then(res => {
          if(res.data.success == true){
             toast.success("Card created");
             action.resetForm();
          }
        })
      },
    });

  return (
    <div className='from-section w-full h-screen items-center  justify-center'>
      <div className='flex flex-col gap-5 w-full p-12'>
        <h1 className='text-4xl text-center font-[400]'>Create Card</h1>
        <div className='items-center p-8 sm:w-[40%] m-auto bg-white border shadow-lg flex border-gray rounded-md'>
          <form className='flex flex-col gap-3 w-full' onSubmit={handleSubmit}>
            <div>
              <input
                type='text'
                placeholder='Title...'
                className='w-full p-2 outline-none border rounded-md'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                name='title'
              />
              {touched.title && errors.title ? (
                <p className='text-xs text-red-500'>{errors.title}</p>
              ) : null}
            </div>
            <div>
              <textarea
                rows={5}
                name='description'
                id=''
                placeholder='Descriptions'
                className='w-full resize-none p-2 outline-none border rounded-md'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              ></textarea>
              {touched.description && errors.description ? (
                <p className='text-red-500 text-xs'>{errors.description}</p>
              ) : null}
            </div>
            <button
              className='bg-yellow-500 p-2 rounded-md text-sm font-medium'
              type='submit'
            >
              Create Card
            </button>
          </form>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default CreateCard;
