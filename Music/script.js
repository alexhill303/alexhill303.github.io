"use strict";

const searchBtn = document.querySelector(".btn-search");
const resetBtn = document.querySelector(".btn-reset");

searchBtn.addEventListener("click", function () {
  function fetchData(artist, title) {
    artist = document.getElementById("artist").value;
    title = document.getElementById("song").value;

    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
      .then((response) => {
        //   console.log(response);
        if (!response.ok) {
          throw Error("ERROR");
        }
        return response.json();
      })
      .then((lyrics) => {
        console.log(lyrics);

        const html = `
        <article class="song">
        <div class="song__data">
          <h3 class="song__artist">Artist: ${artist}</h3>
          <h4 class="song__title">Title: ${title}</h4>
          <h5 class="song__lyrics">${lyrics.lyrics}</h5>
        </div>
        </article>
          `;
        document
          .querySelector(".lyrics-container")
          .insertAdjacentHTML("afterend", html);
      })
      .catch((error) => {
        console.log(error);
      });
    document.getElementById("artist").value = "";
    document.getElementById("song").value = "";
  }

  return fetchData();
});
