import { useState } from 'react';

import { Child1_1 } from './Child1_1';
import { Child1_2 } from './Child1_2';

export function Parent1() {
    const [childrenWidth, setChildrenWidth] = useState<number[]>([0, 0]);

    function handleOnSetSizeChild(w: number, i: number) {
        console.log({w});
        childrenWidth[i] = w;
        setChildrenWidth([...childrenWidth]);  // 配列を作り直さないと、useEffectが発火しない
    }

    console.log("redraw");

    return (
        <>
            {/* 都度計算しないと、初期値の幅のままになる */}
            <svg
                width={childrenWidth.reduce((acc, w)=>acc+w, 0)}
            >
                <rect
                    x={0}
                    y={0}
                    width={childrenWidth.reduce((acc, w)=>acc+w, 0)}
                    height={150}
                    fill="#FF8C9E"
                />
                <g
                    transform={`translate(0, 0)`}
                >
                    <Child1_1
                        onSetSize={(w) => handleOnSetSizeChild(w, 0)}
                    />
                </g>
                <g
                    transform={`translate(${childrenWidth[0]}, 0)`}
                >
                    <Child1_2
                        onSetSize={(w) => handleOnSetSizeChild(w, 1)}
                    />
                </g>
            </svg>
        </>
    );
}
