import React from "react";

const SearchBox = ({ seachfield, searchChange}) => {
    return(
        <div className="pa2">
            
            <input 
                className="pa2 ba b--creen bg-lightest-blue"
                type="search" 
                placeholder="search robots"
                onChange={searchChange}
            />

        </div>
        
    )
    
}

export default SearchBox;