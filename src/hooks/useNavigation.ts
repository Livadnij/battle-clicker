import { useNavigate } from "react-router";

export function useNavigation() {
  const navigate = useNavigate();

  const goIndex = () => {
    navigate("/");
  };

  const goHome = () => {
    navigate("/home");
  };

  const goFight = () => {
    navigate("/battle");
  };

  const goRegister = () => {
    navigate("/register");
  };

  return {
    navigate,
    goIndex,
    goHome,
    goFight,
    goRegister,
  };
}
