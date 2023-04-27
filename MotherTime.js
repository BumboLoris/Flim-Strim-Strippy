
//
// (c) treadle & loam, provisioners llc
//


class MotherTime
{ //
  static OOAT = (1.0 / 1000.0);

  static MILLISECS_OF_NOW ()
    { return Date.now (); }

  static AbsoluteTime ()
    { return OOAT * MILLISECS_OF_NOW (); }

  constructor ()
    { this.secs_per_sec = 1.0;
      this.chrono_freeze = false;
      // this.prev_millisecs = this.constructor.MILLISECS_OF_NOW ();
      this.ZeroTime ();
    }


  CurTime ()
    { if (this.chrono_freeze)
        return this.nowesque_time;
      this.nowesque_time += this._ElapsedOffset ();
      return this.nowesque_time;
    }

  CurTimeGlance ()
    { if (this.chrono_freeze)
        return this.nowesque_time;
      this.nowesque_time += this._ElapsedOffsetGlance ();
      return this.nowesque_time;
    }

  DeltaTime ()
    { if (this.chrono_freeze)
        return 0.0;
      let dt = this._ElapsedOffset ();
      this.nowesque_time += dt;
      return dt;
    }

  DeltaTimeGlance ()
    { if (this.chrono_freeze)
        return 0.0;
      return this._ElapsedOffsetGlance ();
    }


  SetTime (t)
    { this._ElapsedOffset ();
      return (this.nowesque_time = t);
    }

  ShiftTime (dt)
    { this._ElapsedOffset ();
      return (this.nowesque_time += dt);
    }

  ZeroTime ()
    { this._ElapsedOffset ();
      return (this.nowesque_time = 0.0);
    }


  TimePausedness ()
    { return this.chrono_freeze; }

  SetTimePausedness (bool_tp)
    { if (this.chrono_freeze == bool_tp)
        return this.nowesque_time;
      let cur = this.CurTime ();
      this.chrono_freeze = bool_tp;
      if (! bool_tp)
        this.prev_millisecs = this.constructor.MILLISECS_OF_NOW ();
      return cur;
    }

  PauseTime ()
    { return this.SetTimePausedness (true); }

  UnpauseTime ()
    { return this.SetTimePausedness (false); }

  ToggleTimePausedness ()
    { return this.SetTimePausedness (this.TimePausedness ()
                                     ?  false  :  true);
    }


  TimeFlowRate ()
    { return secs_per_sec; }

  SetTimeFlowRate (sps)
    { let cur = this.CurTime ();
      this.secs_per_sec = sps;
      return cur;
    }


  _ElapsedOffset ()
    { let cur_msecs = this.constructor.MILLISECS_OF_NOW ();
      let diff_time = this.secs_per_sec * this.constructor.OOAT
          * (cur_msecs - this.prev_millisecs);
      this.prev_millisecs = cur_msecs;
      return diff_time;
    }

  _ElapsedOffsetGlance ()
    { let cur_msecs = this.constructor.MILLISECS_OF_NOW ();
      return this.secs_per_sec * this.constructor.OOAT
        * (cur_msecs - this.prev_millisecs);
    }
}
