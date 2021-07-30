let input = document.getElementById('inpCode');
let btnEncode = document.getElementById('btn-encode');

let BS64 = document.getElementById('encodeJS');

// Encrpt and Encode
function encryptionEngine(rawData){
    // Encrypt and Pass to Encoder
    // return 'encrypted Data'
}

// But, I've a doubt whether we'd need to encrypt and encode(Mine) OR
// encode and encrypt(ARNAV)

btnEncode.onclick = function(){
    let data = input.value;
    // encryptionEngine(rawData) -- May be #ToDo
    data = btoa(data);
    BS64.value = data;
}
