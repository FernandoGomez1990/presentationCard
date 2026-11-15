function abrirModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.showModal();
}

function cerrarModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.close();
}


// Pop up de las experiencias y logros

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".estudio-item");
    const modal = document.getElementById("modal-experiencia");
    const btnCerrar = document.getElementById("btn-cerrar");

    const modalTitulo = document.getElementById("modal-titulo");
    const modalFecha = document.getElementById("modal-fecha");
    const modalInstitucion = document.getElementById("modal-institucion");
    const modalCuerpoDetalle = document.getElementById("modal-cuerpo-detalle");

    items.forEach(item => {
        item.addEventListener("click", () => {
            // Extraemos la info básica directamente del HTML del item
            modalTitulo.textContent = item.querySelector("h3").textContent;
            modalFecha.textContent = item.querySelector(".estudio-fecha").textContent;
            modalInstitucion.textContent = item.querySelector(".estudio-institucion").textContent;
            
            // Inyectamos todo el HTML estructurado (Listas de Funciones y Logros)
            const contenidoHTML = item.querySelector(".detalle-contenido").innerHTML;
            modalCuerpoDetalle.innerHTML = contenidoHTML;

            modal.showModal();
        });
    });

    btnCerrar.addEventListener("click", () => {
        modal.close();
    });

    modal.addEventListener("click", (event) => {
        const rect = modal.getBoundingClientRect();
        if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
        ) {
            modal.close();
        }
    });
});