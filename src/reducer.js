const initialState = {
	name: '',
};

export default (state = initialState, { type, payload }) => {
	switch(type) {
		case 'SET_NAME': {
			return {
				...state,
				name: payload,
			}
		}
		default: {
			return state;
		}
	}
};
