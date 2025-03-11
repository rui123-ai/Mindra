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

    // Adicione o código do gráfico
    const ctx = document.getElementById('metricsChart').getContext('2d');
    
    const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient1.addColorStop(0, 'rgba(58, 125, 68, 1)');
    gradient1.addColorStop(1, 'rgba(58, 125, 68, 0.1)');
    
    const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient2.addColorStop(0, 'rgba(163, 217, 165, 1)');
    gradient2.addColorStop(1, 'rgba(163, 217, 165, 0.1)');
    
    const gradient3 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient3.addColorStop(0, 'rgba(41, 98, 255, 1)');
    gradient3.addColorStop(1, 'rgba(41, 98, 255, 0.1)');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'],
            datasets: [
                {
                    label: 'Produtividade',
                    data: [65, 75, 62, 80, 75, 85, 87, 90],
                    borderColor: '#3A7D44',
                    backgroundColor: gradient1,
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Eficiência',
                    data: [55, 65, 58, 70, 65, 75, 80, 85],
                    borderColor: '#A3D9A5',
                    backgroundColor: gradient2,
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Satisfação',
                    data: [45, 55, 50, 60, 55, 65, 70, 75],
                    borderColor: '#2962FF',
                    backgroundColor: gradient3,
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 12
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: true,
                        color: '#f0f0f0'
                    },
                    ticks: {
                        font: {
                            family: "'Poppins', sans-serif"
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            family: "'Poppins', sans-serif"
                        }
                    }
                }
            }
        }
    });
}); 