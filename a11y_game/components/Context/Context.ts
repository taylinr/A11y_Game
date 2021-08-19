// components/AppContext.js
import React from "react";

const Context = React.createContext({
    points: 0,
    submittedLevel: new Map<number, number>(),
    addPoints: (num: number) => { },
    addSubmittedLevel: (level: number, points: number) => { },
});


export default Context;