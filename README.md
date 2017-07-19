# pressplay
Discover a variety of Spotify playlists.

## Running the project locally
Clone the repository
```
git clone git@github.com:willardshikami/pressplay.git
```

Install Node dependencies from the NPM Registry.
```
cd pressplay
npm install
```

By all means, keep the node server running
``` javascript
nodemon server.js
```

Use bower to install client-side dependencies:
```
cd client
bower install angular
bower install angular-route
bower install bootstrap
bower install jquery
```

This project uses grunt server to compile sass to css

Install the dependencies: make sure you are still in the client directory
```
npm install
```