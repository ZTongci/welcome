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

const LineBackGround = {
    particles: {
      color: {
        value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"],
        animation: {
          enable: true,
          speed: 10
        }
      },
      move: {
        attract: {
          enable: false,
          distance: 100,
          rotate: {
            x: 2000,
            y: 2000
          }
        },
        direction: "none",
        enable: true,
        outModes: {
          default: "destroy"
        },
        path: {
          clamp: false,
          enable: true,
          delay: {
            value: 0
          },
          generator: "polygonPathGenerator",
          options: {
            sides: 6,
            turnSteps: 30,
            angle: 30
          }
        },
        random: false,
        speed: 3,
        straight: false,
        trail: {
          fillColor: "#FFFFFF",
          length: 20,
          enable: true
        }
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 0
      },
      opacity: {
        value: 1
      },
      shape: {
        type: "circle"
      },
      size: {
        value: 2
      }
    },
    background: {
      color: "#000"
    },
    fullScreen: {
      zIndex: -1
    },
    emitters: {
      direction: "none",
      rate: {
        quantity: 1,
        delay: 0.25
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
  }




  
  const totalBackground = [LineBackGround, CardBackGround, bubble];

  export const randomBackground = ()=>{
    const random = Math.floor(Math.random() * totalBackground.length);
    return totalBackground[random];
  };