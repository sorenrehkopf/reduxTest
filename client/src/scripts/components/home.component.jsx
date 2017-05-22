import React, {Component} from 'react';

class Home extends Component{

	render(){
		return(<div>
					hello home!!
					{store.user.name}
				</div>
			)
	}

};

export default Home;