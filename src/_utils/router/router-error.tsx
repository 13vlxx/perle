import { useNavigate } from "react-router-dom";
import { useEffectOnce } from "react-use";

const RouterError = ({ path }: { path: string }) => {
  const navigate = useNavigate();

  useEffectOnce(() => {
    console.log(`Error on path: ${path}`);
    navigate(path);
  });

  return <></>;
};

export default RouterError;
