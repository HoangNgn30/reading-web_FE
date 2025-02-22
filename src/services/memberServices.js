import httpRequest from '../utils/httpRequest';

export const useMemberApi = () => {
    const getMembers = async () => {
        try {
            const res = await httpRequest.get('members');
            console.log(res.data);
            return res.data;
        } catch (error) {
            console.log(error);
            return error.response;
        }
    };

    const getMemberById = async (id) => {
        try {
            const res = await httpRequest.get(`members/${id}`);
            console.log(res.data);
            return res?.data;
        } catch (error) {
            console.log(error);
            return error.response;
        }
    };

    const createMember = async (data) => {
        try {
            const res = await httpRequest.post('members', data);
            console.log(res.data);
            return res?.data;
        } catch (error) {
            console.log(error);
            return error.response;
        }
    };

    const updateMember = async (id, data) => {
        try {
            const res = await httpRequest.put(`members/${id}`, data);
            console.log(res.data);
            return res?.data;
        } catch (error) {
            console.log(error);
            return error.response;
        }
    };

    const deleteMember = async (id) => {
        try {
            const res = await httpRequest.delete(`members/${id}`);
            console.log(res.data);
            return res?.data;
        } catch (error) {
            console.log(error);
            return error.response;
        }
    };

    const updateMemberStatus = async (id, status) => {
        try {
            const res = await httpRequest.put(`members/${id}/is-applied`, { status });
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
    

    let memberServices = {
        getMembers,
        getMemberById,
        createMember,
        updateMember,
        deleteMember,
        updateMemberStatus,
        uploadImage,
    };

    return memberServices;
};
