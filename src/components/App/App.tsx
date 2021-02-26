import React, { useEffect, useState } from 'react';
import Counter from '../Counter';

import styles from './App.module.scss';

type MZCRData = {
    modified: string;
    source: string;
    data: Array<{
        datum: string;
        kumulativni_pocet_nakazenych: string;
        kumulativni_pocet_vylecenych: string;
        kumulativni_pocet_umrti: string;
        kumulativni_pocet_testu: string;
        kumulativni_pocet_ag_testu: string;
    }>;
}

const App: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/nakazeni-vyleceni-umrti-testy.json')
            .then((res) => {
                return res.json();
            })
            .then((res: MZCRData) => {
                // get newest count
                const { data } = res;
                const lastData = data[data.length - 1];
                setCount(parseInt(lastData.kumulativni_pocet_umrti, 10));
            });
    })

    return (
        <div className={styles.app}>
            <p className={styles.text}>Už</p>
            <Counter
                count={count}
            />
            <p className={styles.text}>bylo zabito vládou Andreje Babiše.</p>
            <footer className={styles.footer}>
                <p className={styles.footerText}>
                    Data poskytuje
                    <a
                        href="https://onemocneni-aktualne.mzcr.cz/"
                        className={styles.sourceLink}
                    >
                        Ministerstvo zdravotnictví
                    </a>
                    .
                </p>
            </footer>
        </div>
    );
}

export default App;
