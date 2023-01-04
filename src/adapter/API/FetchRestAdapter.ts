import axios from 'axios';
import { TablesCRUD } from '../../types';

class FetchRestAdapter implements TablesCRUD.IApi {
    private static instance: FetchRestAdapter;
    constructor() {
        if (!FetchRestAdapter.instance) {
            FetchRestAdapter.instance = this;
        }
        return FetchRestAdapter.instance;
    }

    public async get<IRequest, IResponse>(url: string, request: IRequest) {
        return await axios.get<IResponse>(url, {
            params: request,
        });
    }
}

export { FetchRestAdapter };
