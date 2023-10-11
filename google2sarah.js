chrome.webRequest.onBeforeRequest.addListener(function(details) {
    return { 
		redirectUrl: details.url.replace("https://www.google.fr/search", "http://127.0.0.1:8080/sarah/cortana")
    };
}, {urls: ["*://www.google.fr/search*"]}, ["blocking"]);
