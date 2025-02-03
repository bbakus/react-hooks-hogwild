import React , {useState} from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogDisplay from "./HogDisplay";
import HogFilter from "./HogFilter";

function App() {

	const [sortedHogs, setSortedHogs] = useState(null)
	const [greased, setGreased] = useState(false)
	

	function hogSort(value){
		setSortedHogs(value)
	}

	function superSortedHogs(){
		let hogsToSort = [...hogs]
		
		if (greased === true){
			return hogs.filter(hog => hog.greased === greased)
		} else if (sortedHogs === "Weight"){
		  return hogsToSort.sort((a, b) => a.weight - b.weight)
		}else if (sortedHogs === "Name"){
			return hogsToSort.sort((a, b) => a.name.localeCompare(b.name))
		}
		
		return hogs  
	  }
	

	function greasy(){
		setGreased(!greased)
	}
	

	return (
		<div className="App">
			<Nav />
			<HogFilter hogs={hogs} hogSort={hogSort} greasy={greasy}/>
			<HogDisplay hogs={superSortedHogs}/>
		</div>
	);
}

export default App;
