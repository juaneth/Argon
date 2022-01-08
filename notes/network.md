# Idea for free image hosting based on torrent like network

## Solutions

I could use WebRTC to broadcast the images over client to client, although if the client isn't running, the photos wont be visible on the network. I might be able to cache and save a very compressed version of the image (Save two copies, one lossless compression, one lossy compression. Generate both client side upon upload to keep load off server since it will be running off of @Juaneth and @Ohmeg raspberry pi's) and save the tiny version to server, this could also be always shown for a data saver mode or lite version.

I could also use pre-existing torrenting to save images that way, although I dont really know a lot about torrents and how they work.

I could also just use a network of volunteers to host the images, then let volunteers port forward. Unsure about amount of volunteers, network could go down quickly