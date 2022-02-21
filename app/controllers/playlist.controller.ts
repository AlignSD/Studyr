const Playlist = require('../models/playlist.model.ts');

// Create and Save a new Playlist
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    })
  }
  // Create a new Playlist
  const playlist = new Playlist({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
  })
  // Save Playlist in the database
  Playlist.create(playlist, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating the Playlist"
      })
    }
    else res.send(data);
  })
};

// Retrieve all Playlists in database (with condition)
exports.findAll = (req, res) => {
  const title = req.query.title;
  Playlist.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occured while creating the playlist"
      })
      else res.send(data);
  })
};


// Find a single Playlist with an ID
exports.findOne = (req, res) => {
  Playlist.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Playlist with id ${req.params.id} not found.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Playlist with id " + req.params.id
        });
      };
    } else res.send(data);
  });
};

// Find all Playlists
exports.findByUser = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "content can not be empty"
    })
  }
  console.log(req.body);
  Playlist.updateById(
    req.params.id,
    new Playlist(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Playlist with id ${req.params.id} not found.`
          })
        } else {
          res.status(500).send({
            message: "Error updating Playlist with id " + req.params.id
          })
        }
      } else res.send(data);
    }
    )
};

// Update a Playlist with corresponding ID
exports.update = (req, res) => {
  // Validate the Request
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty!"
    })
  }
  console.log(req.body);
  Playlist.updateById(
    req.params.id,
    new Playlist(req.body),
    (err, data) => {
      if (err) {
        if(err.kind === "not_found") {
          res.status(404).send({
            message: `Playlist with id ${req.params.id} not found.`
          })
        } else {
          res.status(500).send({ message: "Error updating playlist with ID " + req.params.id
        })
        }
      } else res.send(data);
    }
  )
};

// Delete a Playlist with corresponding ID
exports.delete = (req, res) => {
  Playlist.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Playlist with id ${req.params.params} not found `
        })
      } else {
        res.status(500).send({
          message: "Could not find the playlist with id " + req.params.id
        })
      }
    } else res.send(data);
  })
};

// Delete all Playlists
exports.deleteAll = (req, res) => {
  Playlist.removeAll((err, data) => {
    if (err) 
      res.status(500).send({
        messgae: 
          err.message || "Some error occurred while removing all playlists."
      })
    else res.send({ message: `All playlists were deleted successfully!`})
  });
};