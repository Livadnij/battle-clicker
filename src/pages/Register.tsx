import Layout from "components/layout/Layout";
import { FC, useState } from "react";
import styles from "../styles/register.module.scss";
import TextInputField from "components/textInput/TextInputField";
import { useTelegram } from "hooks/useTelegram";
import { addUser, getUserById } from "../firebase/firebaseFirestore";
import { useNavigate } from "react-router";
import { UserType } from "types/types";
import { useUser } from "hooks/UserContext";

type RegisterPageType = {};

const RegisterPage: FC<RegisterPageType> = ({}) => {
  const navigate = useNavigate();
  const { tg_user } = useTelegram();
  const { setUser } = useUser();

  const defaultUser = {
    id: tg_user?.id.toString(),
    username: "Monkey",
    balance: 0,
    fights_quantity: 0,
  };

  const [userData, setUserData] = useState<UserType>(defaultUser);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmitUser = async () => {
    if (userData.username.length < 3 || !tg_user?.id) return;
    setLoading(true);
    let fetchedUser;
    try {
      fetchedUser = await getUserById("users", `${tg_user.id}`);
    } catch (error) {
      console.log("Failed to fetch user data");
    } finally {
      setLoading(false);
    }
    if (fetchedUser) {
      navigate("/");
    } else {
      try {
        await addUser("users", userData, userData.id);
      } catch (error) {
        console.log("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
      setUser(userData);
      navigate("/home");
    }
  };

  return (
    <Layout
      buttonTitle={loading ? "loading" : "submit"}
      onClick={handleSubmitUser}
    >
      <div className={styles["register-container"]}>
        <h2>
          WHAT WAS YOUR <br /> NAME AGAIN?
        </h2>
        <TextInputField
          name={"username"}
          limitations={[3, 12]}
          value={userData.username}
          setValue={setUserData}
        />
      </div>
    </Layout>
  );
};

export default RegisterPage;
