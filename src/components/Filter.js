import React from 'react';

const Filter = props => {
    
    return (
        <div className="simple-flex-row">
            <label> Followers: 
                <select value={props.followFilter} onChange={props.handleFilterChange} >
                    <option>All</option>
                    <option>My Followers</option>
                    <option>Who I Follow</option>
                </select>
            </label>
            {/* <label> Favorites? 
                <select value={onlyFavs} onChange={handleFilterChange}>
                    <option value="All">All</option>
                    <option value="Faves">Just Favs</option>
                </select>
            </label> */}
        </div>
    )
}

export default Filter;