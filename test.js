const assert = require("assert");

function validateArtistInput(name){

return name && name.trim().length > 0;

}

try{

assert.strictEqual(validateArtistInput("Drake"),true);

assert.strictEqual(validateArtistInput(" "),false);

assert.strictEqual(validateArtistInput(""),false);

console.log("All tests passed");

}catch(error){

console.error("Test failed");

}