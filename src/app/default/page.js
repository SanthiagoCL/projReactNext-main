'use client'

import Principal from '../components/Principal';
import Parametro from '../components/Parametro'
import { Texto1, Texto2, Texto3 } from '../components/Parametro'

export default function Default() {
    return (
        <div>
            <Principal />
            <Parametro />
            <Texto1 />
            <Texto2 />
            <Texto1 />
            <Texto2 />
            <Texto3 cor='green' tipo='bold' >
                .... Texto texto 3 ....
            </Texto3>
        </div>
    );
}