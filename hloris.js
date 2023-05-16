
//import { MotherTime } from "./MotherTime.js";


const brdr_wid = "2px";

function MouseEnterIm (ev)
{ this.style.borderColor = "red";
  this.style.borderWidth = "2px";
}

function MouseLeaveIm (ev)
{ this.style.borderColor = "rgba(0,0,0,0.0)"; }

function MouseDownIm (ev)
{ this.style.borderColor = "blue";
  let ss = document . getElementById ("sub-snack");
  if (ss)
    { let url = stripster . ValueForMetaKeyAndKey ("snack-url",
                                                   this.strippy_orig_img_index);
      if (url)
        ss.src = url;
    }
 }

function MouseUpIm (ev)
{ this.style.borderColor = "pink"; }


function LampreyHandlersOntoImage (im)
{ im.style.borderStyle = "solid";
  im.style.borderWidth = "2px";
  im.style.borderColor = "rgba(0,0,0,0.0)";
  im . addEventListener ("mouseenter", MouseEnterIm);
  im . addEventListener ("mouseleave", MouseLeaveIm);
  im . addEventListener ("mousedown", MouseDownIm);
  im . addEventListener ("mouseup", MouseUpIm);
}


let hoveree = null;

stripster . ApplyToStripImagesOnceLoaded (LampreyHandlersOntoImage);
let strim = stripster . OriginalImageArray ();

stripster.style.position = "absolute";
stripster.style.top = "20px";


let soloist = window.document . createElement ('div');

window.document.body . appendChild (soloist);


let flim = new Image ();
let flimcount = 0;

soloist.style.position = "absolute";
soloist.style.top = "200px";
soloist . appendChild (flim);

function FlipToNextImage ()
{ flim.src = strim[flimcount].src;
  if (++flimcount  >=  strim.length)
      flimcount = 0;
}

function RandomHSL ()
{ const h = Math.floor (360.0 * Math.random ());
  const s = 25.0 + Math.floor (75.0 * Math.random ());
  const l = 50;
  const hsl_str = `hsl(${h} ${s}% ${l}%)`;
  return hsl_str;
}


const morsels = new Array ();
for (let q = 0  ;  q < 17  ;  ++q)
  { const rec = window.document . createElement ('div');
    rec.style.width = "150px";
    rec.style.height = "100px";
    rec.style.backgroundColor = RandomHSL ();
    //window.document.body . appendChild (rec);
    morsels . push (rec);
  }

const dg = MakeDitheryGridWithContents (morsels);
dg.style.position = 'absolute';
dg.style.top = "400px";
dg.style.width = "" + window.innerWidth + "px";
window.document.body . appendChild (dg);
dg . LayOutPreliminarily ();

dg . addEventListener ('mousedown', () => { dg . ScrambleCells ();
                                            dg . LayOutAnew (); }
                      );


setInterval (FlipToNextImage, 333);
