import httpRequest from "../utils/httpRequest";

export const useMemberApi = () => {
    const getMembers = async () => {
        try {
            const res = await httpRequest.get("members");
            console.log(res.data);
            return res.data;
        } catch (error) {
            console.log(error);
            return error.response;
        }
    }

    const getMemberById = async (id) => {
        try {
            const res = await httpRequest.get(`members/${id}`);
            console.log(res.data);
            return res?.data;
        } catch (error) {
            console.log(error);
            return error.response;
        }
    }

    const createMember = async (data) => {
        try {
            const res = await httpRequest.post("members", data);
            console.log(res.data);
            return res?.data;
        } catch (error) {
            console.log(error);
            return error.response;
        }
    }

    const updateMember = async (id, data) => {
        try {
            const res = await httpRequest.put(`members/${id}`, data);
            console.log(res.data);
            return res?.data;
        } catch (error) {
            console.log(error);
            return error.response;
        }
    }

    const deleteMember = async (id) => {
        try {
            const res = await httpRequest.delete(`members/${id}`);
            console.log(res.data);
            return res?.data;
        } catch (error) {
            console.log(error);
            return error.response;
        }
    }

    const updateMemberStatus = async (id, status) => {
        try {
            const res = await httpRequest.put(`members/${id}/is-applied`, { status });
            console.log(res.data);
            return res?.data;
        } catch (error) {
            console.log(error);
            return error.response;
        }
    }

    let memberServices = {
        getMembers,
        getMemberById,
        createMember,
        updateMember,
        deleteMember,
        updateMemberStatus,
    };

    return memberServices;
}