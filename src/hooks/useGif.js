import React from "react";
import { useState, useEffect } from "react";

const API_KEY = 'Nuk45SEpA54qlUQgLdLt9rhY7ecHr6PQ';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const useGif = ()=>{
    const [gif, setGif] = useState('');

    const [loading, setLoading] = useState(false); // Fixed: boolean instead of string
    const [error, setError] = useState(null); // Added error state

   

    const fetchGif = async (tag) => {
        try {
            setLoading(true);
            console.log(tag);
            
            setError(null); // Reset error on retry
            const res = await fetch(tag ? `${url}&tag=${tag}` : url);
            const { data } = await res.json();
            const imageSource = data.images.downsized_large.url;
            setGif(imageSource);
        } catch (error) {
            console.error("Error fetching GIF:", error);
            setError("Failed to load GIF. Try again!"); // User-friendly error
        } finally {
            setLoading(false); // Always set loading to false
        }
    };

    useEffect(() => {
        fetchGif();
    }, []);

    return {gif,loading,error,fetchGif}



}
export default useGif;