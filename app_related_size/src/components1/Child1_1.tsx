import { useState, useEffect } from "react";

interface Child1_1Props {
    onSetSize: (w: number) => void;
}
export function Child1_1({
    onSetSize,
}: Child1_1Props) {
    const [myWidth, setMyWidth] = useState<number>(200);

    useEffect(()=>{
        onSetSize(myWidth);
    }, []);

    function handleOnClick() {
        const newWidth: number = myWidth+10;
        setMyWidth(newWidth);
        onSetSize(newWidth);
    }

    return (
        <>
            <rect
                x={0}
                y={0}
                width={myWidth}
                height={100}
                fill="#FFDA76"
                onClick={handleOnClick}
            />
            <text
                x={0}
                y={15}
                fontSize={13}
                fill="#000"
            >
                Child1_1, width:{myWidth}
            </text>
        </>
    )
}