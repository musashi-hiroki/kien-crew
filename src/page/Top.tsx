import { useEffect, useState } from "react";
import WhatsUp from "./WhatsUs";

export default function Top(){
    const [width, setWidth] = useState<number>(document.body.clientWidth)

    useEffect(() => {
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    },[])
    function onResize(){
        setWidth(document.body.clientWidth)
    }
    return(
        <>
            <img src="/src/assets/kien_top.JPG" width={width} className="fade-in mb-5"/>
            <WhatsUp></WhatsUp>
        </>
    )

}