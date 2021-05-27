const utilityConverterInput = document.querySelector("#utilityConverterInput");
const utilityConverterOutput = document.querySelector("#utilityConverterOutput");
const encode = document.querySelector("#encode");
const decode = document.querySelector("#decode");
const reset = document.querySelector("#reset");
const base64Encode = document.querySelector("#base64Encode");
const base64Decode = document.querySelector("#base64Decode");
const generateMD5Hash = document.querySelector("#generateMD5Hash");
const generateSHA1Hash = document.querySelector("#generateSHA1Hash");
const generateSHA256Hash = document.querySelector("#generateSHA256Hash");
const generateSHA512Hash = document.querySelector("#generateSHA512Hash");
const ipAddress = document.querySelector("#ipAddress");


const binaryToDecimal = document.querySelector("#binaryDecimal");
const binaryToOctal = document.querySelector("#binaryOctal");
const binaryToHex = document.querySelector("#binaryHex");
const decimalToBinary = document.querySelector("#decimalBinary");
const decimalToOctal = document.querySelector("#decimalOctal");
const decimaltoHex = document.querySelector("#decimalHex");
const hexToBinary = document.querySelector("#hexBinary");
const hextoDecimal = document.querySelector("#hexDecimal");
const hextoOctal = document.querySelector("#hexOctal");
const octalToBinary = document.querySelector("#octalBinary");
const octalToDecimal = document.querySelector("#octalDecimal");
const octalToHex = document.querySelector("#octalHex");

const rgbHex = document.querySelector("#rgbHex");
const hexrgb = document.querySelector("#hexRgb");
const showHexRgbButton = document.querySelector("#showHexRgb");
const showRgbHexButton = document.querySelector("#showRgbHex");
const redInput = document.querySelector("#redInput");
const greenInput = document.querySelector("#greenInput");
const blueInput = document.querySelector("#blueInput");
const hexOutputVal = document.querySelector("#hexOutputVal");
const hexOutputBtn = document.querySelector("#hexOutputBtn");
const rgbOutputBtn = document.querySelector("#rgbOutput");
const resetRgbHexValuesbtn = document.querySelector("#resetRgbHexValues");
const redOutput = document.querySelector("#redOutput");
const greenOutput = document.querySelector("#greenOutput");
const blueOutput = document.querySelector("#blueOutput");
const hexInput = document.querySelector("#hexInput");
const resetHexRgbValues = document.querySelector("#resetHexRgbValues");

/*encode decode url */

if (typeof (encode) != 'undefined' && encode != null) {
    encode.onclick = () => {
        if (utilityConverterInput.value !== "") {
            utilityConverterOutput.disabled = false;
            utilityConverterOutput.value = encodeURIComponent(utilityConverterInput.value);
        } else {
            alert("Please enter a Url value to encode");
        }
    }
}
if (typeof (decode) != 'undefined' && decode != null) {
    decode.onclick = () => {
        if (utilityConverterInput.value !== "") {
            utilityConverterOutput.disabled = false;
            utilityConverterOutput.value = decodeURIComponent(utilityConverterInput.value);
        } else {
            alert("Please enter encoded Url value to decode");
        }
    }
}

/*reset */
if (typeof (reset) != 'undefined' && reset != null) {
    reset.onclick = () => {
        utilityConverterOutput.value = "";
        utilityConverterOutput.disabled = true;
        utilityConverterInput.value = "";
    }
}

/*base64 encode decode */

if (typeof (base64Encode) != 'undefined' && base64Encode != null) {
    base64Encode.onclick = () => {
        if (utilityConverterInput.value !== "") {
            utilityConverterOutput.disabled = false;
            utilityConverterOutput.value = btoa(utilityConverterInput.value);
        } else {
            alert("Please enter a vale to encode to base64");
        }
    }
}
if (typeof (base64Decode) != 'undefined' && base64Decode != null) {
    base64Decode.onclick = () => {
        if (utilityConverterInput.value !== "") {
            utilityConverterOutput.disabled = false;
            utilityConverterOutput.value = atob(utilityConverterInput.value);
        } else {
            alert("Please enter encoded base64 value to decode");
        }
    }
}

/*hash generators */

if (typeof (generateMD5Hash) != 'undefined' && generateMD5Hash != null) {
    generateMD5Hash.onclick = () => {
        if (utilityConverterInput.value !== "") {
            utilityConverterOutput.disabled = false;
            utilityConverterOutput.value = CryptoJS.MD5(utilityConverterInput.value);
        } else {
            alert("Please enter a value to generate MD5 hash");
        }
    }
}
if (typeof (generateSHA1Hash) != 'undefined' && generateSHA1Hash != null) {
    generateSHA1Hash.onclick = () => {
        if (utilityConverterInput.value !== "") {
            utilityConverterOutput.disabled = false;
            utilityConverterOutput.value = CryptoJS.SHA1(utilityConverterInput.value);
        } else {
            alert("Please enter a value to generate SHA-1 hash");
        }
    }
}

