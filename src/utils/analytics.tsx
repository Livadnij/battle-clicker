import posthog from 'posthog-js'

export const initAnalytics = () => {
    posthog.init('phc_UL7kZlVuIOqLkpqWGPI6lPUvgQhJrW3tk3yKZJvcr16',
        {
            api_host: 'https://us.i.posthog.com',
            person_profiles: 'never',
            autocapture: false,
        }
    )
}

const trackAppLaunch = () => {}
const trackDepositSuccess = () => {}
const trackOnboardingFinished = () => {}
const trackMainScreen = () => {}
const trackError = () => {}
const trackDepositError = () => {}
const trackOnboardingScreen = () => {}
const trackFightFinished = () => {}
const trackFightNotFinished = () => {}
const trackDepositStart = () => {}
const trackFightStart = () => {}
const trackFightScreen = () => {}
const trackMoveMade = () => {}


export const trackEvent = {
    "MAIN_SCREEN": trackMainScreen,
    "ONBOARDING_SCREEN": trackOnboardingScreen,
    "APP_LAUNCH": trackAppLaunch,
    "DEPOSIT_SUCCESS": trackDepositSuccess,
    "ONBOARDING_FINISHED": trackOnboardingFinished,
    "DEPOSIT_ERROR": trackDepositError,
    "DEPOSIT_START": trackDepositStart,
    "FIGHT_START": trackFightStart,
    "FIGHT_SCREEN": trackFightScreen,
    "FIGHT_FINISHED": trackFightFinished,
    "FIGHT_NOT_FINISHED": trackFightNotFinished,
    "MOVE_MADE": trackMoveMade,
    "ERROR": trackError,
}