export namespace TablesCRUD {

    export interface IFetch {}

    export interface IPostsService {
        apiAdapter: IFetch
    }

    export interface ITodoService {
        apiAdapter: IFetch
    }
}