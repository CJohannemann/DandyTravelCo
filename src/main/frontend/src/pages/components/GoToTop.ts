import { useEffect } from "react";
import { useLocation } from "react-router";

export default function GoToTop() {
    const routePath = useLocation();
    const onTop = () => {
        window.scroll(0,0);
    }
    useEffect(() => {
        onTop()
    }, [routePath]);
    return null;
}