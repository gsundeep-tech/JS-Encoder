function encode(secretKey = "secret") {

    var plainJSON = document.getElementById("plainJSON").value;
    try {
        jsonReq = JSON.parse(plainJSON);
        // Encrypt 
        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(jsonReq), secretKey);
        document.getElementById("encryptedJSON").value = ciphertext.toString();
    } catch (ex) {
        errorToast("encode-error");
    }
    
}

function decode(secretKey = "secret") {
    
    try{
        ciphertext = document.getElementById("encryptedJSON").value
        // Decrypt 
        var bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        var plainJSON = JSON.stringify(decryptedData, undefined, 4);
        document.getElementById("plainJSON").value = plainJSON;
    }catch(ex){
        errorToast("decode-error");
    }

}

function errorToast(id) {
    var x = document.getElementById(id);
    x.className = "show";
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 2000);
}