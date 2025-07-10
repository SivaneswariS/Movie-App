
import React from "react";


const GenreFilter= ({genrelist, setSelectedGenre}) => {
    

    return (
        <select className="p-2 mb-4 bg-gray-900 bg-opacity-60 backdrop-blur-md text-blue-400 
        border rounded"
        onChange={(e)=> setSelectedGenre(e.target.value)}>
            <option value="">All Genres</option>
          {genrelist.map((genre) =>{
            return (
                 <option key={genre} value={genre.id}>{genre.name}</option>
            )
          })}
           
        </select>
    )
};

export default GenreFilter;