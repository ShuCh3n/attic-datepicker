import howItWorks from "./codes/howItWorks"
import tailwindConfig from './codes/tailwindConfig'
import usePlayground from "./codes/playground"

const codeExamples = () => {
    const { defaults, asRange, customFormat, keepOpen, startFrom, slot } = usePlayground()

    return {
        howItWorks,
        tailwindConfig,
        playground: {
            defaults,
            asRange,
            customFormat,
            keepOpen,
            startFrom,
            slot
            // overlay,
            // asSingle,
            // asSingleWithRange,
            // customPlaceholder,
            // separator,
            // formatter,
            // autoApply,
            // startFrom,
            // shortcuts,
            // disableDate,
            // disableInRange,
            // trigger,
            // useSlot,
            // options
        },
    }
}

// @ts-ignore
export default codeExamples