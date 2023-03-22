
window.strim = new Array ();

const num_im = 5;

for (let q = 0  ;  q < num_im  ;  ++q)
  strim . push (new Image ());

let hoveree = null;

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

for (let q = 0  ;  q < num_im  ;  ++q)
  { let im = strim[q];
    im.src = "image" + (q+1) + ".png";
    im.style.borderWidth = "0px";
    im.style.borderStyle = "solid";

    im.namai = "immy-" + (q+1);  // just a li'l name for debugging.

    im . addEventListener ("mouseenter", MouseEnterIm);
    im . addEventListener ("mouseleave", MouseLeaveIm);
    im . addEventListener ("mousedown", MouseDownIm);
    im . addEventListener ("mouseup", MouseUpIm);
}


let strippy = window.document . createElement ('div');
let soloist = window.document . createElement ('div');

window.document.body . appendChild (strippy);
window.document.body . appendChild (soloist);

for (let q = 0  ;  q < num_im  ;  ++q)
  strippy . appendChild (strim[q]);

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
