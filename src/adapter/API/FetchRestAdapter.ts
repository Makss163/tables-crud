import axios from 'axios';
import { TablesCRUD } from '../../types';

class FetchRestAdapter implements TablesCRUD.IFetch {
    private static instance: FetchRestAdapter;
    constructor() {
        if (!FetchRestAdapter.instance) {
            FetchRestAdapter.instance = this;
        }
        return FetchRestAdapter.instance;
    }
}
