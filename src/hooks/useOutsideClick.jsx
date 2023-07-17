import useLatest from "./useLatest";
import { useEffect } from "react";


export default function useOutsideClick(refNode, handler, attached = true) {

    const latestHandler = useLatest(handler);

    useEffect(() => {

        if (!attached) return;

        const handleOutsideClick = (e) => {
            if (!refNode.current) return;
            if (!refNode.current.contains(e.target)) {
                latestHandler.current();
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => document.removeEventListener('click', handleOutsideClick);
    }, [refNode, latestHandler, attached]);
};