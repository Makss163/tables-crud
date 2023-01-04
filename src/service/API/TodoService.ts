import { FetchRestAdapter } from "../../adapter/API/FetchRestAdapter";
import { TablesCRUD } from "../../types";

/**  */
class TodoService implements TablesCRUD.ITodoService {
    public apiAdapter: TablesCRUD.IApi;
    constructor() {
        this.apiAdapter = new FetchRestAdapter();
    }

    public async getList(request: TablesCRUD.IPostListRequest) {
        const url = "https://jsonplaceholder.typicode.com/todos";
        try {
            const response = await this.apiAdapter.get<TablesCRUD.IPostListRequest, TablesCRUD.ITodo[]>(url, request);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    public async getOne(id: number) {
        const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
        try {
            const response = await this.apiAdapter.get<{}, TablesCRUD.ITodo>(url, {});
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default TodoService;
