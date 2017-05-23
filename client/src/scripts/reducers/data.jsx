const Data = (state = {}, action) => {

	switch(action.type){
		case 'SET_DATA':
			return {
				user:action.data
			}
		default:
			return state;
	}

}

export default Data;