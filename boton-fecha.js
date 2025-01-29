document.addEventListener("DOMContentLoaded", function() {
    var boton = document.createElement("button");
    boton.id = "formulario-boton";
    boton.innerHTML = "📅 Seleccionar Fecha";
    boton.onclick = function() {
        window.open("https://form.typeform.com/to/T87NLOBo", "_blank");
    };
    boton.style.position = "fixed";
    boton.style.bottom = "20px";
    boton.style.right = "20px";
    boton.style.backgroundColor = "#ff7eb3";
    boton.style.color = "white";
    boton.style.padding = "12px 18px";
    boton.style.fontSize = "16px";
    boton.style.fontWeight = "bold";
    boton.style.border = "none";
    boton.style.borderRadius = "50px";
    boton.style.cursor = "pointer";
    boton.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.2)";
    boton.style.zIndex = "1000";
    document.body.appendChild(boton);
});
