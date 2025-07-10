
import { createContext, useState, useEffect} from "react";

export const WatchlistContext = createContext();


export const WatchlistProvider = ({children}) =>{
    const [watchlist, setWatchlist] = useState ([]);
    const [genrelist,setGenrelist] = useState([]);
    
    useEffect (()=>{
        let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=725939c7a3ed60964d110e56412c582a
`;
    
         fetch (url)
      .then((response)=> response.json())
      .then((data)=>setGenrelist(data.genres || []));
    
      },[]);
     


    const toggleWatchlist = (movie) => {
        const index = watchlist.findIndex((m) =>m.id === movie.id);

        if (index === -1){
            setWatchlist ([...watchlist,movie]);

        }else {
            setWatchlist([
                ...watchlist.slice(0, index),
                ...watchlist.slice(index+1),
            ]);
            
        }
    }
    console.log("watchlist",watchlist)
    return(
        <WatchlistContext.Provider value={{watchlist,toggleWatchlist, genrelist}}>
            {children}
        </WatchlistContext.Provider>
    )

};