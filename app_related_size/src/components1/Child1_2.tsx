import { useState, useEffect } from "react";

interface Child1_2Props {
    onSetSize: (w: number) => void;
}
export function Child1_2({
    onSetSize,
}: Child1_2Props) {
    const [myWidth, setMyWidth] = useState<number>(150);

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
                fill="#B4D6CD"
                onClick={handleOnClick}
            />
            <text
                x={0}
                y={15}
                fontSize={13}
                fill="#000"
            >
                Child1_2, width:{myWidth}
            </text>
        </>
    )
}