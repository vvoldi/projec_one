import axios from "axios";

export default class PostService {
    static async beforeParams() {
        const response = await axios.get(
            "https://6159aaf6601e6f0017e5a29f.mockapi.io/posts")

        const totalCount = response.data.length;
        return totalCount
    }

    static async getAll(limit, page) {
        
        const response = await axios.get(
            "https://6159aaf6601e6f0017e5a29f.mockapi.io/posts" ,
            {
                params: {
                    page: page,
                    limit: limit
                },
            }
        );
        
        return response;
    }

    static async getById(id) {
        
        const response = await axios.get("https://6159aaf6601e6f0017e5a29f.mockapi.io/posts/" + id);
        return response;
    }
    static async getCommentsByPostId(id) {
        
        const response = await axios.get(`https://6159aaf6601e6f0017e5a29f.mockapi.io/posts/${id}/comments`);
        return response;
    }
    
}
