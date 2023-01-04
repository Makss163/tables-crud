import React, { FC, useEffect } from "react";
import useFetching from "../hooks/useFetching";
import TodoService from "../service/API/TodoService";
import { TablesCRUD } from "../types";

const TodoList: FC = () => {
    const { fetching, isFetchLoading, errorContent } = useFetching();
    const todoService = new TodoService();

    useEffect(() => {
        fetching(fetchTodo);
    }, []);

    const fetchTodo = async () => {
        const request: TablesCRUD.IPostListRequest = {
            _limit: 30,
            _page: 1,
        };
        const todoList = await todoService.getList(request);
        console.log(todoList);
    };
    return (
        <div className="main">
            <h1>Todos</h1>
        </div>
    )
};

export default TodoList;
