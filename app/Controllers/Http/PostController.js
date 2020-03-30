'use strict'

class PostController {
    async index({ view }) {
        const posts = [
            { title: 'Post One', body: 'This is post one body' },
            { title: 'Post Two', body: 'This is post two body' },
            { title: 'Post Three', body: 'This is post three body' }
        ]
        return view.render('posts.index', {
                title: 'Latest Posts !!!',
                posts: posts
            }) // if it is in folder we use '.'
    }
}

module.exports = PostController