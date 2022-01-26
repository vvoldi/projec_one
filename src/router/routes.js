import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPages from "../pages/PostIdPages";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: '/about', commponent: About, exact: true},
    {path: '/posts', commponent: Posts, exact: true},
    {path: '/posts/:id', commponent: PostIdPages, exact: true},
]
export const publicRoutes = [
    {path: '/login', commponent: Login, exact: true},
]