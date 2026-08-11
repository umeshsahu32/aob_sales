import styles from './HomeCard.module.css'

const HomeCard = ({ data }) => {
    return (
        <div className={`${styles.grid} ${data.length === 4 ? styles.grid_4 : styles.grid_3}`}>
            {data.map((v) => (
                <div key={v.title} className={styles.card}>
                    <img src={v.icon} className={styles.icon} alt={v.title} />
                    <h3 className={styles.cardTitle}>{v.title}</h3>
                    <div className={styles.subtitle}>{v?.subtitle}</div>
                    <p className={styles.cardDesc}>{v.desc}</p>
                </div>
            ))}
        </div>
    )
}

export default HomeCard