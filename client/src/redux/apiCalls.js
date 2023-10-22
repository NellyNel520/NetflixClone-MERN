import {
	loginFailure,
	loginStart,
	loginSuccess,
	updateUserStart,
	updateUserSuccess,
	updateUserFailure,
} from './userRedux'
import {publicRequest, userRequest} from './requestMethods'


export const login = async (dispatch, user) => {
	dispatch(loginStart())
	try {
		const res = await publicRequest.post('/auth/login', user)
		dispatch(loginSuccess(res.data))
	} catch (err) {
		dispatch(loginFailure())
	}
}

export const registerUser = async (data) => {
	try {
		const res = await publicRequest.post('/auth/register', data)
		return res.data
	} catch (error) {
		throw error 
	}
}
export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    // update
    const res = await userRequest.put(`users/${id}`, user);
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};