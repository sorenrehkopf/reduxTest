function getFormData(form){
	var data = {},
		inputs = form.querySelectorAll('[name]');

	for(let i = 0;i<inputs.length;i++){
		data[inputs[i].getAttribute('name')] = inputs[i].value;
	}

	return data;

}

export default getFormData;