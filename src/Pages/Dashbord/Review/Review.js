import React from "react";
import { useForm } from "react-hook-form";
const Review = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <h4 className="text-success">Product review</h4>
      <small className="text-primary">
        Please review the Product about good or bad
      </small>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ width: "50%" }}
          {...register("Name")}
          placeholder="your name"
        />
        <p></p>
        <textarea
          style={{ width: "50%" }}
          placeholder="Product Review"
          rows="4"
          cols="50"
          {...register("Review", {
            required: true,
          })}
        />
        <p></p>
        <input type="submit" />
      </form>
    </>
  );
};

export default Review;
