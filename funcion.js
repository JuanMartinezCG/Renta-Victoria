// ========================================
// CARRUSEL DE IMÁGENES DEL HERO
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Obtener el contenedor del hero
    const heroSection = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    // Obtener todas las imágenes dentro de hero-content
    const images = heroContent.querySelectorAll('img');
    
    // Si no hay imágenes, salir
    if (images.length === 0) return;
    
    // Crear contenedor para las imágenes de fondo
    const backgroundContainer = document.createElement('div');
    backgroundContainer.className = 'hero-background';
    
    // Mover las imágenes al contenedor de fondo
    images.forEach((img, index) => {
        const newImg = document.createElement('img');
        newImg.src = img.src;
        newImg.alt = img.alt || `Imagen ${index + 1}`;
        
        // La primera imagen se muestra activa
        if (index === 0) {
            newImg.classList.add('active');
        }
        
        backgroundContainer.appendChild(newImg);
    });
    
    // Insertar el contenedor de fondo al inicio del hero
    heroSection.insertBefore(backgroundContainer, heroSection.firstChild);
    
    // Obtener las nuevas imágenes del fondo
    const bgImages = backgroundContainer.querySelectorAll('img');
    let currentIndex = 0;
    
    // Función para cambiar de imagen
    function changeImage() {
        // Remover clase active de la imagen actual
        bgImages[currentIndex].classList.remove('active');
        
        // Incrementar el índice
        currentIndex = (currentIndex + 1) % bgImages.length;
        
        // Agregar clase active a la nueva imagen
        bgImages[currentIndex].classList.add('active');
    }
    
    // Cambiar imagen cada 5 segundos (5000 milisegundos)
    setInterval(changeImage, 5000);
    
});


// ========================================
// FORMULARIO DE WHATSAPP
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('formCotizacion');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener los valores del formulario
        const nombre = form.nombre.value;
        const telefono = form.telefono.value;
        const cedula = form.cedula.value;
        const origen = form.origen.value;
        const destino = form.destino.value;
        const servicio = form.servicio.value;
        const fecha = form.fecha.value;
        const pasajeros = form.pasajeros.value;
        const mensaje = form.mensaje.value;
        
        // Crear el mensaje para WhatsApp
        let textoWhatsApp = `*COTIZACIÓN RENTAR VICTORIA*%0A%0A`;
        textoWhatsApp += `*Nombre:* ${nombre}%0A`;
        textoWhatsApp += `*Teléfono:* ${telefono}%0A`;
        textoWhatsApp += `*Cédula:* ${cedula}%0A`;
        textoWhatsApp += `*Origen:* ${origen}%0A`;
        textoWhatsApp += `*Destino:* ${destino}%0A`;
        textoWhatsApp += `*Vehículo:* ${servicio}%0A`;
        textoWhatsApp += `*Fecha:* ${fecha}%0A`;
        textoWhatsApp += `*Pasajeros:* ${pasajeros}%0A`;
        
        if (mensaje && mensaje !== 'informe si requiere algún servicio especial') {
            textoWhatsApp += `*Mensaje:* ${mensaje}%0A`;
        }
        
        // Número de WhatsApp de la empresa
        const numeroWhatsApp = '573242418942';
        
        // Crear URL de WhatsApp
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoWhatsApp}`;
        
        // Abrir WhatsApp en nueva pestaña
        window.open(urlWhatsApp, '_blank');
    });
    
});