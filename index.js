// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Nothing Matters", artist: "Metallica", genre: "Heavy Metal" },
    { title: "Fear for My Pain", artist: "BlackSabbath", genre: "Heavy Metal" },
    { title: "Kiss", artist: "Iron Maiden", genre: "Heavy Metal" },


    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Rock",
    "Rocket": "Rock",
    "Groot": "Heavy Metal"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here

    //We are going create a new array using map() from guardians. and we will put the first keys in guardian & second keys in genre) its more like we created new variables for them.
    //This code will compare if 
    return Object.entries(guardians).map(([guardian, genre]) => {
        const playlist = songs.filter(song => song.genre === genre);

        return { guardian, playlist };
    })
}

function displayPlaylists(playlists) {
    //This is the playlist ID 
    const playlistsDiv = document.getElementById("playlists");

    //We are going to loop through each playlist(guardian & playlist, which is the var we created to contain genres)
    playlists.forEach(({ guardian, playlist }) => {
        const playlistEl = document.createElement("div");
        playlistEl.classList.add("playlists")
        //We want to display the Guardians Name
        playlistEl.innerHTML = `<h4>${guardian}'s Playlist</h4>`;

        //Styling The Block
        // playlistEl.style.background = "blue";
        // playlistEl.style.display = "inline-block";
        // playlistEl.style.margin = "20px";
        // playlistEl.style.borderRadius = "10px";
        //end


        //Created a ul to display the list of song and artist
        const songLIst = document.createElement("div");

        playlist.forEach(song => {
            const songItem = document.createElement("li");

            songItem.innerHTML = `<span class ="song-title">${song.title}</span> by ${song.artist}`;

            songLIst.appendChild(songItem);

        });
        playlistEl.appendChild(songLIst);
        playlistsDiv.appendChild(playlistEl);

    });




}

// Call generatePlaylist and display the playlists for each Guardian
const playlists = generatePlaylist(guardians, songs);

displayPlaylists(playlists);