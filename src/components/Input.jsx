import styles from './Input.module.css';

const Input = ({ label, ...props }) => (
  <div className={styles.inputGroup}>
    {label && <label className={styles.label}>{label}</label>}
    <input className={styles.input} {...props} />
  </div>
);

export default Input; 