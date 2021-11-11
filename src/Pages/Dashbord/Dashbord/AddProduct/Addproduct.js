import React from "react";
import { useForm } from "react-hook-form";
const Addproduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    fetch("http://localhost:5000/addproduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("product added successfully");
          reset();
        }
      });
  };
  return (
    <div>
      <h1> add product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ width: "50%" }}
          {...register("Name")}
          placeholder="your name"
        />
        <p></p>
        <input
          style={{ width: "50%" }}
          {...register("price")}
          placeholder="Price"
        />
        <p></p>
        <input
          style={{ width: "50%" }}
          {...register("img")}
          placeholder="imgURL"
        />
        <p></p>
        <textarea
          style={{ width: "50%" }}
          placeholder="Product description"
          rows="4"
          cols="50"
          {...register("description", {
            required: true,
          })}
        />
        <p></p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Addproduct;
