import styles from "@/styles/Home.module.css";


export function Headline(props) {
    return ( 
<div>
    <h1 className={styles.title}>{props.title}</h1><br />

    <p className={styles.description}>
    Get started by editing{" "}
    <code ClassName={styles.code}>pages{props.page}.js</code>
    </p>
</div>
    );

}