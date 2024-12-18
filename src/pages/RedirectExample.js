import { useNavigate } from "react-router-dom";

const RedirectExample = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <hi>Hello from redirect</hi>
      <button onClick={handleClick}>Click to redirect</button>
    </>
  );
};

export default RedirectExample;
