import { FetchRestAdapter } from "../../adapter/API/FetchRestAdapter";
import { TablesCRUD } from "../../types"; 
class ICommonFetchService implements TablesCRUD.ICommonFetchService {
    apiAdapter: TablesCRUD.IApi;
    constructor() {
        this.apiAdapter = new FetchRestAdapter();
    }

    public async getList<IRequest, IResponse>(url: string, request: IRequest) {
        try {
            const response = await this.apiAdapter.get<IRequest, IResponse>(url, request);
            return response.data;
        } catch (error) {
            throw error
        }
    }

    public async getOne<IResponse>(url: string) {
        try {
            const response = await this.apiAdapter.get<{}, IResponse>(url, {});
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default ICommonFetchService;
