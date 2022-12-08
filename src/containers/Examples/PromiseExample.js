import React, { useEffect } from 'react';

function PromiseExample(props) {

    const one = () => {
        return "One";
    }

    const two = () => {
        // With Promise

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Two");
            }, 2000);
        })


        // without Promise
        // setTimeout(() => {
        //     return "Two"
        // }, 2000);
    }

    const Three = () => {
        return "Three"
    }

    const All = async () => {
        const oneAns = one();
        console.log(oneAns);

        const twoAns = await two();
        console.log(twoAns);

        const threeAns = Three();
        console.log(threeAns);
    }

    const print = (z) => {
        console.log(z);
    }

    const sum = (a, b, callbackFun) =>{
        let sum=0;
        sum = a+b;
        callbackFun(sum)
    } 

    sum(10,20,print)



    useEffect(() => {
        All();
    }, [])

    return (
        <div>

        </div>
    );
}

export default PromiseExample;