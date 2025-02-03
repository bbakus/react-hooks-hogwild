import React, {useState} from "react";


function HogDisplay({hogs}){

    
    const [selectedHog, setSelectedHog] = useState(null)

    const sortedHogs = hogs()

    return(
        <div className='ui grid container'>
            
               {sortedHogs.map( hog => {
                return(
                <div className="ui eight wide column">
                    <div className="pigTile" onMouseEnter={() => setSelectedHog(hog.name)}
                        onMouseLeave={() => setSelectedHog(null)}>
                        
                        {selectedHog === hog.name ? 
                        <ul className="detail-list">
                            <li key={hog.name}></li>
                            <li>Specialty: {hog.specialty}</li>
                            <li>Weight: {hog.weight}</li>
                            <li>Greased: {hog.greased === true ? "Yes": "No"}</li>
                            <li>Highest Medal Achieved: {hog["highest medal achieved"]}</li>
                        </ul>
                        :
                        <div className="ternary-image">
                        <img src={hog.image} className="hog-image"/>
                        <h3 className="hog-name">{hog.name}</h3>
                        </div>
                    }
                    
                    </div>
                </div>
                
                )})} 

        </div>
    )
}

export default HogDisplay

