import React from 'react';
import numberWithSpaces from '../../helpers/addSpacesToNumbers';

import styles from './Counter.module.scss';

interface IProps {
    count: number;
}

const Counter: React.FC<IProps> = ({
    count,
}) => {
    return (
        <div className={styles.counter}>
            <span className={styles.number}>{numberWithSpaces(count)}</span>
            <span className={styles.unit}>lidí</span>
        </div>
    );
};

export default Counter;
