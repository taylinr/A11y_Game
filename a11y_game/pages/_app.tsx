import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Context from "../components/Context/Context";
import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import Header from "../components/Header/Header";
import theme from "../theme";
import { useState, useEffect } from "react";

const A11y = ({ Component, pageProps }: AppProps) => {
  const [currentPoints, setPoints] = useState<number>(function () {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("currentPoints") === null
        ? 0
        : parseInt(window.localStorage.getItem("currentPoints") + "");
    } else {
      return 0;
    }
  });

  useEffect(() => {
    window.localStorage.setItem("currentPoints", "" + currentPoints);
  }, [currentPoints]);

  const addPoints: (num: number) => void = (num: number) => {
    setPoints(currentPoints + num);
  };

  const [submittedLevel, setLevel] = useState<Map<number, number>>(
    typeof window !== "undefined"
      ? new Map(JSON.parse(window.localStorage.getItem("submittedLevel") + ""))
      : new Map<number, number>()
  );

  useEffect(() => {
    window.localStorage.setItem(
      "submittedLevel",
      JSON.stringify(Array.from(submittedLevel.entries())) + ""
    );
  }, [submittedLevel]);

  const addSubmittedLevel: (level: number, points: number) => void = (
    level: number,
    points: number
  ) => {
    setLevel((map) => new Map(map.set(level, points)));
  };

  const [batches, setBatches] = useState<Map<number, number>>(
    typeof window !== "undefined"
      ? new Map(JSON.parse(window.localStorage.getItem("batches") + ""))
      : new Map<number, number>()
  );

  useEffect(() => {
    window.localStorage.setItem(
      "batches",
      JSON.stringify(Array.from(batches.entries())) + ""
    );
  }, [batches]);

  useEffect(() => {
    let points: number = 0;
    let batch: number = 0;
    if (
      submittedLevel.has(1) &&
      submittedLevel.has(2) &&
      submittedLevel.has(3) &&
      submittedLevel.has(4)
    ) {
      const points1 = submittedLevel.get(1);
      const points2 = submittedLevel.get(2);
      const points3 = submittedLevel.get(3);
      const points4 = submittedLevel.get(4);

      points =
        (points1 != undefined ? points1 : 0) +
        (points2 != undefined ? points2 : 0) +
        (points3 != undefined ? points3 : 0) +
        (points4 != undefined ? points4 : 0);

      if (points < 5 && points > 0) {
        batch = 1;
      } else if (points < 9) {
        batch = 2;
      } else {
        batch = 3;
      }

      setBatches((map) => new Map(map.set(1, batch)));
    }

    if (submittedLevel.has(5) && submittedLevel.has(6)) {
      const points5 = submittedLevel.get(5);
      const points6 = submittedLevel.get(6);

      points =
        (points5 != undefined ? points5 : 0) +
        (points6 != undefined ? points6 : 0);

      if (points < 3 && points > 0) {
        batch = 1;
      } else if (points < 6) {
        batch = 2;
      } else {
        batch = 3;
      }

      setBatches((map) => new Map(map.set(2, batch)));
    }

    if (submittedLevel.has(7) && submittedLevel.has(8)) {
      const points7 = submittedLevel.get(7);
      const points8 = submittedLevel.get(8);

      points =
        (points7 != undefined ? points7 : 0) +
        (points8 != undefined ? points8 : 0);

      if (points < 3 && points > 0) {
        batch = 1;
      } else if (points < 6) {
        batch = 2;
      } else {
        batch = 3;
      }

      setBatches((map) => new Map(map.set(3, batch)));
    }

    if (submittedLevel.has(9)) {
      const points9 = submittedLevel.get(9);

      points = points9 != undefined ? points9 : 0;

      if (points < 2 && points > 0) {
        batch = 1;
      } else if (points < 3) {
        batch = 2;
      } else {
        batch = 3;
      }

      setBatches((map) => new Map(map.set(4, batch)));
    }
  }, [submittedLevel]);

  const userSettings = {
    points: currentPoints,
    submittedLevel: submittedLevel,
    addPoints: addPoints,
    addSubmittedLevel: addSubmittedLevel,
    batches: batches,
  };

  return (
    <Context.Provider value={userSettings}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="circles">
          <Header />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </Context.Provider>
  );
};
export default A11y;
