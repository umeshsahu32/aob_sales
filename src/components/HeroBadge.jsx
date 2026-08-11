import styles from './HeroBadge.module.css'

const HeroBadge = ({ text }) => {
    return <span className={styles.heroBadge}>{text}</span>
}

export default HeroBadge