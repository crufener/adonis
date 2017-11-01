'use strict'

const Route = use('Route')

Route.get('/', 'PostsController.index')
Route.on('/about').render('about')
Route.on('/contact').render('contact')
