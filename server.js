const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.use(express.static("public"));

const PORT = 3000;

app.get("/api/search", async (req,res)=>{

const artist = req.query.artist;

if(!artist){
return res.status(400).json({error:"Artist name required"});
}

try{

const url = `https://musicbrainz.org/ws/2/artist/?query=${artist}&fmt=json`;

const response = await fetch(url);

const data = await response.json();

const artists = data.artists.slice(0,10).map(a=>({
name:a.name
}));

res.json(artists);

}catch(error){

console.error(error);

res.status(500).json({error:"API request failed"});

}

});

app.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`);
});
