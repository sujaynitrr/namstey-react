import { useEffect } from "react";

const User = (props) => {
  useEffect(() => {
    const timeIntervalId = setInterval(() => {
      console.log("hello");
    }, 1000);
    return () => {
      // cleanup logic
      clearInterval(timeIntervalId);
    };
  }, []);
  const { name, location, contact } = props;
  return (
    <div>
      <p>Name :{name}</p>
      <p>Location :{location}</p>
      <p>Contact :{contact}</p>
    </div>
  );
};
export default User;
