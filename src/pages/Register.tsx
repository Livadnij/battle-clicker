import Layout from "components/layout/Layout";
import { FC, useEffect, useState } from "react";
import styles from "../styles/register.module.scss";
import TextInputField from "components/textInput/TextInputField";
import { useTelegram } from "hooks/useTelegram";
import { addUser, getUserById } from "../firebase/firebaseFirestore";
import { UserType } from "types/types";
import { useUser } from "hooks/UserContext";
import { useNavigation } from "hooks/useNavigation";

type RegisterPageType = {};

const RegisterPage: FC<RegisterPageType> = ({}) => {
  const { goDeposit, goHome } = useNavigation();
  const { tg_user } = useTelegram();
  const { setUser } = useUser();

  const defaultUser = {
    id: tg_user?.id.toString(),
    username: "",
    balance: 0,
    fights_quantity: 0,
  };

  const [value, setValue] = useState<string>(defaultUser.username);

  const fetchUser = async () => {
    try {
      const fetchedUser = await getUserById("users", tg_user.id.toString()!);
      if (fetchedUser) {
        setUser(fetchedUser);
        goHome();
      }
    } catch (error) {
      console.log("Failed to fetch user data");
    }
  };

  const handleSubmitUser = async () => {
    if (value.length <= 3) return alert("Name is too short");
    if (value.length > 12) return alert("Name is too long");
    try {
      await addUser(
        "users",
        { ...defaultUser, username: value },
        defaultUser.id
      );
    } catch (error) {
      console.log("Failed to fetch user data");
    }
    setUser({ ...defaultUser, username: value });
    goDeposit();
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Layout buttonTitle={"submit"} onClick={handleSubmitUser}>
      <div className={styles["register-container"]}>
        <h2>
          WHAT WAS YOUR <br /> NAME AGAIN?
        </h2>
        <TextInputField
          placeholder="..."
          limitations={[3, 12]}
          value={value}
          setValue={setValue}
        />
      </div>
    </Layout>
  );
};

export default RegisterPage;
