
function MakeStrippyShambler (im_name_base, num_im, im_height, inter_gap,
                              ApplyEventHandlersFunc)
{ if (typeof (im_height) != 'number')
    im_height = 120;
  if (inter_gap == undefined)
    inter_gap = 0;

  let strippy = window.document . createElement ('div');
  let strim = new Array ();

  if (typeof (im_name_base) != 'string'
      ||  num_im == undefined  ||  typeof (num_im) != 'number')
    return strippy;

  let total_wid = 0;

  let strip_xpos = 0;
  let strip_drift_per_sec = -35.0;

  let momma = new MotherTime ();


  function OmniscienceAttained ()
    { let grid_str = "";

      for (let q = 0  ;  q < num_im  ;  ++q)
        { let im = strim[q];
//          let w = im.width;
          let w = im_height * im.naturalWidth;
          if (im.naturalHeight != 0)
            w /= im.naturalHeight;
          if (w > 0)
            w += inter_gap;
//          strippy . appendChild (im);
          total_wid += w;
          grid_str = grid_str + w + "px ";
        }

      // now: how many times do we need to repeat?
      let winwid = window.innerWidth;
      let duper_count = 1 + Math.floor (winwid / total_wid);

      let full_grid_str = grid_str;
      for (let extry = 0  ;  extry < duper_count  ;  ++extry)
        full_grid_str = full_grid_str + grid_str;
      strippy.style["grid-template-columns"] = full_grid_str;

      for (let extry = 0  ;  extry < duper_count  ;  ++extry)
        for (let q = 0  ;  q < num_im  ;  ++q)
          { let im = strim[q] . cloneNode ()
            strippy . appendChild (im);
            if (typeof (ApplyEventHandlersFunc)  ==  'function')
              ApplyEventHandlersFunc (im);
          }

      momma . ZeroTime ();
      setInterval (ScrollThatOldStrippy, 33);

      if (strip_drift_per_sec  >  0.0)
        { strip_xpos = -total_wid;
          strippy.style.left = "" + strip_xpos + "px";
        }
    }


  function ScrollThatOldStrippy ()
    { let dt = momma . DeltaTime ();
      strip_xpos += dt * strip_drift_per_sec;

      if (strip_drift_per_sec  <  0.0)
        { while (strip_xpos  <  -total_wid)
            strip_xpos += total_wid;
        }
      else
        { while (strip_xpos  >  0.0)
            strip_xpos -= total_wid;
        }

      strippy.style.left = "" + strip_xpos + "px";
    }


  let loaded_so_far = 0;

  function CompletedIm (ev)
    { this.style.width = "auto";
      this.style.height = "" + im_height + "px";
      if (++loaded_so_far == num_im)
        OmniscienceAttained ();
    }

  function BadloadIm (ev)
    { if (++loaded_so_far == num_im)
        OmniscienceAttained ();
    }

  for (let q = 0  ;  q < num_im  ;  ++q)
    { let im = new Image ();
      strim . push (im);
      strippy . appendChild (im);
      im.namai = "immy-" + (q+1);  // just a li'l name for debugging.

      im . addEventListener ("load", CompletedIm);
      im . addEventListener ("error", BadloadIm);

      if (typeof (ApplyEventHandlersFunc)  ==  'function')
        ApplyEventHandlersFunc (im);

      im.src = im_name_base + (q+1) + ".png";
    }

  strippy.ImageArray = function ()
    { return strim; }

  strippy.ShambleSpeed = function ()
    { return strip_drift_per_sec; }

  strippy.SetShambleSpeed = function (pxl_per_sec)
    { strip_drift_per_sec = pxl_per_sec; }

  strippy.style.width = "100%";
  strippy.style.height = "auto";
  strippy.style.position = 'absolute';
  strippy.style.top = '0px';
  strippy.style.left = '0px';
  strippy.style.display = 'grid';
  strippy.style["align-items"] = 'center';

  return strippy;
}
