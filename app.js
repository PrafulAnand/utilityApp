const encodeDecodeInput = document.querySelector("#encodeDecodeInput");
const encodeDecodeOutput = document.querySelector("#encodeDecodeOutput");
const encode = document.querySelector("#encode");
const decode = document.querySelector("#decode");
const reset = document.querySelector("#reset");
const base64Encode = document.querySelector("#base64Encode");
const base64Decode = document.querySelector("#base64Decode")
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

if (typeof (reset) != 'undefined' && reset != null) {
    reset.onclick = () => {
        encodeDecodeOutput.value = "";
        encodeDecodeOutput.disabled = true;
        encodeDecodeInput.value = "";
    }
}

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
