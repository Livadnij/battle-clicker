import React, { FC, useState } from "react";
import Layout from "components/layout/Layout";
import styles from "../styles/register-onboarding.module.scss";
import backgroundImageFirst from "../assets/layout/register/register-onboarding-1.png";
import backgroundImageSecond from "../assets/layout/register/register-onboarding-2.png";
import backgroundImageThird from "../assets/layout/register/register-onboarding-3.png";
import backgroundImageFourth from "../assets/layout/register/register-onboarding-4.png";
import cyberManFirst from "../assets/layout/register/cyber-man-1.png"
import cyberManSecond from "../assets/layout/register/cyber-man-2.png"
import cyberManThird from "../assets/layout/register/cyber-man-3.png"
import cyberManFourth from "../assets/layout/register/cyber-man-4.png"

import HeaderOnboarding from "components/layout/onboarding/header/HeaderOnboarding";
import CyberInput from "../components/layout/onboarding/cyberInput/CyberInput";
import { randomizer } from "../utils/Randomizer";

type RegisterPageType = {};

const cyberManArray = [
    {
        avatar: cyberManFirst,
        background: backgroundImageFirst
    },
    {
        avatar: cyberManSecond,
        background: backgroundImageSecond
    },
    {
        avatar: cyberManThird,
        background: backgroundImageThird
    },
    {
        avatar: cyberManFourth,
        background: backgroundImageFourth
    }
]

const RegisterOnboardingPage: FC<RegisterPageType> = ({}) => {
    const [value, setValue] = useState<string>("Enter your name");
    const variant = randomizer(0,3)
    const variantData = cyberManArray[variant]

    return (
        <Layout
            backgroundImage={variantData.background}
            buttonTitle={"LET’S FIGHT!"}
            onClick={() => {
            }}
        >
            <div className={styles["register-container"]}>
                <HeaderOnboarding pageName="register"/>]
                <div>
                    <CyberInput
                        label='Enter your name'
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <img src={variantData.avatar} className={styles["register-container__avatar"]}/>
                </div>
            </div>
        </Layout>
    );
};

export default RegisterOnboardingPage;
