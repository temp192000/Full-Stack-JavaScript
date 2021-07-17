function downloadManager(URL){
    return new Promise(function(resolve, reject){
        if(!(URL.startsWith("http"))){
            reject(new Error("Not a Valid URL"))
        }else{
            console.log("URL Found.");
            console.log("Initiating Download");
            setTimeout(() => {
                console.log("Download Completed in 3 Seconds");
                let fileName = URL.split("/").pop()
                resolve(fileName);
            }, 3000)
        }
    })
}

function imageResizer(fileName){
    return new Promise(function(resolve, reject){
        if(!(fileName.endsWith(".png"))){
            reject(new Error("Duh, Only Images can be Resized"))
        }else{
            console.log("Image Found. Resizing it");
            setTimeout(() => {
                let result = fileName.split(".")[0] + "-resized.png"
                console.log("Image Resized in 2 Seconds");    
                resolve(result)
            }, 2000)
        }
    })
}

function fileUploader(result){
    return new Promise(function(resolve, reject){
        console.log("Starting to upload file to Imgur DB");
        setTimeout(function(){
            let imgurURL = `https://imgur.com/${result}`;
            console.log("File Uploaded: " + imgurURL);
            resolve(imgurURL)
        }, 2000)
    })
}

// downloadManager("https://http.cat/404.png").then(function(fileName){
//     imageResizer(fileName).then(function(result){
//         console.log("✅ Downloaded File: ", fileName);
//         console.log("✅ Image Resized: ", result);
//     })
// })

downloadManager("http://http:cat/404.png")
    .then(imageResizer) // we sure can skip resizing by commenting it out
    .then(fileUploader)
    .then(function(imgurURL){
        console.log(`✅ Image Downloaded, Resized and Uploaded to: ${imgurURL}`);
    })
    .catch((err) => {
    console.error(err);
    })

