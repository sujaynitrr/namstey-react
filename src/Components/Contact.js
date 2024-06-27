import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    setTimeout(() => {
      console.log("hello");
    }, 1000);
  }, []);

  return (
    <div>
      <p>Contact page</p>
    </div>
  );
};

export default Contact;
