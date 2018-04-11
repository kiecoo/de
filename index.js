
module.exports = makeGitterURL
module.exports = makeGitterChatbox

function makeGitterURL (username) {
  return `https://gitter.im/${username}/~embed`
}

function makeGitterChatbox (profile) {
		  return bel`
		    <div class=${css1.chatbox}>
		<img src="${profile.photo}" class=${css1.photo1}>
		      <h1> ${profile.name} </h1>
		      <iframe class=${css1.iframe} src=${makeGitterURL1(profile.username)}></iframe>
		    </div>
		  `
		}
    
    
