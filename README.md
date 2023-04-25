# Simple API for posts in Node JS

## Routes
- GET : /post/ -> get all posts
- POST : /post/ -> add one post with this request body : 
```
{
    "message": "La règle d'or du développeur: ne jamais se répéter",
    "author" : "John"
}
```
- PUT : /post/:id -> edit one post with request body
- DELETE : /post/:id -> delete one post
- PATCH : /post/like-post/:id -> Like post with user id:
```
{
    "userId": "John"
}
```
- PATCH : /post/dislike-post/:id -> disLike post


:id = id of post