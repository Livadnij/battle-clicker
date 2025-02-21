import { useNavigate } from "react-router";

export function useNavigation() {
  const navigate = useNavigate();

  const goIndex = () => {
    //index page, obviously
    navigate("/");
  };

  const goHome = () => {
    //main page with star balance and button to start fights
    navigate("/home");
  };

  const goFight = () => {
    //fight page
    navigate("/fight");
  };

  const goLoading = () => {
    //loading page
    navigate("/loading");
  };

  const goRules = () => {
    // first part of the onboarding with basic rules
    navigate("/rules");
  };

  const goDeposit = () => {
    // second part of the onboarding which has a button to trigger payment
    navigate("/deposit");
  };

  const goRegister = () => {
    // third part of the onboarding group where person sets a username
    navigate("/register");
  };

  const goDefeat = () => {
    navigate("/defeat");
  };

  const goVictory = () => {
    navigate("/victory");
  };

  const goMaintenance = () => {
    navigate("/maintenance");
  };

  return {
    goDeposit,
    goIndex,
    goHome,
    goFight,
    goRules,
    goLoading,
    goRegister,
    goDefeat,
    goVictory,
    goMaintenance,
  };
}