if (typeof (generateSHA256Hash) != 'undefined' && generateSHA256Hash != null) {
    generateSHA256Hash.onclick = () => {
        if (utilityConverterInput.value !== "") {
            utilityConverterOutput.disabled = false;
            utilityConverterOutput.value = CryptoJS.SHA256(utilityConverterInput.value);
        } else {
            alert("Please enter a value to generate SHA-256 hash");
        }
    }
}
if (typeof (generateSHA512Hash) != 'undefined' && generateSHA512Hash != null) {
    generateSHA512Hash.onclick = () => {
        if (utilityConverterInput.value !== "") {
            utilityConverterOutput.disabled = false;
            utilityConverterOutput.value = CryptoJS.SHA512(utilityConverterInput.value);
            ;
        } else {
            alert("Please enter a value to generate SHA-512 hash");
        }
    }
}

/*Binary to Decimal */
if (typeof (binaryToDecimal) != 'undefined' && binaryToDecimal != null) {
    binaryToDecimal.onclick = () => {
        if (utilityConverterInput.value !== "") {
            utilityConverterOutput.disabled = false;
            utilityConverterOutput.value = parseInt(utilityConverterInput.value, 2);
        } else {
            alert("Please enter a Binary value to get Decimal Value");
        }
    }
}

/*Binary to hex */
if (typeof (binaryToHex) != 'undefined' && binaryToHex != null) {
    binaryToHex.onclick = () => {
        if (utilityConverterInput.value !== "") {
            utilityConverterOutput.disabled = false;
            utilityConverterOutput.value = parseInt(utilityConverterInput.value, 2).toString(16);
        } else {
            alert("Please enter a Binary value to get hex Value");
        }
    }
}

/*Binary to octal */
if (typeof (binaryToOctal) != 'undefined' && binaryToOctal != null) {
    binaryToOctal.onclick = () => {
        if (utilityConverterInput.value !== "") {
            utilityConverterOutput.disabled = false;
            utilityConverterOutput.value = parseInt(utilityConverterInput.value, 2).toString(8);
        } else {
            alert("Please enter a Binary value to get octal Value");
        }
    }
}

/*hex to Binary */
if (typeof (hexToBinary) != 'undefined' && hexToBinary != null) {
    hexToBinary.onclick = () => {
        if (utilityConverterInput.value !== "") {
            utilityConverterOutput.disabled = false;
            utilityConverterOutput.value = parseInt(utilityConverterInput.value, 16).toString(2);
        } else {
            alert("Please enter a Hex value to get Binary Value");
        }
    }
}


/*hex to Decimal */
if (typeof (hextoDecimal) != 'undefined' && hextoDecimal != null) {
    hextoDecimal.onclick = () => {
        if (utilityConverterInput.value !== "") {
            utilityConverterOutput.disabled = false;
            utilityConverterOutput.value = parseInt(utilityConverterInput.value, 16);
        } else {
            alert("Please enter a Hex value to get Decimal Value");
        }
    }
}

/*hex to Octal */
if (typeof (hextoOctal) != 'undefined' && hextoOctal != null) {
    hextoOctal.onclick = () => {
        if (utilityConverterInput.value !== "") {
            utilityConverterOutput.disabled = false;
            utilityConverterOutput.value = parseInt(utilityConverterInput.value, 16).toString(8);
        } else {
            alert("Please enter a Hex value to get Octal Value");
        }
    }
}

/*octal to Decimal */
if (typeof (octalToDecimal) != 'undefined' && octalToDecimal != null) {
    octalToDecimal.onclick = () => {
        if (utilityConverterInput.value !== "") {
            utilityConverterOutput.disabled = false;
            utilityConverterOutput.value = parseInt(utilityConverterInput.value, 8);
        } else {
            alert("Please enter a octal value to get Decimal Value");
        }
    }
}

/*octal to Binary */
if (typeof (octalToBinary) != 'undefined' && octalToBinary != null) {
    octalToBinary.onclick = () => {
        if (utilityConverterInput.value !== "") {
            utilityConverterOutput.disabled = false;
            utilityConverterOutput.value = parseInt(utilityConverterInput.value, 8).toString(2);
        } else {
            alert("Please enter a octal value to get Binary Value");
        }
    }
}

/*octal to hex */
if (typeof (octalToHex) != 'undefined' && octalToHex != null) {
    octalToHex.onclick = () => {
        if (utilityConverterInput.value !== "") {
            utilityConverterOutput.disabled = false;
            utilityConverterOutput.value = parseInt(utilityConverterInput.value, 8).toString(16);
        } else {
            alert("Please enter a octal value to get Hex Value");
        }
    }
}

