// components/AppContext.js
import React, { useEffect, useState } from "react";

const Context = React.createContext({
  points: 0,
  submittedLevel: new Map<number, number>(),
  addPoints: (num: number) => {},
  addSubmittedLevel: (level: number, points: number) => {},
  batches: new Map<number, number>(),
});

export default Context;