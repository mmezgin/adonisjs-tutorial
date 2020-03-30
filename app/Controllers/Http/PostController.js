'use strict'
// bringing model
const Post = use('App/Models/Post')
class PostController {
    async index({ view }) {
        /* const posts = [
             { title: 'Post One', body: 'This is post one body' },
             { title: 'Post Two', body: 'This is post two body' },
             { title: 'Post Three', body: 'This is post three body' }
         ]*/
        const posts = await Post.all();
        return view.render('posts.index', {
                title: 'Latest Posts !!!',
                posts: posts.toJSON()
            }) // if it is in folder we use '.'
    }

    async details({ params, view }) {
        const post = await Post.find(params.id)

        return view.render('posts.details', {
            post: post
        })
    }
    async add({ view }) {
        return view.render('posts.add')
    }
}

module.exports = PostController