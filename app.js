const encodeDecodeInput = document.querySelector("#encodeDecodeInput");
const encodeDecodeOutput = document.querySelector("#encodeDecodeOutput");
const encode = document.querySelector("#encode");
const decode = document.querySelector("#decode");
const reset = document.querySelector("#reset");
const base64Encode = document.querySelector("#base64Encode");
const base64Decode = document.querySelector("#base64Decode");
const generateMD5Hash = document.querySelector("#generateMD5Hash");
const generateSHA1Hash = document.querySelector("#generateSHA1Hash");
const generateSHA256Hash = document.querySelector("#generateSHA256Hash");
const generateSHA512Hash = document.querySelector("#generateSHA512Hash");


/*encode decode url */

if (typeof (encode) != 'undefined' && encode != null) {
    encode.onclick = () => {
        if (encodeDecodeInput.value !== "") {
            encodeDecodeOutput.disabled = false;
            encodeDecodeOutput.value = encodeURIComponent(encodeDecodeInput.value);
        } else {
            alert("Please enter a Url value to encode");
        }
    }
}
if (typeof (decode) != 'undefined' && decode != null) {
    decode.onclick = () => {
        if (encodeDecodeInput.value !== "") {
            encodeDecodeOutput.disabled = false;
            encodeDecodeOutput.value = decodeURIComponent(encodeDecodeInput.value);
        } else {
            alert("Please enter encoded Url value to decode");
        }
    }
}

/*reset */
if (typeof (reset) != 'undefined' && reset != null) {
    reset.onclick = () => {
        encodeDecodeOutput.value = "";
        encodeDecodeOutput.disabled = true;
        encodeDecodeInput.value = "";
    }
}

/*base64 encode decode */

if (typeof (base64Encode) != 'undefined' && base64Encode != null) {
    base64Encode.onclick = () => {
        if (encodeDecodeInput.value !== "") {
            encodeDecodeOutput.disabled = false;
            encodeDecodeOutput.value = btoa(encodeDecodeInput.value);
        } else {
            alert("Please enter a vale to encode to base64");
        }
    }
}
if (typeof (base64Decode) != 'undefined' && base64Decode != null) {
    base64Decode.onclick = () => {
        if (encodeDecodeInput.value !== "") {
            encodeDecodeOutput.disabled = false;
            encodeDecodeOutput.value = atob(encodeDecodeInput.value);
            ;
        } else {
            alert("Please enter encoded base64 value to decode");
        }
    }
}

/*hash generators */

if (typeof (generateMD5Hash) != 'undefined' && generateMD5Hash != null) {
    generateMD5Hash.onclick = () => {
        if (encodeDecodeInput.value !== "") {
            encodeDecodeOutput.disabled = false;
            encodeDecodeOutput.value = CryptoJS.MD5(encodeDecodeInput.value);
        } else {
            alert("Please enter a value to generate MD5 hash");
        }
    }
}
if (typeof (generateSHA1Hash) != 'undefined' && generateSHA1Hash != null) {
    generateSHA1Hash.onclick = () => {
        if (encodeDecodeInput.value !== "") {
            encodeDecodeOutput.disabled = false;
            encodeDecodeOutput.value = CryptoJS.SHA1(encodeDecodeInput.value);
            ;
        } else {
            alert("Please enter a value to generate SHA-1 hash");
        }
    }
}

if (typeof (generateSHA256Hash) != 'undefined' && generateSHA256Hash != null) {
    generateSHA256Hash.onclick = () => {
        if (encodeDecodeInput.value !== "") {
            encodeDecodeOutput.disabled = false;
            encodeDecodeOutput.value = CryptoJS.SHA256(encodeDecodeInput.value);
        } else {
            alert("Please enter a value to generate SHA-256 hash");
        }
    }
}
if (typeof (generateSHA512Hash) != 'undefined' && generateSHA512Hash != null) {
    generateSHA512Hash.onclick = () => {
        if (encodeDecodeInput.value !== "") {
            encodeDecodeOutput.disabled = false;
            encodeDecodeOutput.value = CryptoJS.SHA512(encodeDecodeInput.value);
            ;
        } else {
            alert("Please enter a value to generate SHA-512 hash");
        }
    }
}
