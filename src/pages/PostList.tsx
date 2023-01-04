import React, { FC, useState, useEffect } from "react";
import useFetching from "../hooks/useFetching";
import { TablesCRUD } from "../types";
import PostsService from "../service/API/PostsService";

const PostList: FC = () => {
    const postsService = new PostsService();

    const [posts, setPosts] = useState<TablesCRUD.IPost[]>(() => []);
    const {fetching, isFetchLoading, errorContent} = useFetching();

    useEffect(() => {
        fetching(fetchPosts);
    }, []);

    const fetchPosts = async() => {
        const request: TablesCRUD.IPostListRequest = {
            _limit: 30,
            _page: 1,
        }
        const postsList = await postsService.getList(request);
        console.log(postsList);
    }

    return (
        <div className="main">
            <h1>Posts</h1>
        </div>
    )
};

export default PostList;
