async function searchArtist(){

const artistName = document.getElementById("artistInput").value;
const resultsList = document.getElementById("results");
const errorBox = document.getElementById("errorMessage");

resultsList.innerHTML = "";
errorBox.textContent = "";

if(artistName.trim() === ""){
errorBox.textContent = "Please enter an artist name.";
return;
}

try{

const response = await fetch(`/api/search?artist=${artistName}`);

if(!response.ok){
throw new Error("Server error occurred");
}

const data = await response.json();

if(data.length === 0){
errorBox.textContent = "No artists found.";
return;
}

data.forEach(artist => {

const li = document.createElement("li");
li.className = "list-group-item";

li.textContent = artist.name;

resultsList.appendChild(li);

});

}catch(error){

errorBox.textContent = "Something went wrong. Try again.";

console.error(error);

}

}