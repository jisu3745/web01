/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */

$(function() { 
	'use strict';
	/* 
		_linktarget	: 탭링크대상
		_listtarget : 탭메뉴리스트 대상 li 혹은 dt
		_contenttarget : 탭컨텐츠 대상 .contbox 혹은 dd
	*/	
	$.fn.tabFunc = function(_linktarget, _listtarget, _contenttarget) { 			
		$(_linktarget).on("click", function(e) { 
			e.preventDefault();
			
			var _this = $(this);
			var _thispt = _this.parent();

			$(_listtarget).removeClass("on");
			_thispt.addClass("on");
				
			$(_contenttarget).hide();
			
			var targetListName = _thispt.prop('tagName');
			if(targetListName === "DT") { 
				_thispt.next().show();   
			} else if(targetListName === "LI") { 
				var _thisptIndex = _thispt.index();
				_contenttarget.eq(_thisptIndex).show();
			}
		});
	};		
});

$(function(){
AOS.init({
  duration: 1500,
});
});



