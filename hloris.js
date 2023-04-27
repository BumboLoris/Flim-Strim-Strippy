
const num_im = 5;

const inter_gap = 0;  // that'd be in pixels, Chet.

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


let strippy = window.document . createElement ('div');
let soloist = window.document . createElement ('div');

window.strim = new Array ();  // attaches 'strim' to the global object

let total_wid = 0;

function OmniscienceAttained ()
{ let grid_str = "";

  for (let q = 0  ;  q < num_im  ;  ++q)
    { let im = strim[q];
      let w = im.width;
      if (w > 0)
        w += inter_gap;
      total_wid += w;
      grid_str = grid_str + w + "px ";
    }

  // now: how many times do we need to repeat?
  let winwid = window.innerWidth;
  let duper_count = 0;
  if (total_wid > winwid)
    duper_count = 1;
  else
    duper_count = 1 + Math.floor (winwid / total_wid);

  let full_grid_str = grid_str;
  for (let extry = 0  ;  extry < duper_count  ;  ++extry)
    full_grid_str = full_grid_str + grid_str;
  strippy.style["grid-template-columns"] = full_grid_str;

  for (let extry = 0  ;  extry < duper_count  ;  ++extry)
    for (let q = 0  ;  q < num_im  ;  ++q)
      { let im = strim[q] . cloneNode ()
        strippy . appendChild (im);
        LampreyHandlersOntoImage (im);
      }
}

let loaded_so_far = 0;

function CompletedIm (ev)
{ //
  console.log (ev);
  this.style.width = "auto";
  this.style.height = "80px";
  if (++loaded_so_far == num_im)
    OmniscienceAttained ();
}

function BadloadIm (ev)
{ //
  console.log (ev);
  if (++loaded_so_far == num_im)
    OmniscienceAttained ();
}


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

strippy.style.width = "100%";
strippy.style.height = "auto";
strippy.style.borderWidth = "2px";
strippy.style.borderStyle = "solid";
strippy.style.borderColor = "green";
strippy.style.position = 'absolute';
strippy.style.top = '0px';
strippy.style.left = '0px';
strippy.style.display = 'grid';
//strippy.style["grid-template-columns"] = 'repeat(15, 150px)';
//strippy.style["grid-template-rows"] = '120px';
strippy.style["align-items"] = 'center';
//strippy.style.gap = '10px';

let ell = 0;

for (let q = 0  ;  q < num_im  ;  ++q)
  { let im = new Image ();
    strim . push (im);
    strippy . appendChild (im);
    im.namai = "immy-" + (q+1);  // just a li'l name for debugging.

    im.style.borderWidth = brdr_wid;
    im.style.borderStyle = "solid";

    LampreyHandlersOntoImage (im);

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
  ell -= 10;
//  strippy.style.left = "" + ell + "px";
}

setInterval (FlipToNextImage, 333);


window.document.body . addEventListener ("keydown", KeyDownUniv);
