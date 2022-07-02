const semanticsObject =
      {

	  main_withnum : function (_num,_more) { 
	      _ruleEnter ("main_withnum");

	      var num = _num._glue ();
	      var more = _more._glue ().join ('');
	      var _result = `${num}${more}`; 
	      _ruleExit ("main_withnum");
	      return _result; 
	  },
          
	  main_withoutnum : function (_stuff,_more) { 
	      _ruleEnter ("main_withoutnum");

	      var stuff = _stuff._glue ().join ('');
	      var more = _more._glue ().join ('');
	      var _result = `${stuff}${more}`; 
	      _ruleExit ("main_withoutnum");
	      return _result; 
	  },
          
	  num_one : function (_word,_lookahead) { 
	      _ruleEnter ("num_one");

	      var word = _word._glue ();
	      var lookahead = _lookahead._glue ();
	      var _result = `1`; 
	      _ruleExit ("num_one");
	      return _result; 
	  },
          
	  num_two : function (_word,_lookahead) { 
	      _ruleEnter ("num_two");

	      var word = _word._glue ();
	      var lookahead = _lookahead._glue ();
	      var _result = `2`; 
	      _ruleExit ("num_two");
	      return _result; 
	  },
          
	  separator : function (_x) { 
	      _ruleEnter ("separator");

	      var x = _x._glue ();
	      var _result = `${x}`; 
	      _ruleExit ("separator");
	      return _result; 
	  },
          
	  stuff : function (_c) { 
	      _ruleEnter ("stuff");

	      var c = _c._glue ();
	      var _result = `${c}`; 
	      _ruleExit ("stuff");
	      return _result; 
	  },
          
	  _terminal: function () { return this.sourceString; },
	  _iter: function (...children) { return children.map(c => c._glue ()); }
      };
