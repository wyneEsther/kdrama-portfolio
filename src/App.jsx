import { useState } from 'react';
import { DRAMA_DATA } from './data/dramas';

function App() {
  // 1. Initialize 'watchlist' as an empty array
  const [watchlist, setWatchlist] = useState([]);

  // 2. The Logic Function
  const toggleWatchlist = (id) => {
    if (watchlist.includes(id)) {
      //  If it's already there, REMOVE it (Filter it out)
      setWatchlist(watchlist.filter(item => item !== id));
    } else {
      // If it's NOT there, ADD it (Keep old ones + new id)
      setWatchlist([...watchlist, id]);
    }
  };

  return (
    <div>
       <h1>K-Drama Hub</h1>
       <p>Items in list: {watchlist.length}</p>
      
    </div>
  );
}