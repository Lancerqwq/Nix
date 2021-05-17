const browserVersion = () => {
    let versionApp = window.navigator.appVersion;
    let version = versionApp.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    let element = document.createElement("span");
    
    element.innerHTML = version[0];
    document.body.appendChild(element);
}
export default browserVersion;