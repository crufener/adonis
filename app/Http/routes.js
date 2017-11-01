'use strict'

const Route = use('Route')

Route.on('/').render('home')
Route.on('/about').render('about')
Route.on('/contact').render('contact')
