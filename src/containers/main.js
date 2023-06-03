import React, {useState, useEffect} from 'react';
// import * as asBind from 'as-bind';
// import wasmModule from '../../wasm/wasm-adder.wasm';

// const wasmModule = fetch('../../wasm/wasm-adder.wasm');

export const Main = () => {
    const [result, setResult] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // const wasm = await asBind.instantiate(wasmModule);
            // const {add} = wasm.exports;
            // const data = add(1, 2);
            // setResult(data);

            const response = await fetch('../../wasm/wasm-adder.wasm');
            const buffer = await response.arrayBuffer();
            const {instance} = await WebAssembly.instantiate(buffer);
            return instance.exports.add(1, 2);
        };

        fetchData()
            .then((data) => {
                console.log('success log');
                console.log(data);
                setResult(data);
            });
    }, []);

    return (
        <div>
            <h2>Assembly Demo</h2>
            <div>{result}</div>
        </div>
    );
};
