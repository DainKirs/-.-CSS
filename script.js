window.addEventListener("DOMContentLoaded", () => {
    
    const savedStyle = localStorage.getItem("currentStyle");
    if (savedStyle) {
        document.getElementById("styleLink").setAttribute("href", savedStyle);
        
    }
});
myStorage = window.localStorage;

function changeStyle(style) {
    document.getElementById("styleLink").setAttribute("href", style);
    localStorage.setItem("currentStyle", style);
}






  function displayResult() {
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = document.getElementById("cssCode").value;
    var resultFrame = document.createElement("iframe");
    var resultDiv = document.getElementById("result");
    
    resultFrame.setAttribute("srcdoc", htmlCode + "<style>" + cssCode + "</style>");
    resultFrame.style.width = "100%";
    resultFrame.style.height = "100vh";
    resultFrame.style.border = "5";
    
  
    resultDiv.innerHTML = "";
    resultDiv.appendChild(resultFrame);
  }
  