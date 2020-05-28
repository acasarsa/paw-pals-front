import React from 'react';

const Filter = props => {
    const {followFilter, handleFilterChange} = props
    
    return (
        <div className="simple-flex-row">
            <label> Followers: 
                <select value={followFilter} onChange={handleFilterChange} >
                    <option name={"All"} >All</option>
                    <option name={"My Followers"} >My Followers</option>
                    <option name={"Who I Follow"} >Who I Follow</option>
                    <option name={"Who I Don't Follow"} >Who I Don't Follow</option>
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