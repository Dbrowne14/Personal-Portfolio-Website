import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h2>GifGallery: Reddits best Gifs all in one place</h2>
        <p>
          I designed an app that displays interesting and cool gifs in a gallery
          format for users to consume and enjoy. This uses the Reddit api and
          was built by creating a proxy server locally and routing requests
          through it, caching fetches on first load and accesing through RTK
          Query.
        </p>
        <p>
          Built using React-Redux, RTK Query, TypeScript, JavaScript, CSS and
          HTML
        </p>
        <p>
          Github: <a href="">...</a>
        </p>
        <p>
          Live Website: <a href="">...</a>
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <h2>DaveJams: Spotify Playlist Game</h2>
        <p>
          I designed and built a Spotify-powered playlist game using React and
          OAuth 2.0 authentication. Players create ten-song playlists within a
          strict 35-minute limit, which are evaluated and ranked through a mix
          of internal scoring logic and external performance metrics.
        </p>
        <p>Built using React, TypeScript, JavaScript, CSS and HTML</p>
        <p>
          Github: <a href="">Jamming Docs</a>
        </p>
        <p>
          Live Website: <a href="">Jamming</a>
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <h2>Peckham Planeswalkers: MTG Chaos Draft score tallying</h2>
        <p>
          I designed website and web app using Javascript, CSS and HTML that
          suggests blocks and sets, records scores and identifies matchups for
          the Magic the Gathering Chaos Draft format
        </p>
        <p>
          Built using JavaScript, CSS and
          HTML
        </p>
        <p>
          Github: <a href="">...</a>
        </p>
        <p>
          Live Website: <a href="">...</a>
        </p>
      </div>
    </div>
  );
};

export default Projects;
