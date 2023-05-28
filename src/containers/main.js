import React, {useState, useEffect} from 'react';
import wasmModule from '../../wasm/wasm-adder.wasm';
import * as AsBind from 'as-bind';

export const Main = () => {
    const [result, setResult] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const wasm = await AsBind.instantiate(wasmModule);
            const {add} = wasm.exports;
            const data = add(1, 2);
            setResult(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Assembly Demo</h2>
            <div>{result}</div>
        </div>
    );
};
