import React, { useRef, useState } from "react";

export const DatePicker = (props) => {
  const [date, setDate] = useState("");
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    //props ändrar state i progressB
    props.setDate(e.target.value);
    setDate(e.target.value);
    console.log(e.target.value);
    //gör funktion som skickar upp variabeln till sin förälder
  };

  return (
    <div>
      <input
        type="date"
        onChange={handleChange}
        ref={dateInputRef}
        // value={date}
      />
      <p>Selected Date: {date}</p>
    </div>
  );
};
