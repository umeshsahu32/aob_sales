import styles from './RowItems.module.css'

const RowItems = ({ data }) => {
    return (
        <div className={styles.columns}>
            {data.map((col, i) => (
                <div
                    key={col.title}
                    className={`${styles.col}`}
                >
                    <img src={col.icon} alt={col.title} />
                    <div className={styles.colText}>
                        <div className={styles.colTitle}>{col.title}</div>
                        <div className={styles.colSub}>{col.sub}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RowItems