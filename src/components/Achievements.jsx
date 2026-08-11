import styles from './Achievements.module.css'

const Achievements = ({ data }) => {
    return (
        <div className={styles.grid}>
            {data.map((r) => (
                <div key={r.title} className={styles.block}>
                    <div className={styles.iconWrap}>
                        <img src={r.Icon} className={styles.reasonsIcons} alt={r.title} />
                    </div>
                    <div className={styles.textContent}>
                        <h3 className={styles.blockTitle}>{r.title}</h3>
                        <p className={styles.blockBody}>{r.body}</p>
                        {r.list && (
                            <ul className={styles.roiList}>
                                {r.list.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        )}
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Achievements