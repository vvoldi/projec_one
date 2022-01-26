import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: "", body: "" });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = { ...post, id: Date.now() };
        create(newPost);
        setPost({ title: "", body: "" });
    };

    return (
        <form>
            <MyInput
                value={post.title}
                type="text"
                placeholder="Post name"
                onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
            <MyInput
                value={post.body}
                type="text"
                placeholder="Post description"
                onChange={(e) => setPost({ ...post, body: e.target.value })}
            />
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    );
};

export default PostForm;
