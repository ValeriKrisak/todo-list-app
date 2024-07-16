import api from "./api";

export const fetchAllData = async () => {
    try {
        const response = await api.get("/todolists");
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

export const fetchListData = async (id) => {
    try {
        const response = await api.get(`/todolists/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching list data:", error);
        throw error;
    }
}