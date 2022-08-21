import howItWorks from "./codes/howItWorks"
import tailwindConfig from './codes/tailwindConfig'
import usePlayground from "./codes/playground"

const codeExamples = () => {
    const { defaults, asRange, customFormat, keepOpen, startFrom, slot, showMultipleMonths, trigger } = usePlayground()

    return {
        howItWorks,
        tailwindConfig,
        playground: {
            defaults,
            asRange,
            customFormat,
            keepOpen,
            startFrom,
            slot,
            showMultipleMonths,
            trigger
        },
    }
}

// @ts-ignore
export default codeExamples