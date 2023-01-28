import React from "react";

export const Form = () => {
  return (
    <div>
      <form>
        name
        <input id="name" type="text" />
        email
        <input id="email" type="email"/>
        <button id="submit" type="button" onClick={console.log("word")}>
          Submit
        </button>
      </form>
    </div>
  );
};
