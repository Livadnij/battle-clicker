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

  const goDepositOn = () => {
    navigate("/depositOn");
  };

  const goRules = () => {
    navigate("/rules");
  };

  return {
    goDepositOn,
    navigate,
    goIndex,
    goHome,
    goFight,
    goRegister,
    goDeposit,
    goRules,
  };
}
