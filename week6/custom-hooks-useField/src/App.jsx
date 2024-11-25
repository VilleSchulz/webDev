import { useState } from "react";
import useField from "./useField";

const App = () => {
  const nameInput = useField("text");
  const bornInput = useField("date");
  const heightInput = useField("number");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nameInput.value);
    console.log(bornInput.value);
    console.log(heightInput.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Name:
          <input {...nameInput} />
        </div>
        <br />
        <div>
          Birthdate:
          <input {...bornInput} />
        </div>
        <br />
        <div>
          Height:
          <input {...heightInput} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {nameInput.value} {bornInput.value} {heightInput.value}
      </div>
    </div>
  );
};

export default App;
