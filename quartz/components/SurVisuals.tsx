// @ts-ignore
import script from "./scripts/survisuals.inline"
import styles from "./styles/survisuals.scss"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

const SurVisuals: QuartzComponent = () => null

SurVisuals.afterDOMLoaded = script
SurVisuals.css = styles

export default (() => SurVisuals) satisfies QuartzComponentConstructor
