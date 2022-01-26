import React, { useState, useEffect, useRef } from "react";
import "../styles/App.css";
import PostForm from "../components/PostForm";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/counter";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../components/utils/pages";
import Pagintion from "../components/UI/pagination/Pagintion";
import PostListTitleEndErrors from "../components/PostListTitleAndErrors";
// import { useObserver } from "../hooks/useObserver";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: "", query: "" });
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef();

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = await PostService.beforeParams()

        setTotalPages(getPageCount(totalCount, limit));
    });

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };


    // useObserver(lastElement, page < totalPages, isPostsLoading, () => setPage(page+1) )
    
    useEffect(() => {
        fetchPosts(limit, page);
        // eslint-disable-next-line 
    }, [page] );

    const changePage = (page = 1) => {
        setPage(page);
    };

    return (
        <div className="App">

            <MyButton
                style={{ marginTop: "15px" }}
                onClick={() => setModal(true)}>
                Create Post
            </MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>

            <PostFilter filter={filter} setFilter={setFilter} />

            
            <PostListTitleEndErrors posts={posts} postError={postError} isPostsLoading={isPostsLoading} />

            <Pagintion
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
           
            <div ref={lastElement}></div> 
            {isPostsLoading 
                ? <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}> <Loader /></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts}/>
            }

            {/* <Counter /> */}

            <Pagintion
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
            
        </div>
    );
}

export default Posts;