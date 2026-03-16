async function searchArtist() {

const artistName = document.getElementById("artistInput").value;
const resultsList = document.getElementById("results");
const errorBox = document.getElementById("errorMessage");

resultsList.innerHTML = "";
errorBox.textContent = "";

if (artistName.trim() === "") {
errorBox.textContent = "Please enter an artist name.";
return;
}

try {

const url = `https://musicbrainz.org/ws/2/artist/?query=${encodeURIComponent(artistName)}&fmt=json`;

const response = await fetch(url, {
headers: {
"User-Agent": "CSCI3172-Lab5-App"
}
});

const data = await response.json();

if (!data.artists || data.artists.length === 0) {
errorBox.textContent = "No results found.";
return;
}

data.artists.slice(0,10).forEach(artist => {

const li = document.createElement("li");

li.className = "list-group-item";

li.textContent = artist.name;

resultsList.appendChild(li);

});

} catch (error) {

console.error(error);
errorBox.textContent = "Error retrieving artist data.";

}

}
