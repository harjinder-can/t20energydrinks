!function(a){a.fn.camera=function(e){function t(){return navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)?!0:void 0}function i(){var e=a(L).width();a("li",L).removeClass("camera_visThumb"),a("li",L).each(function(){var t=a(this).position(),i=a("ul",L).outerWidth(),r=a("ul",L).offset().left,o=a("> div",L).offset().left,s=o-r;s>0?a(".camera_prevThumbs",V).removeClass("hideNav"):a(".camera_prevThumbs",V).addClass("hideNav"),i-s>e?a(".camera_nextThumbs",V).removeClass("hideNav"):a(".camera_nextThumbs",V).addClass("hideNav");var n=t.left,c=t.left+a(this).width();e>=c-s&&n-s>=0&&a(this).addClass("camera_visThumb")})}function r(){function t(){if(f=m.width(),-1!=e.height.indexOf("%")){var t=Math.round(f/(100/parseFloat(e.height)));g=""!=e.minHeight&&t<parseFloat(e.minHeight)?parseFloat(e.minHeight):t,m.css({height:g})}else"auto"==e.height?g=m.height():(g=parseFloat(e.height),m.css({height:g}));a(".camerarelative",b).css({width:f,height:g}),a(".imgLoaded",b).each(function(){var t,i,r=a(this),o=r.attr("width"),s=r.attr("height"),n=(r.index(),r.attr("data-alignment")),c=r.attr("data-portrait");if(("undefined"==typeof n||n===!1||""===n)&&(n=e.alignment),("undefined"==typeof c||c===!1||""===c)&&(c=e.portrait),0==c||"false"==c)if(f/g>o/s){var l=f/o,d=.5*Math.abs(g-s*l);switch(n){case"topLeft":t=0;break;case"topCenter":t=0;break;case"topRight":t=0;break;case"centerLeft":t="-"+d+"px";break;case"center":t="-"+d+"px";break;case"centerRight":t="-"+d+"px";break;case"bottomLeft":t="-"+2*d+"px";break;case"bottomCenter":t="-"+2*d+"px";break;case"bottomRight":t="-"+2*d+"px"}r.css({height:s*l,"margin-left":0,"margin-top":t,position:"absolute",visibility:"visible",width:f})}else{var l=g/s,d=.5*Math.abs(f-o*l);switch(n){case"topLeft":i=0;break;case"topCenter":i="-"+d+"px";break;case"topRight":i="-"+2*d+"px";break;case"centerLeft":i=0;break;case"center":i="-"+d+"px";break;case"centerRight":i="-"+2*d+"px";break;case"bottomLeft":i=0;break;case"bottomCenter":i="-"+d+"px";break;case"bottomRight":i="-"+2*d+"px"}r.css({height:g,"margin-left":i,"margin-top":0,position:"absolute",visibility:"visible",width:o*l})}else if(f/g>o/s){var l=g/s,d=.5*Math.abs(f-o*l);switch(n){case"topLeft":i=0;break;case"topCenter":i=d+"px";break;case"topRight":i=2*d+"px";break;case"centerLeft":i=0;break;case"center":i=d+"px";break;case"centerRight":i=2*d+"px";break;case"bottomLeft":i=0;break;case"bottomCenter":i=d+"px";break;case"bottomRight":i=2*d+"px"}r.css({height:g,"margin-left":i,"margin-top":0,position:"absolute",visibility:"visible",width:o*l})}else{var l=f/o,d=.5*Math.abs(g-s*l);switch(n){case"topLeft":t=0;break;case"topCenter":t=0;break;case"topRight":t=0;break;case"centerLeft":t=d+"px";break;case"center":t=d+"px";break;case"centerRight":t=d+"px";break;case"bottomLeft":t=2*d+"px";break;case"bottomCenter":t=2*d+"px";break;case"bottomRight":t=2*d+"px"}r.css({height:s*l,"margin-left":0,"margin-top":t,position:"absolute",visibility:"visible",width:f})}})}var i;1==W?(clearTimeout(i),i=setTimeout(t,200)):t(),W=!0}function o(){a("iframe",h).each(function(){a(".camera_caption",h).show();var t=a(this),i=t.attr("data-src");t.attr("src",i);var r=e.imagePath+"blank.gif",o=new Image;if(o.src=r,-1!=e.height.indexOf("%")){var s=Math.round(f/(100/parseFloat(e.height)));g=""!=e.minHeight&&s<parseFloat(e.minHeight)?parseFloat(e.minHeight):s}else g="auto"==e.height?m.height():parseFloat(e.height);t.after(a(o).attr({"class":"imgFake",width:f,height:g}));var n=t.clone();t.remove(),a(o).bind("click",function(){"absolute"==a(this).css("position")?(a(this).remove(),-1!=i.indexOf("vimeo")||-1!=i.indexOf("youtube")?autoplay=-1!=i.indexOf("?")?"&autoplay=1":"?autoplay=1":-1!=i.indexOf("dailymotion")&&(autoplay=-1!=i.indexOf("?")?"&autoPlay=1":"?autoPlay=1"),n.attr("src",i+autoplay),J=!0):(a(this).css({position:"absolute",top:0,left:0,zIndex:10}).after(n),n.css({position:"absolute",top:0,left:0,zIndex:9}))})})}function s(a){for(var e,t,i=a.length;i;e=parseInt(Math.random()*i),t=a[--i],a[i]=a[e],a[e]=t);return a}function n(){if(a(L).length&&!a(T).length){var e,t=a(L).outerWidth(),r=(a("ul > li",L).outerWidth(),a("li.cameracurrent",L).length?a("li.cameracurrent",L).position():""),o=a("ul > li",L).length*a("ul > li",L).outerWidth(),s=a("ul",L).offset().left,n=a("> div",L).offset().left;e=0>s?"-"+(n-s):n-s,1==te&&(a("ul",L).width(a("ul > li",L).length*a("ul > li",L).outerWidth()),a(L).length&&!a(T).lenght&&m.css({marginBottom:a(L).outerHeight()}),i(),a("ul",L).width(a("ul > li",L).length*a("ul > li",L).outerWidth()),a(L).length&&!a(T).lenght&&m.css({marginBottom:a(L).outerHeight()})),te=!1;var c=a("li.cameracurrent",L).length?r.left:"",l=a("li.cameracurrent",L).length?r.left+a("li.cameracurrent",L).outerWidth():"";c<a("li.cameracurrent",L).outerWidth()&&(c=0),l-e>t?o>c+t?a("ul",L).animate({"margin-left":"-"+c+"px"},500,i):a("ul",L).animate({"margin-left":"-"+(a("ul",L).outerWidth()-t)+"px"},500,i):0>c-e?a("ul",L).animate({"margin-left":"-"+c+"px"},500,i):(a("ul",L).css({"margin-left":"auto","margin-right":"auto"}),setTimeout(i,100))}}function c(){Z=0;var t=a(".camera_bar_cont",V).width(),i=a(".camera_bar_cont",V).height();if("pie"!=p)switch(U){case"leftToRight":a("#"+u).css({right:t});break;case"rightToLeft":a("#"+u).css({left:t});break;case"topToBottom":a("#"+u).css({bottom:i});break;case"bottomToTop":a("#"+u).css({top:i})}else ae.clearRect(0,0,e.pieDiameter,e.pieDiameter)}function l(i){v.addClass("camerasliding"),J=!1;var d=parseFloat(a("div.cameraSlide.cameracurrent",b).index());if(i>0)var _=i-1;else if(d==O-1)var _=0;else var _=d+1;var w=a(".cameraSlide:eq("+_+")",b),k=a(".cameraSlide:eq("+(_+1)+")",b).addClass("cameranext");if(d!=_+1&&k.hide(),a(".cameraContent",h).fadeOut(600),a(".camera_caption",h).show(),a(".camerarelative",w).append(a("> div ",v).eq(_).find("> div.camera_effected")),a(".camera_target_content .cameraContent:eq("+_+")",m).append(a("> div ",v).eq(_).find("> div")),a(".imgLoaded",w).length){if(R.length>_+1&&!a(".imgLoaded",k).length){var y=R[_+1],C=new Image;C.src=y+"?"+(new Date).getTime(),k.prepend(a(C).attr("class","imgLoaded").css("visibility","hidden")),C.onload=function(){_e=C.naturalWidth,we=C.naturalHeight,a(C).attr("data-alignment",B[_+1]).attr("data-portrait",M[_+1]),a(C).attr("width",_e),a(C).attr("height",we),r()}}e.onLoaded.call(this),a(".camera_loader",m).is(":visible")?a(".camera_loader",m).fadeOut(400):(a(".camera_loader",m).css({visibility:"hidden"}),a(".camera_loader",m).fadeOut(400,function(){a(".camera_loader",m).css({visibility:"visible"})}));var x,F,S,q,I,P=e.rows,H=e.cols,D=1,W=0,E=new Array("simpleFade","curtainTopLeft","curtainTopRight","curtainBottomLeft","curtainBottomRight","curtainSliceLeft","curtainSliceRight","blindCurtainTopLeft","blindCurtainTopRight","blindCurtainBottomLeft","blindCurtainBottomRight","blindCurtainSliceBottom","blindCurtainSliceTop","stampede","mosaic","mosaicReverse","mosaicRandom","mosaicSpiral","mosaicSpiralReverse","topLeftBottomRight","bottomRightTopLeft","bottomLeftTopRight","topRightBottomLeft","scrollLeft","scrollRight","scrollTop","scrollBottom","scrollHorz");marginLeft=0,marginTop=0,opacityOnGrid=0,opacityOnGrid=1==e.opacityOnGrid?0:1;var G=a(" > div",v).eq(_).attr("data-fx");if(q=t()&&""!=e.mobileFx&&"default"!=e.mobileFx?e.mobileFx:"undefined"!=typeof G&&G!==!1&&"default"!==G?G:e.fx,"random"==q?(q=s(E),q=q[0]):(q=q,q.indexOf(",")>0&&(q=q.replace(/ /g,""),q=q.split(","),q=s(q),q=q[0])),dataEasing=a(" > div",v).eq(_).attr("data-easing"),mobileEasing=a(" > div",v).eq(_).attr("data-mobileEasing"),I=t()&&""!=e.mobileEasing&&"default"!=e.mobileEasing?"undefined"!=typeof mobileEasing&&mobileEasing!==!1&&"default"!==mobileEasing?mobileEasing:e.mobileEasing:"undefined"!=typeof dataEasing&&dataEasing!==!1&&"default"!==dataEasing?dataEasing:e.easing,x=a(" > div",v).eq(_).attr("data-slideOn"),"undefined"!=typeof x&&x!==!1)j=x;else if("random"==e.slideOn){var j=new Array("next","prev");j=s(j),j=j[0]}else j=e.slideOn;var Q=a(" > div",v).eq(_).attr("data-time");F="undefined"!=typeof Q&&Q!==!1&&""!==Q?parseFloat(Q):e.time;var X=a(" > div",v).eq(_).attr("data-transPeriod");switch(S="undefined"!=typeof X&&X!==!1&&""!==X?parseFloat(X):e.transPeriod,a(v).hasClass("camerastarted")||(q="simpleFade",j="next",I="",S=400,a(v).addClass("camerastarted")),q){case"simpleFade":H=1,P=1;break;case"curtainTopLeft":H=0==e.slicedCols?e.cols:e.slicedCols,P=1;break;case"curtainTopRight":H=0==e.slicedCols?e.cols:e.slicedCols,P=1;break;case"curtainBottomLeft":H=0==e.slicedCols?e.cols:e.slicedCols,P=1;break;case"curtainBottomRight":H=0==e.slicedCols?e.cols:e.slicedCols,P=1;break;case"curtainSliceLeft":H=0==e.slicedCols?e.cols:e.slicedCols,P=1;break;case"curtainSliceRight":H=0==e.slicedCols?e.cols:e.slicedCols,P=1;break;case"blindCurtainTopLeft":P=0==e.slicedRows?e.rows:e.slicedRows,H=1;break;case"blindCurtainTopRight":P=0==e.slicedRows?e.rows:e.slicedRows,H=1;break;case"blindCurtainBottomLeft":P=0==e.slicedRows?e.rows:e.slicedRows,H=1;break;case"blindCurtainBottomRight":P=0==e.slicedRows?e.rows:e.slicedRows,H=1;break;case"blindCurtainSliceTop":P=0==e.slicedRows?e.rows:e.slicedRows,H=1;break;case"blindCurtainSliceBottom":P=0==e.slicedRows?e.rows:e.slicedRows,H=1;break;case"stampede":W="-"+S;break;case"mosaic":W=e.gridDifference;break;case"mosaicReverse":W=e.gridDifference;break;case"mosaicRandom":break;case"mosaicSpiral":W=e.gridDifference,D=1.7;break;case"mosaicSpiralReverse":W=e.gridDifference,D=1.7;break;case"topLeftBottomRight":W=e.gridDifference,D=6;break;case"bottomRightTopLeft":W=e.gridDifference,D=6;break;case"bottomLeftTopRight":W=e.gridDifference,D=6;break;case"topRightBottomLeft":W=e.gridDifference,D=6;break;case"scrollLeft":H=1,P=1;break;case"scrollRight":H=1,P=1;break;case"scrollTop":H=1,P=1;break;case"scrollBottom":H=1,P=1;break;case"scrollHorz":H=1,P=1}for(var Y,ee,te=0,ie=P*H,re=f-Math.floor(f/H)*H,oe=g-Math.floor(g/P)*P,se=0,ne=0,ce=new Array,le=new Array,de=new Array;ie>te;){ce.push(te),le.push(te),A.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />');var me=a(".cameraappended:eq("+te+")",b);"scrollLeft"==q||"scrollRight"==q||"scrollTop"==q||"scrollBottom"==q||"scrollHorz"==q?K.eq(_).clone().show().appendTo(me):"next"==j?K.eq(_).clone().show().appendTo(me):K.eq(d).clone().show().appendTo(me),Y=re>te%H?1:0,te%H==0&&(se=0),ee=Math.floor(te/H)<oe?1:0,me.css({height:Math.floor(g/P+ee+1),left:se,top:ne,width:Math.floor(f/H+Y+1)}),a("> .cameraSlide",me).css({height:g,"margin-left":"-"+se+"px","margin-top":"-"+ne+"px",width:f}),se=se+me.width()-1,te%H==H-1&&(ne=ne+me.height()-1),te++}switch(q){case"curtainTopLeft":break;case"curtainBottomLeft":break;case"curtainSliceLeft":break;case"curtainTopRight":ce=ce.reverse();break;case"curtainBottomRight":ce=ce.reverse();break;case"curtainSliceRight":ce=ce.reverse();break;case"blindCurtainTopLeft":break;case"blindCurtainBottomLeft":ce=ce.reverse();break;case"blindCurtainSliceTop":break;case"blindCurtainTopRight":break;case"blindCurtainBottomRight":ce=ce.reverse();break;case"blindCurtainSliceBottom":ce=ce.reverse();break;case"stampede":ce=s(ce);break;case"mosaic":break;case"mosaicReverse":ce=ce.reverse();break;case"mosaicRandom":ce=s(ce);break;case"mosaicSpiral":var he,pe,fe,ge=P/2,ue=0;for(fe=0;ge>fe;fe++){for(pe=fe,he=fe;H-fe-1>he;he++)de[ue++]=pe*H+he;for(he=H-fe-1,pe=fe;P-fe-1>pe;pe++)de[ue++]=pe*H+he;for(pe=P-fe-1,he=H-fe-1;he>fe;he--)de[ue++]=pe*H+he;for(he=fe,pe=P-fe-1;pe>fe;pe--)de[ue++]=pe*H+he}ce=de;break;case"mosaicSpiralReverse":var he,pe,fe,ge=P/2,ue=ie-1;for(fe=0;ge>fe;fe++){for(pe=fe,he=fe;H-fe-1>he;he++)de[ue--]=pe*H+he;for(he=H-fe-1,pe=fe;P-fe-1>pe;pe++)de[ue--]=pe*H+he;for(pe=P-fe-1,he=H-fe-1;he>fe;he--)de[ue--]=pe*H+he;for(he=fe,pe=P-fe-1;pe>fe;pe--)de[ue--]=pe*H+he}ce=de;break;case"topLeftBottomRight":for(var pe=0;P>pe;pe++)for(var he=0;H>he;he++)de.push(he+pe);le=de;break;case"bottomRightTopLeft":for(var pe=0;P>pe;pe++)for(var he=0;H>he;he++)de.push(he+pe);le=de.reverse();break;case"bottomLeftTopRight":for(var pe=P;pe>0;pe--)for(var he=0;H>he;he++)de.push(he+pe);le=de;break;case"topRightBottomLeft":for(var pe=0;P>pe;pe++)for(var he=H;he>0;he--)de.push(he+pe);le=de}a.each(ce,function(t,i){function r(){if(a(this).addClass("cameraeased"),a(".cameraeased",b).length>=0&&a(L).css({visibility:"visible"}),a(".cameraeased",b).length==ie){n(),a(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom",h).each(function(){a(this).css("visibility","hidden")}),K.eq(_).show().css("z-index","999").removeClass("cameranext").addClass("cameracurrent"),K.eq(d).css("z-index","1").removeClass("cameracurrent"),a(".cameraContent",h).eq(_).addClass("cameracurrent"),d>=0&&a(".cameraContent",h).eq(d).removeClass("cameracurrent"),e.onEndTransition.call(this),"hide"!=a("> div",v).eq(_).attr("data-video")&&a(".cameraContent.cameracurrent .imgFake",h).length&&a(".cameraContent.cameracurrent .imgFake",h).click();var t=K.eq(_).find(".fadeIn").length,i=a(".cameraContent",h).eq(_).find(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom").length;0!=t&&a(".cameraSlide.cameracurrent .fadeIn",h).each(function(){if(""!=a(this).attr("data-easing"))var e=a(this).attr("data-easing");else var e=I;var i=a(this);if("undefined"==typeof i.attr("data-outerWidth")||i.attr("data-outerWidth")===!1||""===i.attr("data-outerWidth")){var r=i.outerWidth();i.attr("data-outerWidth",r)}else var r=i.attr("data-outerWidth");if("undefined"==typeof i.attr("data-outerHeight")||i.attr("data-outerHeight")===!1||""===i.attr("data-outerHeight")){var o=i.outerHeight();i.attr("data-outerHeight",o)}else var o=i.attr("data-outerHeight");{var s=i.position(),n=(s.left,s.top,i.attr("class")),c=i.index();i.parents(".camerarelative").outerHeight(),i.parents(".camerarelative").outerWidth()}-1!=n.indexOf("fadeIn")?i.animate({opacity:0},0).css("visibility","visible").delay(F/t*.1*(c-1)).animate({opacity:1},F/t*.15,e):i.css("visibility","visible")}),a(".cameraContent.cameracurrent",h).show(),0!=i&&a(".cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom",h).each(function(){if(""!=a(this).attr("data-easing"))var e=a(this).attr("data-easing");else var e=I;var t=a(this),r=t.position(),o=(r.left,r.top,t.attr("class")),s=t.index(),n=t.outerHeight();-1!=o.indexOf("moveFromLeft")?(t.css({left:"-"+f+"px",right:"auto"}),t.css("visibility","visible").delay(F/i*.1*(s-1)).animate({left:r.left},F/i*.15,e)):-1!=o.indexOf("moveFromRight")?(t.css({left:f+"px",right:"auto"}),t.css("visibility","visible").delay(F/i*.1*(s-1)).animate({left:r.left},F/i*.15,e)):-1!=o.indexOf("moveFromTop")?(t.css({top:"-"+g+"px",bottom:"auto"}),t.css("visibility","visible").delay(F/i*.1*(s-1)).animate({top:r.top},F/i*.15,e,function(){t.css({top:"auto",bottom:0})})):-1!=o.indexOf("moveFromBottom")?(t.css({top:g+"px",bottom:"auto"}),t.css("visibility","visible").delay(F/i*.1*(s-1)).animate({top:r.top},F/i*.15,e)):-1!=o.indexOf("fadeFromLeft")?(t.animate({opacity:0},0).css({left:"-"+f+"px",right:"auto"}),t.css("visibility","visible").delay(F/i*.1*(s-1)).animate({left:r.left,opacity:1},F/i*.15,e)):-1!=o.indexOf("fadeFromRight")?(t.animate({opacity:0},0).css({left:f+"px",right:"auto"}),t.css("visibility","visible").delay(F/i*.1*(s-1)).animate({left:r.left,opacity:1},F/i*.15,e)):-1!=o.indexOf("fadeFromTop")?(t.animate({opacity:0},0).css({top:"-"+g+"px",bottom:"auto"}),t.css("visibility","visible").delay(F/i*.1*(s-1)).animate({top:r.top,opacity:1},F/i*.15,e,function(){t.css({top:"auto",bottom:0})})):-1!=o.indexOf("fadeFromBottom")?(t.animate({opacity:0},0).css({bottom:"-"+n+"px"}),t.css("visibility","visible").delay(F/i*.1*(s-1)).animate({bottom:"0",opacity:1},F/i*.15,e)):-1!=o.indexOf("fadeIn")?t.animate({opacity:0},0).css("visibility","visible").delay(F/i*.1*(s-1)).animate({opacity:1},F/i*.15,e):t.css("visibility","visible")}),a(".cameraappended",b).remove(),v.removeClass("camerasliding"),K.eq(d).hide();var r,s=a(".camera_bar_cont",V).width(),m=a(".camera_bar_cont",V).height();r="pie"!=p?.05:.005,a("#"+u).animate({opacity:e.loaderOpacity},200),z=setInterval(function(){if(v.hasClass("stopped")&&clearInterval(z),"pie"!=p)switch(1.002>=Z&&!v.hasClass("stopped")&&!v.hasClass("paused")&&!v.hasClass("hovered")?Z+=r:1>=Z&&(v.hasClass("stopped")||v.hasClass("paused")||v.hasClass("stopped")||v.hasClass("hovered"))?Z=Z:v.hasClass("stopped")||v.hasClass("paused")||v.hasClass("hovered")||(clearInterval(z),o(),a("#"+u).animate({opacity:0},200,function(){clearTimeout(N),N=setTimeout(c,w),l(),e.onStartLoading.call(this)})),U){case"leftToRight":a("#"+u).animate({right:s-s*Z},F*r,"linear");break;case"rightToLeft":a("#"+u).animate({left:s-s*Z},F*r,"linear");break;case"topToBottom":a("#"+u).animate({bottom:m-m*Z},F*r,"linear");break;case"bottomToTop":a("#"+u).animate({bottom:m-m*Z},F*r,"linear")}else $=Z,ae.clearRect(0,0,e.pieDiameter,e.pieDiameter),ae.globalCompositeOperation="destination-over",ae.beginPath(),ae.arc(e.pieDiameter/2,e.pieDiameter/2,e.pieDiameter/2-e.loaderStroke,0,2*Math.PI,!1),ae.lineWidth=e.loaderStroke,ae.strokeStyle=e.loaderBgColor,ae.stroke(),ae.closePath(),ae.globalCompositeOperation="source-over",ae.beginPath(),ae.arc(e.pieDiameter/2,e.pieDiameter/2,e.pieDiameter/2-e.loaderStroke,0,2*Math.PI*$,!1),ae.lineWidth=e.loaderStroke-2*e.loaderPadding,ae.strokeStyle=e.loaderColor,ae.stroke(),ae.closePath(),1.002>=Z&&!v.hasClass("stopped")&&!v.hasClass("paused")&&!v.hasClass("hovered")?Z+=r:1>=Z&&(v.hasClass("stopped")||v.hasClass("paused")||v.hasClass("hovered"))?Z=Z:v.hasClass("stopped")||v.hasClass("paused")||v.hasClass("hovered")||(clearInterval(z),o(),a("#"+u+", .camera_canvas_wrap",V).animate({opacity:0},200,function(){clearTimeout(N),N=setTimeout(c,w),l(),e.onStartLoading.call(this)}))},F*r)}}switch(Y=re>i%H?1:0,i%H==0&&(se=0),ee=Math.floor(i/H)<oe?1:0,q){case"simpleFade":height=g,width=f,opacityOnGrid=0;break;case"curtainTopLeft":height=0,width=Math.floor(f/H+Y+1),marginTop="-"+Math.floor(g/P+ee+1)+"px";break;case"curtainTopRight":height=0,width=Math.floor(f/H+Y+1),marginTop="-"+Math.floor(g/P+ee+1)+"px";break;case"curtainBottomLeft":height=0,width=Math.floor(f/H+Y+1),marginTop=Math.floor(g/P+ee+1)+"px";break;case"curtainBottomRight":height=0,width=Math.floor(f/H+Y+1),marginTop=Math.floor(g/P+ee+1)+"px";break;case"curtainSliceLeft":height=0,width=Math.floor(f/H+Y+1),marginTop=i%2==0?Math.floor(g/P+ee+1)+"px":"-"+Math.floor(g/P+ee+1)+"px";break;case"curtainSliceRight":height=0,width=Math.floor(f/H+Y+1),marginTop=i%2==0?Math.floor(g/P+ee+1)+"px":"-"+Math.floor(g/P+ee+1)+"px";break;case"blindCurtainTopLeft":height=Math.floor(g/P+ee+1),width=0,marginLeft="-"+Math.floor(f/H+Y+1)+"px";break;case"blindCurtainTopRight":height=Math.floor(g/P+ee+1),width=0,marginLeft=Math.floor(f/H+Y+1)+"px";break;case"blindCurtainBottomLeft":height=Math.floor(g/P+ee+1),width=0,marginLeft="-"+Math.floor(f/H+Y+1)+"px";break;case"blindCurtainBottomRight":height=Math.floor(g/P+ee+1),width=0,marginLeft=Math.floor(f/H+Y+1)+"px";break;case"blindCurtainSliceBottom":height=Math.floor(g/P+ee+1),width=0,marginLeft=i%2==0?"-"+Math.floor(f/H+Y+1)+"px":Math.floor(f/H+Y+1)+"px";break;case"blindCurtainSliceTop":height=Math.floor(g/P+ee+1),width=0,marginLeft=i%2==0?"-"+Math.floor(f/H+Y+1)+"px":Math.floor(f/H+Y+1)+"px";break;case"stampede":height=0,width=0,marginLeft=.2*f*(t%H-(H-Math.floor(H/2)))+"px",marginTop=.2*g*(Math.floor(t/H)+1-(P-Math.floor(P/2)))+"px";break;case"mosaic":height=0,width=0;break;case"mosaicReverse":height=0,width=0,marginLeft=Math.floor(f/H+Y+1)+"px",marginTop=Math.floor(g/P+ee+1)+"px";break;case"mosaicRandom":height=0,width=0,marginLeft=.5*Math.floor(f/H+Y+1)+"px",marginTop=.5*Math.floor(g/P+ee+1)+"px";break;case"mosaicSpiral":height=0,width=0,marginLeft=.5*Math.floor(f/H+Y+1)+"px",marginTop=.5*Math.floor(g/P+ee+1)+"px";break;case"mosaicSpiralReverse":height=0,width=0,marginLeft=.5*Math.floor(f/H+Y+1)+"px",marginTop=.5*Math.floor(g/P+ee+1)+"px";break;case"topLeftBottomRight":height=0,width=0;break;case"bottomRightTopLeft":height=0,width=0,marginLeft=Math.floor(f/H+Y+1)+"px",marginTop=Math.floor(g/P+ee+1)+"px";break;case"bottomLeftTopRight":height=0,width=0,marginLeft=0,marginTop=Math.floor(g/P+ee+1)+"px";break;case"topRightBottomLeft":height=0,width=0,marginLeft=Math.floor(f/H+Y+1)+"px",marginTop=0;break;case"scrollRight":height=g,width=f,marginLeft=-f;break;case"scrollLeft":height=g,width=f,marginLeft=f;break;case"scrollTop":height=g,width=f,marginTop=g;break;case"scrollBottom":height=g,width=f,marginTop=-g;break;case"scrollHorz":height=g,width=f,marginLeft=0==d&&_==O-1?-f:_>d||d==O-1&&0==_?f:-f}var s=a(".cameraappended:eq("+i+")",b);"undefined"!=typeof z&&(clearInterval(z),clearTimeout(N),N=setTimeout(c,S+W)),a(T).length&&(a(".camera_pag li",m).removeClass("cameracurrent"),a(".camera_pag li",m).eq(_).addClass("cameracurrent")),a(L).length&&(a("li",L).removeClass("cameracurrent"),a("li",L).eq(_).addClass("cameracurrent"),a("li",L).not(".cameracurrent").find("img").animate({opacity:.5},0),a("li.cameracurrent img",L).animate({opacity:1},0),a("li",L).hover(function(){a("img",this).stop(!0,!1).animate({opacity:1},150)},function(){a(this).hasClass("cameracurrent")||a("img",this).stop(!0,!1).animate({opacity:.5},150)}));var w=parseFloat(S)+parseFloat(W);"scrollLeft"==q||"scrollRight"==q||"scrollTop"==q||"scrollBottom"==q||"scrollHorz"==q?(e.onStartTransition.call(this),w=0,s.delay((S+W)/ie*le[t]*D*.5).css({display:"block",height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width}).animate({height:Math.floor(g/P+ee+1),"margin-top":0,"margin-left":0,width:Math.floor(f/H+Y+1)},S-W,I,r),K.eq(d).delay((S+W)/ie*le[t]*D*.5).animate({"margin-left":-1*marginLeft,"margin-top":-1*marginTop},S-W,I,function(){a(this).css({"margin-top":0,"margin-left":0})})):(e.onStartTransition.call(this),w=parseFloat(S)+parseFloat(W),"next"==j?s.delay((S+W)/ie*le[t]*D*.5).css({display:"block",height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width,opacity:opacityOnGrid}).animate({height:Math.floor(g/P+ee+1),"margin-top":0,"margin-left":0,opacity:1,width:Math.floor(f/H+Y+1)},S-W,I,r):(K.eq(_).show().css("z-index","999").addClass("cameracurrent"),K.eq(d).css("z-index","1").removeClass("cameracurrent"),a(".cameraContent",h).eq(_).addClass("cameracurrent"),a(".cameraContent",h).eq(d).removeClass("cameracurrent"),s.delay((S+W)/ie*le[t]*D*.5).css({display:"block",height:Math.floor(g/P+ee+1),"margin-top":0,"margin-left":0,opacity:1,width:Math.floor(f/H+Y+1)}).animate({height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width,opacity:opacityOnGrid},S-W,I,r)))})}else{var ve=R[_],be=new Image;be.src=ve+"?"+(new Date).getTime(),w.css("visibility","hidden"),w.prepend(a(be).attr("class","imgLoaded").css("visibility","hidden"));var _e,we;a(be).get(0).complete&&"0"!=_e&&"0"!=we&&"undefined"!=typeof _e&&_e!==!1&&"undefined"!=typeof we&&we!==!1||(a(".camera_loader",m).delay(500).fadeIn(400),be.onload=function(){_e=be.naturalWidth,we=be.naturalHeight,a(be).attr("data-alignment",B[_]).attr("data-portrait",M[_]),a(be).attr("width",_e),a(be).attr("height",we),b.find(".cameraSlide_"+_).hide().css("visibility","visible"),r(),l(_+1)})}}var d={alignment:"topCenter",autoAdvance:!0,mobileAutoAdvance:!0,barDirection:"leftToRight",barPosition:"bottom",cols:6,easing:"easeInOutExpo",mobileEasing:"",fx:"random",mobileFx:"",gridDifference:250,height:"auto",imagePath:"images/",hover:!0,loader:"pie",loaderColor:"#eeeeee",loaderBgColor:"#222222",loaderOpacity:.8,loaderPadding:2,loaderStroke:7,minHeight:"000",navigation:!0,navigationHover:!0,mobileNavHover:!0,opacityOnGrid:!1,overlayer:!0,pagination:!0,playPause:!0,pauseOnClick:!0,pieDiameter:38,piePosition:"center",portrait:!1,rows:4,slicedCols:12,slicedRows:8,slideOn:"random",thumbnails:!1,time:7e3,transPeriod:1e3,onEndTransition:function(){},onLoaded:function(){},onStartLoading:function(){},onStartTransition:function(){}},e=a.extend({},d,e),m=a(this).addClass("camera_wrap");m.wrapInner('<div class="camera_src" />').wrapInner('<div class="camera_fakehover" />');var h=a(".camera_fakehover",m);h.append('<div class="camera_target"></div>'),1==e.overlayer&&h.append('<div class="camera_overlayer"></div>'),h.append('<div class="camera_target_content"></div>');var p;p="pie"==e.loader&&a.browser.msie&&a.browser.version<9?"bar":e.loader,h.append("pie"==p?'<div class="camera_pie"></div>':"bar"==p?'<div class="camera_bar"></div>':'<div class="camera_bar" style="display:none"></div>'),1==e.playPause&&h.append('<div class="camera_commands"></div>'),1==e.navigation&&h.append('<div class="camera_prev"><span></span></div>').append('<div class="camera_next"><span></span></div>'),1==e.thumbnails&&m.append('<div class="camera_thumbs_cont" />'),1==e.thumbnails&&1!=e.pagination&&a(".camera_thumbs_cont",m).wrap("<div />").wrap('<div class="camera_thumbs" />').wrap("<div />").wrap('<div class="camera_command_wrap" />'),1==e.pagination&&m.append('<div class="camera_pag"></div>'),m.append('<div class="camera_loader"></div>'),a(".camera_caption",m).each(function(){a(this).wrapInner("<div />")});var f,g,u="pie_"+m.index(),v=a(".camera_src",m),b=a(".camera_target",m),_=a(".camera_target_content",m),w=a(".camera_pie",m),k=a(".camera_bar",m),y=a(".camera_prev",m),C=a(".camera_next",m),x=a(".camera_commands",m),T=a(".camera_pag",m),L=a(".camera_thumbs_cont",m),R=new Array;a("> div",v).each(function(){R.push(a(this).attr("data-src"))});var F=new Array;a("> div",v).each(function(){F.push(a(this).attr("data-link")?a(this).attr("data-link"):"")});var S=new Array;a("> div",v).each(function(){S.push(a(this).attr("data-target")?a(this).attr("data-target"):"")});var M=new Array;a("> div",v).each(function(){M.push(a(this).attr("data-portrait")?a(this).attr("data-portrait"):"")});var B=new Array;a("> div",v).each(function(){B.push(a(this).attr("data-alignment")?a(this).attr("data-alignment"):"")});var q=new Array;a("> div",v).each(function(){q.push(a(this).attr("data-thumb")?a(this).attr("data-thumb"):"")});var O=R.length;a(_).append('<div class="cameraContents" />');var I;for(I=0;O>I;I++)if(a(".cameraContents",_).append('<div class="cameraContent" />'),""!=F[I]){var P=a("> div ",v).eq(I).attr("data-box");P="undefined"!=typeof P&&P!==!1&&""!=P?'data-box="'+a("> div ",v).eq(I).attr("data-box")+'"':"",a(".camera_target_content .cameraContent:eq("+I+")",m).append('<a class="camera_link" href="'+F[I]+'" '+P+' target="'+S[I]+'"></a>')}a(".camera_caption",m).each(function(){var e=a(this).parent().index(),t=m.find(".cameraContent").eq(e);a(this).appendTo(t)}),b.append('<div class="cameraCont" />');var H,A=a(".cameraCont",m);for(H=0;O>H;H++){A.append('<div class="cameraSlide cameraSlide_'+H+'" />');var D=a("> div:eq("+H+")",v);b.find(".cameraSlide_"+H).clone(D)}a(window).bind("load resize pageshow",function(){n(),i()}),A.append('<div class="cameraSlide cameraSlide_'+H+'" />');var W;m.show();var E,f=b.width(),g=b.height();a(window).bind("resize pageshow",function(){1==W&&r(),a("ul",L).animate({"margin-top":0},0,n),v.hasClass("paused")||(v.addClass("paused"),a(".camera_stop",V).length?(a(".camera_stop",V).hide(),a(".camera_play",V).show(),"none"!=p&&a("#"+u).hide()):"none"!=p&&a("#"+u).hide(),clearTimeout(E),E=setTimeout(function(){v.removeClass("paused"),a(".camera_play",V).length?(a(".camera_play",V).hide(),a(".camera_stop",V).show(),"none"!=p&&a("#"+u).fadeIn()):"none"!=p&&a("#"+u).fadeIn()},1500))});var z,N,G,j,x,T,Q,J;if(G=t()&&""!=e.mobileAutoAdvance?e.mobileAutoAdvance:e.autoAdvance,0==G&&v.addClass("paused"),j=t()&&""!=e.mobileNavHover?e.mobileNavHover:e.navigationHover,0!=v.length){var K=a(".cameraSlide",b);K.wrapInner('<div class="camerarelative" />');var U=e.barDirection,V=m;a("iframe",h).each(function(){var e=a(this),t=e.attr("src");e.attr("data-src",t);var i=e.parent().index(".camera_src > div");a(".camera_target_content .cameraContent:eq("+i+")",m).append(e)}),o(),1==e.hover&&(t()||h.hover(function(){v.addClass("hovered")},function(){v.removeClass("hovered")})),a(".camera_stop",V).live("click",function(){G=!1,v.addClass("paused"),a(".camera_stop",V).length?(a(".camera_stop",V).hide(),a(".camera_play",V).show(),"none"!=p&&a("#"+u).hide()):"none"!=p&&a("#"+u).hide()}),a(".camera_play",V).live("click",function(){G=!0,v.removeClass("paused"),a(".camera_play",V).length?(a(".camera_play",V).hide(),a(".camera_stop",V).show(),"none"!=p&&a("#"+u).show()):"none"!=p&&a("#"+u).show()}),1==e.pauseOnClick&&a(".camera_target_content",h).mouseup(function(){G=!1,v.addClass("paused"),a(".camera_stop",V).hide(),a(".camera_play",V).show(),a("#"+u).hide()}),a(".cameraContent, .imgFake",h).hover(function(){Q=!0},function(){Q=!1}),a(".cameraContent, .imgFake",h).bind("click",function(){1==J&&1==Q&&(G=!1,a(".camera_caption",h).hide(),v.addClass("paused"),a(".camera_stop",V).hide(),a(".camera_play",V).show(),a("#"+u).hide())})}if("pie"!=p){k.append('<span class="camera_bar_cont" />'),a(".camera_bar_cont",k).animate({opacity:e.loaderOpacity},0).css({position:"absolute",left:0,right:0,top:0,bottom:0,"background-color":e.loaderBgColor}).append('<span id="'+u+'" />'),a("#"+u).animate({opacity:0},0);var X=a("#"+u);switch(X.css({position:"absolute","background-color":e.loaderColor}),e.barPosition){case"left":k.css({right:"auto",width:e.loaderStroke});break;case"right":k.css({left:"auto",width:e.loaderStroke});break;case"top":k.css({bottom:"auto",height:e.loaderStroke});break;case"bottom":k.css({top:"auto",height:e.loaderStroke})}switch(U){case"leftToRight":X.css({left:0,right:0,top:e.loaderPadding,bottom:e.loaderPadding});break;case"rightToLeft":X.css({left:0,right:0,top:e.loaderPadding,bottom:e.loaderPadding});break;case"topToBottom":X.css({left:e.loaderPadding,right:e.loaderPadding,top:0,bottom:0});break;case"bottomToTop":X.css({left:e.loaderPadding,right:e.loaderPadding,top:0,bottom:0})}}else{w.append('<canvas id="'+u+'"></canvas>');var X=document.getElementById(u);X.setAttribute("width",e.pieDiameter),X.setAttribute("height",e.pieDiameter);var Y;switch(e.piePosition){case"leftTop":Y="left:0; top:0;";break;case"rightTop":Y="right:0; top:0;";break;case"leftBottom":Y="left:0; bottom:0;";break;case"rightBottom":Y="right:0; bottom:0;"}X.setAttribute("style","position:absolute; z-index:1002; "+Y);var Z,$;if(X&&X.getContext){var ae=X.getContext("2d");ae.rotate(1.5*Math.PI),ae.translate(-e.pieDiameter,0)}}if(("none"==p||0==G)&&(a("#"+u).hide(),a(".camera_canvas_wrap",V).hide()),a(T).length){a(T).append('<ul class="camera_pag_ul" />');var ee;for(ee=0;O>ee;ee++)a(".camera_pag_ul",m).append('<li class="pag_nav_'+ee+'" style="position:relative; z-index:1002"><span><span>'+ee+"</span></span></li>");a(".camera_pag_ul li",m).hover(function(){if(a(this).addClass("camera_hover"),a(".camera_thumb",this).length){var e=a(".camera_thumb",this).outerWidth(),t=a(".camera_thumb",this).outerHeight(),i=a(this).outerWidth();a(".camera_thumb",this).show().css({top:"-"+t+"px",left:"-"+(e-i)/2+"px"}).animate({opacity:1,"margin-top":"-3px"},200),a(".thumb_arrow",this).show().animate({opacity:1,"margin-top":"-3px"},200)}},function(){a(this).removeClass("camera_hover"),a(".camera_thumb",this).animate({"margin-top":"-20px",opacity:0},200,function(){a(this).css({marginTop:"5px"}).hide()}),a(".thumb_arrow",this).animate({"margin-top":"-20px",opacity:0},200,function(){a(this).css({marginTop:"5px"}).hide()})})}if(a(L).length){a(T).length?(a.each(q,function(e){if(""!=a("> div",v).eq(e).attr("data-thumb")){var t=a("> div",v).eq(e).attr("data-thumb"),i=new Image;i.src=t,a("li.pag_nav_"+e,T).append(a(i).attr("class","camera_thumb").css({position:"absolute"}).animate({opacity:0},0)),a("li.pag_nav_"+e+" > img",T).after('<div class="thumb_arrow" />'),a("li.pag_nav_"+e+" > .thumb_arrow",T).animate({opacity:0},0)}}),m.css({marginBottom:a(T).outerHeight()})):(a(L).append("<div />"),a(L).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>'),a("> div",L).append("<ul />"),a.each(q,function(e){if(""!=a("> div",v).eq(e).attr("data-thumb")){var t=a("> div",v).eq(e).attr("data-thumb"),i=new Image;i.src=t,a("ul",L).append('<li class="pix_thumb pix_thumb_'+e+'" />'),a("li.pix_thumb_"+e,L).append(a(i).attr("class","camera_thumb"))
}}))}else!a(L).length&&a(T).length&&m.css({marginBottom:a(T).outerHeight()});var te=!0;a(x).length&&(a(x).append('<div class="camera_play"></div>').append('<div class="camera_stop"></div>'),1==G?(a(".camera_play",V).hide(),a(".camera_stop",V).show()):(a(".camera_stop",V).hide(),a(".camera_play",V).show())),c(),a(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom",h).each(function(){a(this).css("visibility","hidden")}),e.onStartLoading.call(this),l(),a(y).length&&a(y).click(function(){if(!v.hasClass("camerasliding")){var t=parseFloat(a(".cameraSlide.cameracurrent",b).index());clearInterval(z),o(),a("#"+u+", .camera_canvas_wrap",m).animate({opacity:0},0),c(),l(0!=t?t:O),e.onStartLoading.call(this)}}),a(C).length&&a(C).click(function(){if(!v.hasClass("camerasliding")){var t=parseFloat(a(".cameraSlide.cameracurrent",b).index());clearInterval(z),o(),a("#"+u+", .camera_canvas_wrap",V).animate({opacity:0},0),c(),l(t==O-1?1:t+2),e.onStartLoading.call(this)}}),t()&&(h.bind("swipeleft",function(){if(!v.hasClass("camerasliding")){var t=parseFloat(a(".cameraSlide.cameracurrent",b).index());clearInterval(z),o(),a("#"+u+", .camera_canvas_wrap",V).animate({opacity:0},0),c(),l(t==O-1?1:t+2),e.onStartLoading.call(this)}}),h.bind("swiperight",function(){if(!v.hasClass("camerasliding")){var t=parseFloat(a(".cameraSlide.cameracurrent",b).index());clearInterval(z),o(),a("#"+u+", .camera_canvas_wrap",V).animate({opacity:0},0),c(),l(0!=t?t:O),e.onStartLoading.call(this)}})),a(T).length&&a(".camera_pag li",m).click(function(){if(!v.hasClass("camerasliding")){var t=parseFloat(a(this).index()),i=parseFloat(a(".cameraSlide.cameracurrent",b).index());t!=i&&(clearInterval(z),o(),a("#"+u+", .camera_canvas_wrap",V).animate({opacity:0},0),c(),l(t+1),e.onStartLoading.call(this))}}),a(L).length&&(a(".pix_thumb img",L).click(function(){if(!v.hasClass("camerasliding")){var t=parseFloat(a(this).parents("li").index()),i=parseFloat(a(".cameracurrent",b).index());t!=i&&(clearInterval(z),o(),a("#"+u+", .camera_canvas_wrap",V).animate({opacity:0},0),a(".pix_thumb",L).removeClass("cameracurrent"),a(this).parents("li").addClass("cameracurrent"),c(),l(t+1),n(),e.onStartLoading.call(this))}}),a(".camera_thumbs_cont .camera_prevThumbs",V).hover(function(){a(this).stop(!0,!1).animate({opacity:1},250)},function(){a(this).stop(!0,!1).animate({opacity:.7},250)}),a(".camera_prevThumbs",V).click(function(){var e=0,t=(a(L).outerWidth(),a("ul",L).offset().left),r=a("> div",L).offset().left,o=r-t;a(".camera_visThumb",L).each(function(){var t=a(this).outerWidth();e+=t}),o-e>0?a("ul",L).animate({"margin-left":"-"+(o-e)+"px"},500,i):a("ul",L).animate({"margin-left":0},500,i)}),a(".camera_thumbs_cont .camera_nextThumbs",V).hover(function(){a(this).stop(!0,!1).animate({opacity:1},250)},function(){a(this).stop(!0,!1).animate({opacity:.7},250)}),a(".camera_nextThumbs",V).click(function(){var e=0,t=a(L).outerWidth(),r=a("ul",L).outerWidth(),o=a("ul",L).offset().left,s=a("> div",L).offset().left,n=s-o;a(".camera_visThumb",L).each(function(){var t=a(this).outerWidth();e+=t}),r>n+e+e?a("ul",L).animate({"margin-left":"-"+(n+e)+"px"},500,i):a("ul",L).animate({"margin-left":"-"+(r-t)+"px"},500,i)}))}}(jQuery),function(a){a.fn.cameraStop=function(){{var e=a(this),t=a(".camera_src",e);"pie_"+e.index()}if(t.addClass("stopped"),a(".camera_showcommands").length){a(".camera_thumbs_wrap",e)}else;}}(jQuery),function(a){a.fn.cameraPause=function(){var e=a(this),t=a(".camera_src",e);t.addClass("paused")}}(jQuery),function(a){a.fn.cameraResume=function(){var e=a(this),t=a(".camera_src",e);("undefined"==typeof autoAdv||autoAdv!==!0)&&t.removeClass("paused")}}(jQuery);