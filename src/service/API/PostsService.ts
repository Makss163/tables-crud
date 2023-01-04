import { FetchRestAdapter } from "../../adapter/API/FetchRestAdapter";
import { TablesCRUD } from "../../types"; 
class PostsService implements TablesCRUD.IPostsService {
    apiAdapter: TablesCRUD.IApi;
    constructor() {
        this.apiAdapter = new FetchRestAdapter();
    }

    public async getList(request: TablesCRUD.IPostListRequest) {
        const url = "https://jsonplaceholder.typicode.com/posts";
        try {
            const response = await this.apiAdapter.get<TablesCRUD.IPostListRequest, TablesCRUD.IPost[]>(url, request);
            return response.data;
        } catch (error) {
            throw error
        }
    }

    public async getOne(id: number) {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        try {
            const response = await this.apiAdapter.get<{}, TablesCRUD.IPost>(url, {});
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default PostsService;
