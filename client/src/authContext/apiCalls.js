
import {publicRequest, userRequest} from './requestMethods'



export const registerUser = async (data) => {
	try {
		const res = await publicRequest.post('/auth/register', data)
		return res.data
	} catch (error) {
		throw error 
	}
}
