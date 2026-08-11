import styles from "./TheProblem.module.css";
import icon1 from "@/assets/icons/home/marketing_1.png";
import icon2 from "@/assets/icons/home/people_1.png";
import icon3 from "@/assets/icons/home/Operations_1.png";
import RowItems from "@/components/RowItems";

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

        <RowItems data={columns} />

        <p className={styles.conclusion}>
          Modern growth requires more than manpower.
          <strong>It requires a system.</strong>
         
        </p>
        <p>AOB India is a leading sales outsourcing company in India.</p>
      </div>
    </section>
  );
};

export default TheProblem;
