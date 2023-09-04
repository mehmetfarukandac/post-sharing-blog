import axios from "axios";
const baseURL = "https://jsonplaceholder.typicode.com";

export const getAllPosts = async () => {
    try {
        const response = await axios.get(`${baseURL}/posts`);
        return { success: true, message: response.data };
    } catch (error) {
        // Hata durumunda hata mesajını döndür
        return { success: false, message: error.response.data.message };
    }
};
export const createPost = async (title, body, userId) => {
    try {
        const response = await axios.post(`${baseURL}/posts`, {
            title,
            body,
            userId
        });
        return { success: true, message: response.data };
    } catch (error) {
        // Hata durumunda hata mesajını döndür
        return { success: false, message: error.response.data.message };
    }
};
export const updatePost = async (title, body, userId, postId) => {
    try {
        const response = await axios.put(`${baseURL}/posts/${postId}`, {
            postId,
            title,
            body,
            userId
        });
        return { success: true, message: response.data };
    } catch (error) {
        // Hata durumunda hata mesajını döndür
        return { success: false, message: error.response.data.message };
    }
};
export const deletePost = async (postId) => {
    try {
        const response = await axios.delete(`${baseURL}/posts/${postId}`); 
        return { success: true, message: response.data };
    } catch (error) {
        // Hata durumunda hata mesajını döndür
        return { success: false, message: error.response.data.message };
    }
};