import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(1);
  const [count2] = useState(1);

  useEffect(() => {
    // API CALL
  }, []);
  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h2>Name: {name}</h2>
      <h3>Location: Prayagraj</h3>
      <h4>Contact: svsumit9810@gmail.com</h4>
    </div>
  );
};

export default User;