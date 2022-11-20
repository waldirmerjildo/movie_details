import { FaSpinner } from 'react-icons/fa';
import styles from '../css/Spiner.module.css';

export function Spinner() {
    return (
        <div className={styles.spinner}>
            <FaSpinner className={styles.spinning} size={60}/>
        </div>
    )
}