/*decimal to binary */
if (typeof (decimalToBinary) != 'undefined' && decimalToBinary != null) {
    decimalToBinary.onclick = () => {
        if (utilityConverterInput.value !== "") {
            utilityConverterOutput.disabled = false;
            utilityConverterOutput.value = parseInt(utilityConverterInput.value).toString(2);
        } else {
            alert("Please enter a Decimal value to get Binary Value");
        }
    }
}

/*decimal to hex */
if (typeof (decimaltoHex) != 'undefined' && decimaltoHex != null) {
    decimaltoHex.onclick = () => {
        if (utilityConverterInput.value !== "") {
            utilityConverterOutput.disabled = false;
            utilityConverterOutput.value = parseInt(utilityConverterInput.value).toString(16);
        } else {
            alert("Please enter a Decimal value to get Hex Value");
        }
    }
}

/*decimal to octal */
if (typeof (decimalToOctal) != 'undefined' && decimalToOctal != null) {
    decimalToOctal.onclick = () => {
        if (utilityConverterInput.value !== "") {
            utilityConverterOutput.disabled = false;
            utilityConverterOutput.value = parseInt(utilityConverterInput.value).toString(8);
        } else {
            alert("Please enter a Decimal value to get Octal Value");
        }
    }
}

/*RGB HEX */
if (typeof (showHexRgbButton) != 'undefined' && showHexRgbButton != null) {
    showHexRgbButton.onclick = () => {
        rgbHex.classList.add("hide");
        hexrgb.classList.remove("hide");
        hexrgb.classList.add("rgb-hex-converters");
        window.scrollTo(0, 0);
        document.querySelector("#rgb-hex-converter-section").style.backgroundColor = "";
    }
}

if (typeof (showRgbHexButton) != 'undefined' && showRgbHexButton != null) {
    showRgbHexButton.onclick = () => {
        hexrgb.classList.add("hide");
        rgbHex.classList.remove("hide");
        rgbHex.classList.add("rgb-hex-converters");
        window.scrollTo(0, 0);
        document.querySelector("#rgb-hex-converter-section").style.backgroundColor = "";
    }
}


if (typeof (hexOutputBtn) != 'undefined' && hexOutputBtn != null) {
    hexOutputBtn.onclick = () => {
        if (redInput.value.match("[0-9]") && greenInput.value.match("[0-9]") && blueInput.value.match("[0-9]") &&
         redInput.value != "" && blueInput.value != "" && greenInput.value != "") {
            hexOutputVal.disabled = false
            hexOutputVal.value = rgbToHex(parseInt(redInput.value), parseInt(greenInput.value), parseInt(blueInput.value));
            document.querySelector("#rgb-hex-converter-section").style.backgroundColor = hexOutputVal.value;
        }
        else {
            alert("Please enter all valid rgb values to get a valid Hex value");
        }
    }
}

if (typeof (rgbOutputBtn) != 'undefined' && rgbOutputBtn != null) {
    rgbOutputBtn.onclick = () => {
        if (hexInput.value != null && hexInput.value!= "") {
            redOutput.disabled = false;
            greenOutput.disabled =  false;
            blueOutput.disabled =  false
            hexInput.value = hexInput.value.startsWith("#")?hexInput.value.substring(1):hexInput.value;
            const bigint = parseInt(hexInput.value, 16);
            redOutput.value = (bigint >> 16) & 255;
            greenOutput.value = (bigint >> 8) & 255;
            blueOutput.value = bigint & 255;
            document.querySelector("#rgb-hex-converter-section").style.backgroundColor = "rgb(" + redOutput.value + "," + greenOutput.value + "," + blueOutput.value + ")";
        }
        else {
            alert("Please enter valid hex value to get a valid red , green , blue values");
        }
    }
}

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hexv = x.toString(16)
    console.log(hexv);
    return hexv.length === 1 ? '0' + hexv : hexv
}).join('')


if (typeof (resetRgbHexValuesbtn) != 'undefined' && resetRgbHexValuesbtn != null) {
    resetRgbHexValuesbtn.onclick = () => {
        redInput.value = "";
        greenInput.value = "";
        blueInput.value = "";
        hexOutputVal.value = "";
        hexOutputBtn.disabled = true;
    document.querySelector("#rgb-hex-converter-section").style.backgroundColor = "";
}
}
if (typeof (resetHexRgbValues) != 'undefined' && resetHexRgbValues != null) {
    resetHexRgbValues.onclick = () => {
        redOutput.value = "";
        redOutput.disabled = true;
        greenOutput.value = "";
        greenOutput.disabled = true;
        blueOutput.value = "";
        blueOutput.disabled = true;
        hexInput.value = "";
    document.querySelector("#rgb-hex-converter-section").style.backgroundColor = "";
}
}

if(typeof(ipAddress) != 'undefined' && ipAddress!= null){
   fetch("https://api.ipify.org/?format=json").then(response => response.json()).then(data=>
        ipAddress.innerHTML = data.ip);
}
