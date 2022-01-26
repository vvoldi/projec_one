import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPost = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [sort, posts]);

    return sortedPost;
};

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort),
        sortedAndSearchedPosts = useMemo(() => {
            return sortedPosts.filter((post) =>
                post.title.toLocaleLowerCase().includes(query.toLowerCase())
            );
        }, [query, sortedPosts]);

    return sortedAndSearchedPosts;
};
