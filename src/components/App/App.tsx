import React, { useEffect, useState } from 'react';
import Counter from '../Counter';

import styles from './App.module.scss';

const App: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/nakazeni-vyleceni-umrti-testy.json')
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                // get newest count
                const { data } = res;
                const lastData = data[data.length - 1];
                setCount(lastData.kumulativni_pocet_umrti);
            });
    })

    return (
        <div className={styles.app}>
            <Counter
                count={count}
            />
        </div>
    );
}

export default App;
