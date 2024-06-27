import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error, "error");
  return (
    <div>
      <p>!!!ops</p>
      <p>something went wrong</p>
    </div>
  );
};

export default Error;
