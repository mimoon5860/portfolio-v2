module.exports = {
  particles: {
    particles: {
      number: { value: 30 },
      color: { value: ['#0be779', '#008a3e', '#a3ffce'] },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 0.2,
          opacity_min: 0.3,
          sync: false,
        },
      },
      size: {
        value: 50,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 400,
        color: '#ffffff',
        opacity: 0.1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        bounce: false,
      },
    },
    interactivity: {
      detect_on: 'canvas',
      // activate
      events: {
        onhover: {
          enable: true,
          mode: ['bubble'],
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 200,
          size: 17,
          duration: 1,
          opacity: 0.8,
          speed: 2,
        },
      },
    },
    retina_detect: true,
  },
}
