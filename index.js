// index.js

//is it right to write 2 'module.exports'?
module.exports = makeGitterURL
module.exports = makeGitterChatbox

// function No.1
function makeGitterURL (username) {
  return `https://gitter.im/${username}/~embed`
}

// function No.2
function makeGitterChatbox (profile) {
		  return bel`
		    <div class=${css1.chatbox}>
		<img src="${profile.photo}" class=${css1.photo1}>
		      <h1> ${profile.name} </h1>
		      <iframe class=${css1.iframe} src=${makeGitterURL1(profile.username)}></iframe>
		    </div>
		  `
		}
    
    
