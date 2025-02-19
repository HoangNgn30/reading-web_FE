import httpRequest from '../utils/httpRequest';

export const useAuthApi = () => {
    const login = async ({ email, password }) => {
        try {
            const res = await httpRequest.post(
                'auth/login',
                {
                    email,
                    password,
                },
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                },
            );
            console.log(res.data);
            return res?.data;
        } catch (error) {
            console.log(error);
            return error.response;
        }
    };

    const signUp = async (data) => {
        try {
            const res = await httpRequest.post('auth/register', data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            console.log(res.data);
            return res?.data;
        } catch (error) {
            console.log(error);
            return error.response;
        }
    };

    let authServices = {
        login,
        signUp,
    };

    return authServices;
};
