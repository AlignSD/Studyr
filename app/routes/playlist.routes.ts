module.exports = app => {
  const playlists = require("../controllers/playlist.controller.ts");
  let router = require("express").Router();

  // Create a new Playlist
  router.post('/', playlists.create);

  // Retrieve all playlists
  router.get("/", playlists.findAll);

  // Retrieve all playlists by user_id
  router.get("/userplaylist", playlists.findByUser);

  // Retrieve a single video with ID
  router.get('/:id', playlists.findOne);
  
  // Update a playlist with id
  router.put('/:id', playlists.update);

  // Delete a playlist with ID
  router.delete('/:id', playlists.delete);

  // Delete all playlists
  router.delete("/", playlists.deleteAll);

  app.use('/api/playlists', router);
}