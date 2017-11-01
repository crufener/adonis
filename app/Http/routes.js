'use strict'

const Route = use('Route')

Route.get('/', 'PostsController.index')
Route.get('/about', 'PostsController.about')
Route.on('/contact').render('contact')
