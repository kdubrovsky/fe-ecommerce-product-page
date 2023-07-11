import { ReactComponent as LogoSvgImage } from '../../assets/images/logo.svg'
import css from './Logotype.module.scss'

export default function Logotype() {
    return <LogoSvgImage className={css.logo} />;
}