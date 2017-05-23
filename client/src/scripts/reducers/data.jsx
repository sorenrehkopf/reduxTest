const Data = (state = [], action) => {
	console.log(action);
	switch(action.type){
		case 'SET_DATA':
			return action.data
		default:
			return state;
	}

}

export default Data;