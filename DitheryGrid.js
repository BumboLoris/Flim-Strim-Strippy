
function MakeMByNDitheryGrid (emm, enn)
{ let dgrid = MakeDitheryGrid ();

  return dgrid;
}

function MakeDitheryGridWithContents (cont_arr)
{ let dgrid = MakeDitheryGrid ();
  if (cont_arr)
    cont_arr . forEach ( (el) => dgrid . AppendGridCell (el) );
  return dgrid;
}


function MakeDitheryGrid ()
{ let dithgrid = window.document . createElement ('div');

  let h_cnt = 4;
  let h_brd = 10, h_gap = 4;
  let v_brd = 10, v_gap = 4;
  let asp_rat = 1.5;

  let all_cells = new Array ();

  let am_dithering = false;
  let dither_dur = 0.5;
  let dithinterp_fn = InterpFuncs.QUADRATIC_AB;

  let momma_t = new MotherTime ();


  function _AnimateGrudgingly ()
    { let rawt = momma_t . CurTime ();
      let t = rawt / dither_dur;
      if (t > 1.0)
        t = 1.0;
      t = dithinterp_fn (t);
      let omt = 1.0 - t;

      for (const el of all_cells)
        { let lt = omt * el.prvl  +  t * el.newl;
          let tp = omt * el.prvt  +  t * el.newt;
          el.style.left = "" + (el.curl = lt) + "px";
          el.style.top = "" + (el.curt = tp) + "px";
        }

      if (t < 1.0)
        setTimeout (_AnimateGrudgingly, 33);
      else
        am_dithering = false;
    }


  function _LayOut (animate)
    { const elcnt = all_cells.length;
      let elwid = dithgrid.offsetWidth - (2 * h_brd + (h_cnt - 1) * h_gap);
      elwid = elwid / h_cnt;
      let elhei = elwid / asp_rat;
      let v_cnt = Math.ceil (elcnt / h_cnt);
      const wstr = "" + elwid + "px", hstr = "" + elhei + "px";

      let anim = ! ! animate;

      let lt = h_brd, tp = v_brd;
      let q = 0;
      for (const el of all_cells)
        { el.style.width = wstr;
          el.style.height = hstr;
          el.prvl = el.newl || lt;
          el.prvt = el.newt || tp;
          el.newl = lt;
          el.newt = tp;
          if (! anim)
            { el.style.left = "" + lt + "px";
              el.style.top = "" + tp + "px";
            }
          else if (am_dithering)
            { el.prvl = el.curl;
              el.prvt = el.curt;
            }

          if (++q  <  h_cnt)
            lt += elwid + h_gap;
          else
            { q = 0;
              lt = h_brd;
              tp += elhei + v_gap;
            }
        }

      if (anim)
        { momma_t . ZeroTime ();
          if (! am_dithering)
            { am_dithering = true;
              setTimeout (_AnimateGrudgingly, 33);
            }
        }
    }

  dithgrid.LayOutPreliminarily = function ()
    { _LayOut (); }

  dithgrid.LayOutAnew = function ()
    { _LayOut (true); }

  dithgrid.AppendGridCell = function (el)
    { all_cells . push (el);
      el.style.position = 'absolute';
      dithgrid . appendChild (el);
    }

  dithgrid.ScrambleCells = function ()
    { let novo_arr = new Array ();
      const cnt = all_cells.length;
      for (let q = 0  ;  q < cnt  ;  ++q)
        { const ind = Math.floor (all_cells.length * Math.random ());
          novo_arr . push (all_cells . at (ind));
          all_cells . splice (ind, 1);
        }
      all_cells = novo_arr;
    }

  dithgrid.RearrangeAccordingTo = function (pred_fn)
    { let oui_arr = new Array (), non_arr = new Array ();
      for (const el of all_cells)
        if (pred_fn (el))
          oui_arr . push (el);
        else
          non_arr . push (el);
      all_cells = oui_arr . concat (non_arr);
      dithgrid . LayOutAnew ();
    }

  dithgrid.NumColumns = function ()
    { return h_cnt; }
  dithgrid.SetNumColumns = function (nc)
    { h_cnt = nc;  return this; }

  dithgrid.HBorder = function ()
    { return h_brd; }
  dithgrid.SetHBorder = function (hb)
    { h_brd = hb;  return this; }

  dithgrid.VBorder = function ()
    { return v_brd; }
  dithgrid.SetHBorder = function (vb)
    { v_brd = vb;  return this; }

  dithgrid.HGap = function ()
    { return h_gap; }
  dithgrid.SetHGap = function (hg)
    { h_gap = hg;  return this; }

  dithgrid.VGap = function ()
    { return v_gap; }
  dithgrid.SetHGap = function (vg)
    { v_gap = vg;  return this; }


  dithgrid.DitherDuration = function ()
    { return dither_dur; }
  dithgrid.SetDitherDuration = function (dd)
    { dither_dur = dd;  return this; }

  dithgrid.DitherInterpFunc = function ()
    { return dithinterp_fn; }
  dithgrid.SetDitherInterpFunc = function (dif)
    { dithinterp_fn = dif;  return this; }


  dithgrid.CellAspectRatio = function ()
    { return asp_rat; }
  dithgrid.SetCellAspectRatio = function (ar)
    { asp_rat = ar;  return this; }




  return dithgrid;
}
