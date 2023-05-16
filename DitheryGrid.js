
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

  function _LayOut ()
    { const elcnt = dithgrid.childNodes.length;
      let elwid = dithgrid.offsetWidth - (2 * h_brd + (h_cnt - 1) * h_gap);
      elwid = elwid / h_cnt;
      let elhei = elwid / asp_rat;
      let v_cnt = Math.ceil (elcnt / h_cnt);
      const wstr = "" + elwid + "px", hstr = "" + elhei + "px";

      let lt = h_brd, tp = v_brd;
      let q = 0;
      for (const el of dithgrid.childNodes)
        { el.style.left = "" + lt + "px";
          el.style.top = "" + tp + "px";
          el.style.width = wstr;
          el.style.height = hstr;
          //el.style.width = 
          if (++q  <  h_cnt)
            lt += elwid + h_gap;
          else
            { q = 0;
              lt = h_brd;
              tp += elhei + v_gap;
            }
        }
    }

  dithgrid.LayOutPreliminarily = function ()
    { _LayOut (); }

  dithgrid.AppendGridCell = function (el)
    { //
      el.style.position = 'absolute';
      dithgrid . appendChild (el);
    }


  return dithgrid;
}
