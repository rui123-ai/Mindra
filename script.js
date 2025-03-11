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
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
            datasets: [
                {
                    label: 'Economia de Tempo',
                    data: [6500, 7500, 5000, 2500, 4500, 4000, 2500, 2000],
                    borderColor: '#00BCD4',
                    backgroundColor: 'rgba(0, 188, 212, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Eficiência Operacional',
                    data: [5200, 6000, 4000, 2800, 2500, 1800, 1500, 1200],
                    borderColor: '#FFA726',
                    backgroundColor: 'rgba(255, 167, 38, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Qualidade dos Resultados',
                    data: [500, 3000, 2500, 4000, 3500, 6000, 5800, 6500],
                    borderColor: '#2962FF',
                    backgroundColor: 'rgba(41, 98, 255, 0.1)',
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
                        color: 'rgba(0, 0, 0, 0.05)',
                        drawBorder: false
                    },
                    ticks: {
                        font: {
                            family: "'Poppins', sans-serif"
                        },
                        callback: function(value) {
                            return value.toLocaleString();
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