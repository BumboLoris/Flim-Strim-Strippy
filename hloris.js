
globalThis.strim = new Array ();

const num_im = 5;

for (let q = 0  ;  q < num_im  ;  ++q)
  strim . push (new Image ());


for (let q = 0  ;  q < num_im  ;  ++q)
  { let im = strim[q];
    im.src = "image" + (q+1) + ".png";
    im.style.borderWidth = "0px";
    im.style.borderStyle = "solid";

    im.namai = "immy-" + (q+1);  // just a li'l name for debugging.

    im . addEventListener ("mouseenter",
                           function (ev) { this.style.borderColor = "red";
                                           this.style.borderWidth = "thick";
                                           this.focus ();
                                         }
                          );
    im . addEventListener ("mouseleave",
                           function (ev) { this.style.borderColor = "black";
                                            this.style.borderWidth = "0px";
                                            this.blur ();
                                         }
                          );

    im . addEventListener ("mousedown",
                           function (ev) { this.style.borderColor = "blue";
                                           this.style.borderWidth = "100px";
                                         }
                          );

    im . addEventListener ("mouseup",
                           function (ev) { this.style.borderColor = "pink";
                                           this.style.borderWidth = "0px";
                                           this.before("frog");
                                         }
                          );

    im . addEventListener ("keydown",
                           function (ev) { // this.style.borderColor = "blue";
                                           // this.style.borderWidth = "100px";
                                           console.log ("key -- " + this.namai);
                                         }
                          );
}


let strippy = globalThis.document . createElement ('div');

globalThis.document.body . appendChild (strippy);

for (let q = 0  ;  q < num_im  ;  ++q)
  strippy . appendChild (strim[q]);

let flim = new Image ();

let flimcount = 0;

strim . push (flim);


strippy . appendChild (strim[num_im]);


setInterval (function () { flim.src = strim[flimcount].src;
                           if (++flimcount  >=  num_im)
                             flimcount = 0;
                         },
             333
            );
