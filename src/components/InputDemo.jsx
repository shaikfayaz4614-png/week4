import { useState } from "react";

const InputDemo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}`);
  };

  return (
    <form className="input-container" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="input-field"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default InputDemo;