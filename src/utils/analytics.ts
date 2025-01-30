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

export const sendEvent = (event: string, payload?: Record<string, any>) => {
    posthog.capture(event, payload)
}