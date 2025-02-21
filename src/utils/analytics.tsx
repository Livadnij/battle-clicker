import posthog from "posthog-js";

type Onboarding = "register" | "rules" | "deposit";
type Deposit = "onboarding" | "main";

type DepositSuccessProps = {
  purchase_amount: number;
};

type ErrorProps = {
  error: string;
};

type FightNotFinishedProps = {
  error: string;
};

type DepositErrorProps = {
  error: string;
};

type OnboardingProps = {
  screen: Onboarding;
};

type DepositStartProps = {
  screen: Deposit;
};

type FightStartProps = {
  fightid: number | string;
};

type FightScreenProps = {
  fightid: number | string;
};

type MoveMadeProps = {
  fightid: number | string;
};

type AppLaunchProps = {
  session_quantity: number;
  deposit_quantity: number;
  deposit_sum: number;
  isPremium: boolean;
  userId: string;
  fights_quantity: number;
  balance: number;
  fights_won: number;
};

export const initAnalytics = () => {
  posthog.init("phc_NeIVHg6btas9Y92CAQa7i2H0lbnBqphY75KjpmkS0P0", {
    api_host: "https://us.i.posthog.com",
    person_profiles: "never",
    autocapture: false,
  });
};

const trackAppLaunch = ({
  session_quantity,
  deposit_quantity,
  deposit_sum,
  isPremium,
  userId,
  fights_quantity,
  balance,
  fights_won,
}: AppLaunchProps) => {
  posthog.capture("APP_LAUNCH", {
    params: {
      session_quantity,
      deposit_quantity,
      deposit_sum,
      isPremium,
      userId,
      fights_quantity,
      balance,
      fights_won,
    },
  });
};
const trackDepositSuccess = ({ purchase_amount }: DepositSuccessProps) => {
  posthog.capture("DEPOSIT_SUCCESS", { params: { purchase_amount } });
};
const trackOnboardingFinished = () => {
  posthog.capture("ONBOARDING_FINISHED");
};
const trackMainScreen = () => {
  posthog.capture("MAIN_SCREEN");
};
const trackError = ({ error }: ErrorProps) => {
  posthog.capture("ERROR", { params: { error } });
};
const trackDepositError = ({ error }: DepositErrorProps) => {
  posthog.capture("DEPOSIT_ERROR", { params: { error } });
};
const trackOnboardingScreen = ({ screen }: OnboardingProps) => {
  posthog.capture("ONBOARDING_SCREEN", { params: { screen } });
};
const trackFightFinished = () => {
  posthog.capture("FIGHT_FINISHED");
};
const trackFightNotFinished = ({ error }: FightNotFinishedProps) => {
  posthog.capture("FIGHT_NOT_FINISHED", { params: { error } });
};
const trackDepositStart = ({ screen }: DepositStartProps) => {
  posthog.capture("DEPOSIT_START", { params: { screen } });
};
const trackFightStart = ({ fightid }: FightStartProps) => {
  posthog.capture("FIGHT_START", { params: { fightid } });
};
const trackFightScreen = ({ fightid }: FightScreenProps) => {
  posthog.capture("FIGHT_SCREEN", { params: { fightid } });
};
const trackMoveMade = ({ fightid }: MoveMadeProps) => {
  posthog.capture("MOVE_MADE", { params: { fightid } });
};

export const trackEvent = {
  MAIN_SCREEN: trackMainScreen,
  ONBOARDING_SCREEN: trackOnboardingScreen,
  APP_LAUNCH: trackAppLaunch,
  DEPOSIT_SUCCESS: trackDepositSuccess,
  ONBOARDING_FINISHED: trackOnboardingFinished,
  DEPOSIT_ERROR: trackDepositError,
  DEPOSIT_START: trackDepositStart,
  FIGHT_START: trackFightStart,
  FIGHT_SCREEN: trackFightScreen,
  FIGHT_FINISHED: trackFightFinished,
  FIGHT_NOT_FINISHED: trackFightNotFinished,
  MOVE_MADE: trackMoveMade,
  ERROR: trackError,
};
