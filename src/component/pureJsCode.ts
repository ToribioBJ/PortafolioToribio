//@ts-nocheck
// src/components/pureJsCode.ts

export function runBackground(mainElement: HTMLElement) {
  // --- AQUÍ PEGAS TU CÓDIGO JS PURO ---

  const r = (from, to) => ~~(Math.random() * (to - from + 1) + from);
  const pick = (...args) => args[r(0, args.length - 1)];
  const getChar = () => String.fromCharCode(pick(
    r(0x3041, 0x30ff),
    r(0x2000, 0x206f),
    r(0x0020, 0x003f)
  ));

  const loops = [];
  function loop(fn, delay) {
    let stamp = Date.now();
    let frame;
    function _loop() {
      if (Date.now() - stamp >= delay) {
        fn(); stamp = Date.now();
      }
      frame = requestAnimationFrame(_loop);
    }
    frame = requestAnimationFrame(_loop);
    loops.push(() => cancelAnimationFrame(frame));
  }

  class Char {
    constructor() {
      this.element = document.createElement('span');
      this.element.style.display = 'block';
      this.mutate();
    }
    mutate() { this.element.textContent = getChar(); }
  }

  class Trail {
    constructor(list = [], options) {
      this.list = list;
      this.options = Object.assign({ size: 10, offset: 0 }, options);
      this.body = [];
      this.move();
    }
    traverse(fn) {
      this.body.forEach((n, i) => {
        let last = (i == this.body.length - 1);
        if (n) fn(n, i, last);
      });
    }
    move() {
      this.body = [];
      let { offset, size } = this.options;
      for (let i = 0; i < size; ++i) {
        let item = this.list[(offset + i - size + 1 + this.list.length) % this.list.length];
        this.body.push(item);
      }
      this.options.offset = (offset + 1) % this.list.length;
    }
  }

  class Rain {
    constructor({ target, row }) {
      this.element = document.createElement('p');
      this.element.style.cssText = "margin:0; display:inline-block; vertical-align:top; font-family:monospace";
      this.build(row);
      if (target) target.appendChild(this.element);
      this.drop();
    }
    build(row = 20) {
      let root = document.createDocumentFragment();
      let chars = [];
      for (let i = 0; i < row; ++i) {
        let c = new Char();
        root.appendChild(c.element);
        chars.push(c);
        if (Math.random() < .5) {
          loop(() => c.mutate(), r(1e3, 5e3));
        }
      }
      this.trail = new Trail(chars, { size: r(10, 30), offset: r(0, 100) });
      this.element.appendChild(root);
    }
    drop() {
      let trail = this.trail;
      let len = trail.body.length;
      loop(() => {
        trail.move();
        trail.traverse((c, i, last) => {
          c.element.style.color = `hsl(136, 100%, ${85 / len * (i + 1)}%)`;
          if (last) {
            c.mutate();
            c.element.style.color = `hsl(136, 100%, 85%)`;
            c.element.style.textShadow = "0 0 .5em #fff, 0 0 .5em currentColor";
          } else {
            c.element.style.textShadow = "none";
          }
        });
      }, r(10, 100));
    }
  }

  // Configuración del contenedor
  mainElement.style.display = "flex";
  mainElement.style.justifyContent = "space-around";

  for (let i = 0; i < 50; ++i) {
    new Rain({ target: mainElement, row: 50 });
  }

  // --- FIN DEL CÓDIGO ---

  return () => {
    loops.forEach(stop => stop());
  };
}