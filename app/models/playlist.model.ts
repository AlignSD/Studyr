const sql = require('./db.ts');

// constructor
const Playlist = function (playlist) {
  this.title = playlist.title;
  this.description = playlist.description;
  this.image = playlist.image;
};

Playlist.create =  (newPlaylist, result) => {
  sql.query('INSERT INTO playlists SET ?', newPlaylist, (err, res) => {
    if (err) {
      console.log("error", err);
      result(err, null);
      return;

    }
    console.log('Added video to playlist', {id: res.insertId, ...newPlaylist});
    result(null, { id: res.insertId, ...newPlaylist});
  });
};

Playlist.findById = (id, result) => {
  sql.query(`SELECT * FROM playlists WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error", err);
      result(err, null);
      return;
    }
    if(res.length){
      console.log("found tutorial: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not fount playlist with the id
    result({kind: "not_found"}, null);
  });
};

Playlist.getAll = (title, result) => {
  let query = "SELECT * FROM playlists";
  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error", err);
      return;
    }
    console.log("playlists: ", res);
    result(null, res);
  });
};

// TODO: figure this out
Playlist.getAllInUserList = (user,result) => {
  sql.query(`SELECT * FROM playlists WHERE user_id = '%${user.id}'`, (err, res) => {
    if (err) {
      console.log("error", err);
      result(null, err);
      return;
    }
    console.log("playlists: ", res);
    result(null, res);
  });
};

Playlist.updateById = (id, playlist, result) => {
  sql.query("UPDATE playlists SET title = ?, description = ?, user_id = ?, WHERE id = ?",
  [playlist.title, playlist.description, playlist.user_id, id],
  (err, res) => {
    if (err) {
      console.log("error", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // no playlist found with specified id
      result({ kind: "not_found"}, null);
      return;
    } 
    console.log("updated Playlist: ", { id: id, ...playlist });
    result(null, { id: id, ...playlist });
  })
}

Playlist.remove = (id, result) => {
  sql.query("DELETE FROM playlists WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("Error", err);
      result(null, err);
      return;
    }
    if(res.affectedRows == 0) {
      // no playlist found with specified id
      result({ kind: "not_found"}, null);
      return;
    }
    console.log("Deleted playlist with id: ", id);
    result(null, res);
  });
};

Playlist.removeAll = result => {
  sql.query("DELETE FROM playlists", (err, res) => {
    if (err) {
      console.log("Error", err);
      result(null, err);
      return;
    }
    console.log(`Deleted ${res.affectedRows} playlist`);
    result(null, res);
  });
};

module.exports = Playlist;

