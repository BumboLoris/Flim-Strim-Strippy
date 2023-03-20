
globalThis.strim = new Array ();

const num_im = 5;

for (let q = 0  ;  q < num_im  ;  ++q)
  strim . push (new Image ());


let im;

for (let q = 0  ;  q < num_im  ;  ++q)
  { im = strim[q];
    im.src = "image" + (q+1) + ".png";
    im.style.borderWidth = "0px";
    im.style.borderStyle = "solid";
/*
    if (q == 2)
      im.style.borderColor = "red";
    else
      im.style.borderColor = "black";
*/
    im.namai = "" + (q+1);

    im . addEventListener ("mouseenter",
                           function (ev) { this.style.borderColor = "red";
//                                           console.log ("IN -- " + this.namai);
                                              this.style.borderWidth = "thick";

                                              this.focus ();
                                         }
                          );
    im . addEventListener ("mouseleave",
                           function (ev) { this.style.borderColor = "black";
                                            this.style.borderWidth = "0px";
                                            this.blur ();
//                                           console.log ("OUT -- " + this.namai);
                                         }
                          );

im . addEventListener ("mousedown",
                           function (ev) { this.style.borderColor = "blue";
                                            this.style.borderWidth = "100px";

//                                           console.log ("OUT -- " + this.namai);
                                         }
                          );

im . addEventListener ("mouseup",
                           function (ev) { this.style.borderColor = "pink";
                                            this.style.borderWidth = "0px";
                                            this.before("frog");
//                                           console.log ("OUT -- " + this.namai);
                                         }
                          );

im . addEventListener ("keydown",
                           function (ev) { 
                           //                  this.style.borderColor = "blue";
                           //                  this.style.borderWidth = "100px";
                                          console.log ("key -- " + this.namai);
// let frimp=globalThis.document . createElement ('div');

// frimp.textContent="frog";

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
                            if (++flimcount >= num_im)
                              flimcount = 0;
                         },
                        333
            );

