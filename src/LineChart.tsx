import * as React from "react";
import { Line } from "react-chartjs-2";
import { calcEulerMethod } from "./script/calcEulerMethod";
import { calcCompleteImplicitMethod } from "./script/calcCompleteImplicitMethod";
import { calcCrankNicholsonMethod } from "./script/calcCrankNicholsonMethod";
import { calcRungeKuttaMethod } from "./script/calcRungeKutta";
import "chartjs-plugin-zoom";

const analyticalSolutionEquation = (t: number) => Math.exp(-3 * t);

const dx_dt = (x: number) => -3 * x;

const initialValue = 1.0;

let eulerValue = initialValue;
let completeValue = initialValue;
let crankValue = initialValue;
let rungeValue = initialValue;

export const LineChart = () => {
  const [diff, setDiff] = React.useState(10);

  const t_s = Array(101)
    .fill(1)
    .map((_, index) => index / 100);

  return (
    <div className="line">
      <Line
        data={{
          labels: t_s,
          datasets: [
            {
              label: "オイラー陽解法",
              data: t_s.map((t, index) => {
                if (index === 0) {
                  return eulerValue;
                }
                if (index % diff === 0) {
                  eulerValue = calcEulerMethod(eulerValue, diff / 100, dx_dt);
                  return eulerValue;
                } else {
                  null;
                }
              }),
              backgroundColor: "#FFCD64",
              borderColor: "#FFCD64",
              borderWidth: 2,
              fill: false,
            },
            {
              label: "完全陰解法",
              data: t_s.map((t, index) => {
                if (index === 0) {
                  return completeValue;
                }
                if (index % diff === 0) {
                  completeValue = calcCompleteImplicitMethod(
                    completeValue,
                    diff / 100,
                    -3
                  );
                  return completeValue;
                } else {
                  null;
                }
              }),
              backgroundColor: "#5AEBE4",
              borderColor: "#5AEBE4",
              borderWidth: 2,
              fill: false,
            },
            {
              label: "クランクニコルソン法",
              data: t_s.map((t, index) => {
                if (index === 0) {
                  return crankValue;
                }
                if (index % diff === 0) {
                  crankValue = calcCrankNicholsonMethod(
                    crankValue,
                    diff / 100,
                    -3
                  );
                  return crankValue;
                } else {
                  null;
                }
              }),
              backgroundColor: "#8359FF",
              borderColor: "#8359FF",
              borderWidth: 2,
              fill: false,
            },
            {
              label: "ルンゲクッタ法",
              data: t_s.map((t, index) => {
                if (index === 0) {
                  return rungeValue;
                }
                if (index % diff === 0) {
                  rungeValue = calcRungeKuttaMethod(
                    rungeValue,
                    diff / 100,
                    dx_dt
                  );
                  return rungeValue;
                } else {
                  null;
                }
              }),
              backgroundColor: "#EB4148",
              borderColor: "#EB4148",
              borderWidth: 2,
              fill: false,
            },
            {
              label: "微分方程式の解",
              spanGaps: true,
              data: t_s.map((t, index) => {
                return analyticalSolutionEquation(t);
              }),
              backgroundColor: "#60FF48",
              borderColor: "#60FF48",
              borderWidth: 2,
              fill: false,
              pointRadius: 0.1
            },
          ],
        }}
        options={{
          tooltips: {
            mode: "point",
          },
          responsive: true,
          plugins: {
            zoom: {
              pan: {
                enabled: true,
              },
              zoom: {
                enabled: true,
                mode: "xy",
              },
            },
          },
        }}
      />

      <div className="form">
        <input
          type="range"
          max="50"
          min="1"
          value={diff}
          onChange={(e) => {
            const v = Number(e.target.value);
            if (v >= 1 && v <= 50) {
              eulerValue = initialValue;
              completeValue = initialValue;
              crankValue = initialValue;
              rungeValue = initialValue;
              setDiff(v);
            }
          }}
        />
        時間の刻み幅: {diff / 100}s<div>min: 0.01s ~ max: 0.5s</div>
      </div>
    </div>
  );
};
