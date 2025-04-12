import styles from './Button.module.css';



function ClickHandler() {
    const handleClick = () => {
      alert("Button clicked! 🤘");
    };
  
    return <button className={styles.btn} onClick={handleClick}>Click Me</button>;
  }
  
export default ClickHandler;