
const num_im = 5;

function MouseEnterIm (ev)
{ this.style.borderColor = "red";
  this.style.borderWidth = "thick";
  hoveree = this;
}

function MouseLeaveIm (ev)
{ this.style.borderColor = "black";
  this.style.borderWidth = "0px";
  //this.blur ();
  hoveree = null;
}

function MouseDownIm (ev)
{ this.style.borderColor = "blue";
  this.style.borderWidth = "100px";
}

function MouseUpIm (ev)
{ this.style.borderColor = "pink";
  this.style.borderWidth = "0px";
  this.before(" frog");
}

function KeyDownUniv (ev)
{ if (hoveree != null)
    hoveree . before (" flap");
}


function CompletedIm (ev)
{ //
  console.log (ev);
  this.style.width = "auto";
  this.style.height = "70%";
}

function BadloadIm (ev)
{ //
  console.log (ev);
}


let strippy = window.document . createElement ('div');
let soloist = window.document . createElement ('div');

window.strim = new Array ();  // attaches 'strim' to the global object

let hoveree = null;

let cusser = window.document . createElement ('div');
let canvoo = window.document . createElement ('canvas');
cusser . appendChild (canvoo);
cusser.style.position = 'absolute';
cusser.style.left = '100px';
cusser.style.top = '200px';
cusser.style.width = '60px';
cusser.style.height = '60px';
cusser["style"]["pointer-events"] = 'none';

canvoo.style.width = "100%";
canvoo.style.height = "100%";
canvoo.style.backgroundColor = "#20ff2050";
globalThis.canvoo = canvoo;

function CursorShambler (ev)
{ cusser.style.left = ""  +  (ev.clientX - 30)  +  "px";
  cusser.style.top = ""  +  (ev.clientY - 30)  +  "px";
}

window.document . addEventListener ("mousemove", CursorShambler);

window.document.body . appendChild (strippy);
window.document.body . appendChild (soloist);

window.document.body . appendChild (cusser);

strippy.style.height = "10%";

for (let q = 0  ;  q < num_im  ;  ++q)
  { let im = new Image ();
    strim . push (im);
    strippy . appendChild (im);
    im.namai = "immy-" + (q+1);  // just a li'l name for debugging.

    im.style.borderWidth = "0px";
    im.style.borderStyle = "solid";

    im . addEventListener ("mouseenter", MouseEnterIm);
    im . addEventListener ("mouseleave", MouseLeaveIm);
    im . addEventListener ("mousedown", MouseDownIm);
    im . addEventListener ("mouseup", MouseUpIm);

    im . addEventListener ("load", CompletedIm);
    im . addEventListener ("error", BadloadIm);
    im.src = "image" + (q+1) + ".png";
}


let flim = new Image ();
let flimcount = 0;
soloist . appendChild (flim);


function FlipToNextImage ()
{ flim.src = strim[flimcount].src;
  if (++flimcount  >=  num_im)
      flimcount = 0;
}

setInterval (FlipToNextImage, 333);


window.document.body . addEventListener ("keydown", KeyDownUniv);
