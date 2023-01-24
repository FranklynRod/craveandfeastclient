import React from "react";

export const Form = () => {
  return (
    <div>
      <form>
        <input id="name" type="text" />
        <button id="submit" type="button" onClick={console.log("word")}>
          Submit
        </button>
      </form>
    </div>
  );
};
