import styles from "./layout.module.css";

export default function Layout({ children } : any) {
  const className = styles.container;

  return <div className={className}>{children}</div>;
}