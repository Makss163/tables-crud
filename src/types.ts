import { AxiosResponse } from "axios";

export namespace TablesCRUD {

    export interface IApi {
        get: <IRequest, IResponse>(url: string, request: IRequest) => Promise<AxiosResponse<IResponse>>;
    }

    export interface ICommonFetchService {
        apiAdapter: IApi;
        getList: <IRequest, IResponse>(url: string, request: IRequest) => Promise<IResponse>;
        getOne: <IResponse>(url: string) => Promise<IResponse>;
    }

    export interface IPostsService {
        apiAdapter: IApi;
        getList: (request: IPostListRequest) => Promise<IPost[]>;
        getOne: (id: number) => Promise<IPost>;
    }

    export interface ITodoService {
        apiAdapter: IApi
        getList: (request: IPostListRequest) => Promise<ITodo[]>;
        getOne: (id: number) => Promise<ITodo>;
    }

    export interface IPost {
        id: number;
        title: string;
        body: string;
    }

    export interface ITodo {
        userId: number;
        id: number
        title: string;
        completed: boolean;
    }

    export interface IPostListRequest {
        _limit: number;
        _page: number;
    }
}