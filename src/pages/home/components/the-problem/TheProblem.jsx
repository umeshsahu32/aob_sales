import styles from "./TheProblem.module.css";
import icon1 from "../../../../assets/icons/home/marketing_1.png";
import icon2 from "../../../../assets/icons/home/people_1.png";
import icon3 from "../../../../assets/icons/home/Operations_1.png";

const columns = [
  { title: "Marketing", sub: "Works in a silo", icon: icon1 },
  { title: "Sales", sub: "Unstructured processes", icon: icon2 },
  { title: "Operations", sub: "Founders trapped", icon: icon3 },
];

const TheProblem = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className={styles.label}>
          BUSINESSES DON'T HAVE A REVENUE PROBLEM{" "}
        </span>
        <h2 className={styles.headline}>They Don't Have a Sales Engine</h2>
        <p className={styles.subtext}>
          Most businesses struggle not because of lack of effort, but because
          <br />
          their sales ecosystem is disconnected.
        </p>

        <div className={styles.columns}>
          {columns.map((col, i) => (
            <div
              key={col.title}
              className={`${styles.col} ${i === 1 ? styles.colActive : ""}`}
            >
              <img src={col.icon} alt={col.title} />
              <div className={styles.colText}>
                <div className={styles.colTitle}>{col.title}</div>
                <div className={styles.colSub}>{col.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.conclusion}>
          Modern growth requires more than manpower.
          <strong>It requires a system.</strong>
          <p>AOB India is a leading sales outsourcing company in India.</p>
        </p>
      </div>
    </section>
  );
};

export default TheProblem;
