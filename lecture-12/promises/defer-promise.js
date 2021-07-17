function downloader(fileUrl){
    console.log("Starting to Dowload")
    return new Promise(function(resolve, reject){
        console.log("3 Seconds left");
        setTimeout(function(){
            console.log("Downloading");
            resolve();    
        }, 3000)
    })
}


// .then() right after Promise() resolved

// downloader().then(function(){
//     console.log("Download Completed");
// })


// .then() after a while Promise() resolved

// let downloadedFile = downloader()

// setTimeout(function(){
//     downloadedFile.then(function(){
//         console.log("Download Completed");
//     })
// }, 4000)


// This works like Wget?

let downloadedFile = downloader().then(function(){
    console.log("Download Completed in 3 Seconds");
})

setTimeout(function(){
    downloadedFile.then(function(){
        console.log("File already Present. Not Downloading.");
    })
}, 4000)