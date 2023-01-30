import React from "react";


const Register = () => {
  const handleSubmit = () => {

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    console.log(email,name)

    fetch('/register', {
      method: 'POST',
      body: JSON.stringify({
        name:name,
        email:email}),
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div>
      <form>
      <label>Name
        <input id="name" type="text" />
        </label>
        <label>Email
        <input id="email" type="email"/>
        </label>
        <button id="submit" type="button" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Register