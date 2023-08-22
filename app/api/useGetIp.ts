import { useState, useEffect } from "react";

export function useGetIP() {
    // Prepare a constant `ip` with empty data by default
    const [ip, setIp] = useState("");

    const getIp = async () => {
        // Connect ipapi.co with fetch()
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        // Set the IP address to the constant `ip`
        setIp(data.ip);
    };

    // Run `getIP` function above just once when the page is rendered
    useEffect(() => {
        getIp();
    }, []);

    return [ip];
}