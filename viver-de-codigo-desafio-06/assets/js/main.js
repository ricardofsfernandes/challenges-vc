document.addEventListener('DOMContentLoaded', function() {
    // ===== SCROLL PARA SECTION-TWO =====
    const scrollDownBtn = document.getElementById('scroll-down-btn');
    
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Rola até a section-two, alinhando no topo (abaixo da navbar)
            document.getElementById('categories').scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Alinha o topo da seção com o topo da viewport
            });
            
            // Opcional: Adiciona hash na URL (#categories)
            window.location.hash = 'categories';
        });
    }

    // ===== COMPENSAÇÃO DA NAVBAR FIXA =====
    // Garante que as seções não fiquem escondidas atrás da navbar
    document.querySelectorAll('section[id]').forEach(section => {
        section.style.scrollMarginTop = '86px';
    });

    // ===== SCROLL SUAVE PARA LINKS INTERNOS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});