import React from "react";
import Greeting from "../components/greeting";

const SayHello = () => {
    return (
        <div>
            <Greeting name='Megan' />
            <Greeting name='John' />
            <Greeting name='Lucy' />
        </div>
    )
}

export default SayHello