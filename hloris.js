
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

soloist.style.position = "relative";
soloist.style.top = "200px";
soloist . appendChild (flim);

function FlipToNextImage ()
{ flim.src = strim[flimcount].src;
  if (++flimcount  >=  strim.length)
      flimcount = 0;
}


setInterval (FlipToNextImage, 333);
