import httpRequest from '../utils/httpRequest';

export const useIntroductionApi = () => {
    const getIntro = async () => {
        try {
            const res = await httpRequest.get('introduction');
            console.log(res.data);
            return res.data;
        } catch (error) {
            console.log(error);
            return error.response;
        }
    };

    const getIntroById = async (id) => {
        try {
            const res = await httpRequest.get(`introduction/${id}`);
            console.log(res.data);
            return res?.data;
        } catch (error) {
            console.log(error);
            return error.response;
        }
    };

    const createIntro = async (data) => {
        try {
            const res = await httpRequest.post('introduction', data);
            console.log(res.data);
            return res?.data;
        } catch (error) {
            console.log(error);
            return error.response;
        }
    };

    const updateIntro = async (id, data) => {
        try {
            const res = await httpRequest.put(`introduction/${id}`, data);
            console.log(res.data);
            return res?.data;
        } catch (error) {
            console.log(error);
            return error.response;
        }
    };

    const deleteIntro = async (id) => {
        try {
            const res = await httpRequest.delete(`introduction/${id}`);
            console.log(res.data);
            return res?.data;
        } catch (error) {
            console.log(error);
            return error.response;
        }
    };

    const updateIntroStatus = async (id, status) => {
        try {
            const res = await httpRequest.put(`introduction/${id}/is-applied`, { status });
            console.log(res.data);
            return res?.data;
        } catch (error) {
            console.log(error);
            return error.response;
        }
    };

    const uploadImage = async (id, data) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };

            const res = await httpRequest.post(`members/${id}/upload-image`, data, config);

            // Kiểm tra response có chứa hình ảnh hợp lệ không
            if (res?.data?.data?.image && res.data.data.image.startsWith('https://res.cloudinary.com/')) {
                return res.data.data; // Trả về toàn bộ thông tin user đã cập nhật
            } else {
                throw new Error('Invalid image URL format');
            }
        } catch (error) {
            console.error('Upload error:', error.response?.data || error.message || error);
            throw new Error(error.response?.data?.message || 'Upload failed. Please try again.');
        }
    };
    let introductionServices = {
        getIntro,
        getIntroById,
        createIntro,
        updateIntro,
        deleteIntro,
        updateIntroStatus,
        uploadImage,
    };

    return introductionServices;
};
