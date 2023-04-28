
//import { MotherTime } from "./MotherTime.js";


const num_im = 5;

const inter_gap = 8;  // that'd be in pixels, Chet.

const brdr_wid = "2px";

function MouseEnterIm (ev)
{ this.style.borderColor = "red";
  this.style.borderWidth = "2px";
  hoveree = this;
}

function MouseLeaveIm (ev)
{ this.style.borderColor = "rgba(0,0,0,0.0)";
  hoveree = null;
}

function MouseDownIm (ev)
{ this.style.borderColor = "blue";
//  this.style.borderWidth = "100px";
}

function MouseUpIm (ev)
{ this.style.borderColor = "pink";
  this.before(" frog");
}

function KeyDownUniv (ev)
{ if (hoveree != null)
    hoveree . before (" flap");
}


function LampreyHandlersOntoImage (im)
{ im . addEventListener ("mouseenter", MouseEnterIm);
  im . addEventListener ("mouseleave", MouseLeaveIm);
  im . addEventListener ("mousedown", MouseDownIm);
  im . addEventListener ("mouseup", MouseUpIm);
}


let soloist = window.document . createElement ('div');


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

let strim = stripster . ImageArray ();

window.document.body . appendChild (soloist);

window.document.body . appendChild (cusser);


let ell = 0;

let flim = new Image ();
let flimcount = 0;

flim.style.position = "absolute";
flim.style.top = "200px";
soloist . appendChild (flim);


function FlipToNextImage ()
{ flim.src = strim[flimcount].src;
  if (++flimcount  >=  num_im)
      flimcount = 0;
  ell -= 10;
//  strippy.style.left = "" + ell + "px";
}

setInterval (FlipToNextImage, 333);


window.document.body . addEventListener ("keydown", KeyDownUniv);
