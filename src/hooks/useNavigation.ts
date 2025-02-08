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
    navigate("/fight");
  };

  const goRegister = () => {
    navigate("/register");
  };

  const goDeposit = () => {
    navigate("/deposit");
  };

  return {
    navigate,
    goIndex,
    goHome,
    goFight,
    goRegister,
    goDeposit,
  };
}
