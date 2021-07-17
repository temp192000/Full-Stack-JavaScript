function downloadManager(URL){
    return new Promise(function(resolve, reject){
        if(!(URL.startsWith("http"))){
            reject(new Error("Not a Valid URL"))
        }else{
            console.log("URL Found.");
            console.log("Initiating Download");
            setTimeout(() => {
                console.log(`Download Completed in 3 Seconds: ${URL}`);
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
            console.log(`Image Found: ${fileName}. Resizing it`);
            setTimeout(() => {
                let result = fileName.split(".")[0] + "-resized.png"
                console.log(`Image Resized in 2 Seconds: ${result}`);    
                resolve(result)
            }, 2000)
        }
    })
}

function fileUploader(result){
    return new Promise(function(resolve, reject){
        console.log(`Starting to upload file to Imgur DB: ${result}`);
        setTimeout(function(){
            let imgurURL = `https://imgur.com/${result}`;
            console.log(`File Uploaded to ${imgurURL}`);
            resolve(imgurURL)
        }, 2000)
    })
}

Promise.all([
    downloadManager("https://http.cat/401.png"),  
    downloadManager("https://http.cat/402.png"),
    downloadManager("https://http.cat/403.png")  
]).then(function(downloadResolves){
    console.log("Download Promises: ", downloadResolves);
    return Promise.all(downloadResolves.map(imageResizer))
}).then(function(resizeResolves){
    console.log("Resize Promises: ", resizeResolves);
    return Promise.all(resizeResolves.map(fileUploader))
}).then(function(uploadResolves){
    console.log("Upload Promises: ", uploadResolves);
}).catch(function(err){
    console.error(err);
})