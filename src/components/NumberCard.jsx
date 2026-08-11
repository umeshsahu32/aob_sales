import styles from './NumberCard.module.css'

const NumberCard = ({ data }) => {

    return (
        <div className={styles.grid}>
            {data.map((item) => (
                <div key={item.number} className={styles.card}>
                    <span className={styles.number}>{item.number}</span>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDesc}>{item.desc}</p>
                </div>
            ))}
        </div>
    )
}

export default NumberCard