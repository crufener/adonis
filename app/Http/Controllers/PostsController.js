'use strict'

class PostsController {
  * index(req, res) {
  yield res.sendView('home')
  }

  * about(req, res) {
    yield res.sendView('about')
    }
}

module.exports = PostsController
