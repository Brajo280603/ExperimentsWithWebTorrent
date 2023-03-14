const dragDrop = require('drag-drop')
// const WebTorrent = require('webtorrent')

const client = new WebTorrent()
let url = document.getElementById("url");
// When user drops files on the browser, create a new torrent and start seeding it!
dragDrop('#drop', function (files) {
  client.seed(files, function (torrent) {
    console.log('Client is seeding ' + torrent.magnetURI)
    url.textContent = torrent.magnetURI;
  })
})