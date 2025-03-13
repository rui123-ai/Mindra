document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Manipulação do formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coleta os dados do formulário
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Aqui você pode adicionar a lógica para enviar os dados para seu backend
            // Por enquanto, apenas mostraremos um alerta
            alert('Mensagem enviada com sucesso!\nEm breve entraremos em contato.');
            
            // Limpa o formulário
            contactForm.reset();
        });
    }

    // Header scroll effect
    const header = document.querySelector('.header');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Active link highlight
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink?.classList.add('active');
            } else {
                navLink?.classList.remove('active');
            }
        });
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Animação das barras de progresso no scroll
    function animateProgressBars() {
        const metricsSection = document.querySelector('.metrics-grid');
        const progressBars = document.querySelectorAll('.progress-fill');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    progressBars.forEach(bar => {
                        const metricValue = bar.parentElement.parentElement.querySelector('.metric-value');
                        const targetWidth = metricValue.textContent;
                        
                        // Adiciona classes de animação
                        bar.classList.add('animated');
                        metricValue.classList.add('animated');
                        
                        // Anima a barra
                        bar.style.width = targetWidth;
                        
                        // Remove as classes de animação após a conclusão
                        setTimeout(() => {
                            bar.classList.remove('animated');
                            metricValue.classList.remove('animated');
                        }, 2000);
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });

        observer.observe(metricsSection);
    }

    // Inicializa a animação das barras de progresso
    animateProgressBars();
}); 