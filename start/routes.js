'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home')

Route.get('/test', () => 'Hello World !')

Route.get('/test/:id', function({ params }) {
    return `The test ID: ${params.id}`;
})

Route.get('/posts', 'PostController.index')
Route.get('/posts/add', 'PostController.add')
Route.get("/posts/:id", 'PostController.details')