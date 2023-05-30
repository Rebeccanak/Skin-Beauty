
// Animation for Hero Section
anime({
    targets: '#hero',
    opacity: [0, 1],
    translateY: ['50px', '0px'],
    easing: 'easeOutExpo',
    duration: 1500,
    delay: 500
  });
  
  // Animation for About Section
  anime({
    targets: '#about',
    opacity: [0, 1],
    translateY: ['50px', '0px'],
    easing: 'easeOutExpo',
    duration: 1500,
    delay: 500
  });
  
  // Animation for Services Section
  anime({
    targets: '#services .service',
    opacity: [0, 1],
    translateY: ['50px', '0px'],
    easing: 'easeOutExpo',
    duration: 1500,
    delay: anime.stagger(300)
  });
  
  // Animation for Gallery Section
  anime({
    targets: '#gallery .gallery-item',
    opacity: [0, 1],
    translateY: ['50px', '0px'],
    easing: 'easeOutExpo',
    duration: 1500,
    delay: anime.stagger(300)
  });
  
  // Animation for Contact Section
  anime({
    targets: '#contact',
    opacity: [0, 1],
    translateY: ['50px', '0px'],
    easing: 'easeOutExpo',
    duration: 1500,
    delay: 500
  });
  
