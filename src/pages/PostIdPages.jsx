import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';


const PostIdPages = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading] = useFetching( async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data);
    })
    const [fetchComments, isComLoading] = useFetching( async () => {
        const response = await PostService.getCommentsByPostId(params.id)
        setComments(response.data);
    })

    useEffect( ()  => {
        fetchPostById()
        fetchComments() // eslint-disable-next-line 
    }, [])
    return (
        <div>
            <h1>You open post with id = {params.id}</h1>
            {isLoading 
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }
            <h1>Comments</h1>
            {isComLoading 
                ? <Loader/>
                : <div>
                    {comments.map((comm) => 
                        <div key={comm.id} style={{marginTop: '15px'}}>
                            <h3>{comm.name}</h3>
                            <div>{comm.email}</div>
                            <i>{comm.body}</i>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPages;
