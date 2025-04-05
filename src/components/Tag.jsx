import React, { useEffect, useState } from "react";

import useGif from "../hooks/useGif";

const Tag = () => {

    const [tag, setTag] = useState('');

    const {gif,loading,error,fetchGif} =useGif(tag);
    const clickHandler = () => fetchGif(tag); // Simplified


    
       
    return (
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col items-center p-6 gap-6">
        <h1 className="text-2xl font-bold text-gray-800 capitalize">
          Random {tag} GIF Generator
          <span className="block w-38 h-1 bg-green-500 rounded-full mx-auto mt-2"></span>
        </h1>
        
        <div className="w-full min-h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          {error ? (
            <div className="text-center p-4">
              <p className="text-red-500 font-medium">{error}</p>
              <button 
                onClick={clickHandler}
                className="mt-2 text-sm text-green-600 hover:underline"
              >
                Try Again
              </button>
            </div>
          ) : loading ? (
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-600">Loading your GIF...</p>
            </div>
          ) : (
            <img 
              src={gif} 
              alt="Random GIF" 
              className="w-full h-64 object-cover rounded-lg shadow-sm transition-opacity duration-300 hover:opacity-90"
            />
          )}
        </div>
      
        <div className="w-full space-y-2">
          <label htmlFor="gif-tag" className="block text-sm font-medium text-gray-700">
            Search by tag (optional)
          </label>
          <input 
            id="gif-tag"
            type="text" 
            onChange={(event) => setTag(event.target.value)}
            value={tag}
            placeholder="e.g. cats, dogs, funny"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
          />
        </div>
      
        <button
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          onClick={clickHandler}
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </span>
          ) : (
            "Generate New GIF"
          )}
        </button>
      </div>
    );
};

export default Tag;