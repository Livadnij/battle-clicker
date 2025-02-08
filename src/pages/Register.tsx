import Layout from "components/layout/Layout";
import { FC, useState } from "react";
import styles from "../styles/register.module.scss";
import TextInputField from "components/textInput/TextInputField";
import { addUser } from "../firebase/firebaseFirestore";
import { useUser } from "context/UserContext";
import { useNavigation } from "hooks/useNavigation";

type RegisterPageType = {};

const RegisterPage: FC<RegisterPageType> = ({}) => {
  const { goDeposit } = useNavigation();
  const { user, setUser } = useUser();

  const defaultUser = {
    id: user?.id.toString()!,
    username: "",
    balance: 0,
    fights_quantity: 0,
  };

  const [value, setValue] = useState<string>(defaultUser.username);

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
