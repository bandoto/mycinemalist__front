import {useEffect} from "react";

export const useScroll = (callback: () => void) => {
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => document.removeEventListener('scroll', scrollHandler)
    }, [])

    const scrollHandler: EventListener = (e: Event) => {
        const target = e.currentTarget as Document;
        if (target.documentElement.scrollHeight - (target.documentElement.scrollTop + window.innerHeight) < 100) {
            callback()
        }
    }
}