const bubble ={
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1
      },
      size: {
        value: { min: 1, max: 8 }
      },
      links: {
        enable: false,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        repulse: {
          distance: 160,
        },
        push: {
          quantity: 10
        }
      }
    }
  }


const CardBackGround = {
  
    fullScreen: {
      enable: true
    },
    detectRetina: true,
    background: {
      color: "#FFFFFF"
    },
    fpsLimit: 120,
    emitters: {
      direction: "top",
      life: {
        count: 0,
        duration: 0.1,
        delay: 0.1
      },
      rate: {
        delay: 0.01,
        quantity: 1
      },
      size: {
        width: 100,
        height: 0
      },
      position: {
        y: 100,
        x: 50
      }
    },
    particles: {
      number: {
        value: 0
      },
      destroy: {
        mode: "split",
        split: {
          count: 1,
          factor: { value: 1 / 3 },
          rate: {
            value: 30
          },
          particles: {
            color: {
              value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"]
            },
            stroke: {
              width: 0
            },
            number: {
              value: 0
            },
            collisions: {
              enable: false
            },
            opacity: {
              value: 1,
              animation: {
                enable: true,
                speed: 0.6,
                minimumValue: 0.1,
                sync: false,
                startValue: "max",
                destroy: "min"
              }
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 2, max: 3 },
              animation: {
                enable: false
              }
            },
            life: {
              count: 1,
              duration: {
                value: {
                  min: 1,
                  max: 2
                }
              }
            },
            move: {
              enable: true,
              gravity: {
                enable: false
              },
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              outMode: "destroy"
            }
          }
        }
      },
      life: {
        count: 1
      },
      shape: {
        type: "line"
      },
      size: {
        value: { min: 1, max: 100 },
        animation: {
          enable: true,
          sync: true,
          speed: 150,
          startValue: "random",
          destroy: "min"
        }
      },
      stroke: {
        color: {
          value:  ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"]
        },
        width: 0.1
      },
      rotate: {
        path: true
      },
      move: {
        enable: true,
        gravity: {
          acceleration: 15,
          enable: true,
          inverse: true,
          maxSpeed: 100
        },
        speed: { min: 10, max: 20 },
        outModes: {
          default: "destroy",
          top: "none"
        },
        trail: {
          fillColor: "white",
          enable: true,
          length: 10
        }
      }
    }
};

const bubbleExlosion = {
  
    backgroundMode: {
      enable: true
    },
    fpsLimit: 120,
    particles: {
      number: {
        value: 0
      },
      collisions: {
        enable: false
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: { min: 0.3, max: 0.8 }
      },
      size: {
        value: { min: 1, max: 10 }
      },
      move: {
        enable: true,
        size: true,
        speed: 5,
        direction: "none",
        outModes: {
          default: "destroy"
        },
        trail: {
          enable: true,
          fillColor: "#FFFFFF",
          length: 1
        }
      }
    },
    detectRetina: true,
    emitters: {
      direction: "none",
      rate: {
        delay: 0.25,
        quantity: 10
      },
      position: {
        x: 50,
        y: 50
      },
      size: {
        width: 0,
        height: 0
      },
      spawnColor: {
        value: "#ff0000",
        animation: {
          h: {
            enable: true,
            speed: 5
          },
          l: {
            enable: true,
            speed: 0,
            // offset: {
            //   min: 20,
            //   max: 80
            // }
          }
        }
      }
    }
}

const leftdownbubbleBackground = {
  fpsLimit: 120,
  particles: {
    number: {
      value: 0,
      density: {
        enable: false,
        value_area: 800
      }
    },
    color: {
      value: "#000"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "https://cdn.matteobruni.it/images/particles/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#000",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
        parallax: {
          enable: false,
          force: 60,
          smooth: 10
        }
      },
      onclick: {
        enable: false,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
        speed: 3
      },
      repulse: {
        distance: 200
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true,
  background: {
    color: "#fff",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover"
  },
  emitters: [
    {
      direction: "top-right",
      position: {
        x: 0,
        y: 100
      },
      particles: {
        shape: {
          type: "circle"
        },
        color: {
          value: "random"
        },
        lineLinked: {
          enable: false,
          distance: 150,
          color: "#000",
          opacity: 0.4,
          width: 1
        },
        opacity: {
          value: 0.3
        },
        rotate: {
          value: 0,
          random: true,
          direction: "counter-clockwise",
          animation: {
            enable: true,
            speed: 15,
            sync: false
          }
        },
        size: {
          value: 10,
          random: {
            enable: true,
            minimumValue: 5
          }
        },
        move: {
          speed: 2,
          random: false,
          outMode: "bounce"
        }
      }
    }
  ]
}

const bubblrRclodion2 = {
  fpsLimit: 120,
  interactivity: {
    detectsOn: "canvas",
    events: {
      resize: true
    }
  },
  particles: {
    color: {
      value: [
        "#3998D0",
        "#2EB6AF",
        "#A9BD33",
        "#FEC73B",
        "#F89930",
        "#F45623",
        "#D62E32",
        "#EB586E",
        "#9952CF"
      ]
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 800,
          y: 800
        }
      },
      direction: "none",
      enable: true,
      outModes: {
        default: "destroy"
      },
      random: false,
      speed: 2,
      straight: false,
      trail: {
        fillColor: "#FFFFFF",
        length: 30,
        enable: true
      }
    },
    number: { density: { enable: true, area: 800 }, value: 0 },
    opacity: {
      value: 0.1
    },
    shape: {
      type: "circle"
    },
    size: {
      value: 25,
      animation: {
        startValue: "min",
        enable: true,
        minimumValue: 1,
        speed: 2,
        destroy: "max",
        sync: true
      }
    }
  },
  detectRetina: true,
  emitters: {
    direction: "none",
    rate: {
      quantity: 2,
      delay: 0.3
    },
    size: {
      width: 0,
      height: 0
    },
    position: {
      x: 50,
      y: 50
    }
  }
};


  
  const totalBackground = [ 
    leftdownbubbleBackground, CardBackGround, bubble,
    bubbleExlosion,
    bubblrRclodion2
  ];

  export const randomBackground = ()=>{
    const random = Math.floor(Math.random() * totalBackground.length);
    return totalBackground[random];
  };