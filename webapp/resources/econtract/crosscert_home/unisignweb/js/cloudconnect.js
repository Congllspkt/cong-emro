var __cloudconnect=function(c){var z=function(d){function t(b){if(!b)return alert("UI load error."),!1;var a=document.createElement("div");document.body.insertBefore(a,document.body.firstChild);a.innerHTML=b;return!0}function l(b,a){if("connect"==d.type){a=document.getElementById("us-connect-name-textbox");if(""==a.value)return alert(b.IDS_NAME+" "+b.IDS_ERR_MSG_EMPTY_FIELD),a.focus(),!1;var c=document.getElementById("us-connect-hp-textbox");if(""==c.value)return alert(b.IDS_HP+" "+b.IDS_ERR_MSG_EMPTY_FIELD),c.focus(),!1;var e=document.getElementById("us-connect-birth-textbox");if(""==e.value)return alert(b.IDS_BIRTH+" "+b.IDS_ERR_MSG_EMPTY_FIELD),e.focus(),!1;b=document.getElementById("us-connect-auto-connect-checkbox");d.onConfirm({type:"connect",name:a.value,hp:c.value,birth:e.value,autoConn:b.checked})}else if(a)d.onConfirm({type:"mo",err:a});else{var f=!0;document.getElementById("us-btn").classList.forEach(function(a){"us-cloud-btn-disable"==a&&(f=!1)});if(f)d.onConfirm({type:"mo",err:a?a:null})}return!0}var g=function(){var b=window.XMLHttpRequest?new window.XMLHttpRequest:new ActiveXObject("MSXML2.XMLHTTP.3.0");b.open("GET",c.ESVS.SRCPath+"unisignweb/rsrc/layout/cloudconnect.html?version="+c.ver,!1);b.send(null);return b.responseText},n=function(){var b=window.XMLHttpRequest?new window.XMLHttpRequest:new ActiveXObject("MSXML2.XMLHTTP.3.0");b.open("GET",c.ESVS.SRCPath+"unisignweb/rsrc/lang/"+c.ESVS.Language+"/cloudconnect_"+c.ESVS.Language+".js?version="+c.ver,!1);b.send(null);return b.responseText},k=c.ESVS.TabIndex;return function(){var b=c.CustomEval(g),a=c.CustomEval(n,!0);t(b());b=document.getElementById("us-div-connect-pnl");var m=document.getElementById("us-div-mo-pnl"),e=document.getElementById("us-lbl-title");e.appendChild(document.createTextNode(a.IDS_CONNECT_TITLE));e.setAttribute("tabindex",k++,0);var f=document.getElementById("us-btn");f.setAttribute("value",a.IDS_CONNECT_CONFIRM,0);if("connect"==d.type){m.style.display="none";m.style.visibility="hidden";b.style.display="block";b.style.visibility="visible";e=document.getElementById("us-cls-img-btn");e.setAttribute("title",a.IDS_CLOSE,0);e=document.getElementById("us-cls-btn-img");e.setAttribute("src",c.ESVS.SRCPath+"unisignweb/rsrc/img/cert_close_btn.png",0);e.setAttribute("alt",a.IDS_CLOSE,0);e.setAttribute("tabindex",k++,0);document.getElementById("us-connect-name-lbl").appendChild(document.createTextNode(a.IDS_NAME));var q=document.getElementById("us-connect-name-textbox");q.setAttribute("tabindex",k++,0);q.setAttribute("placeholder",a.IDS_MSG_NAME);q.setAttribute("title",a.IDS_NAME_TITLE);d.args&&d.args.name&&(q.value=d.args.name);document.getElementById("us-connect-hp-lbl").appendChild(document.createTextNode(a.IDS_HP));b=document.getElementById("us-connect-hp-textbox");b.setAttribute("tabindex",k++,0);b.setAttribute("placeholder",a.IDS_MSG_HP);b.setAttribute("title",a.IDS_HP_TITLE);d.args&&d.args.hp&&(b.value=d.args.hp);b.onkeypress=function(h){h=h?h:event;h.returnValue=48>h.keyCode||57<h.keyCode?!1:!0};document.getElementById("us-connect-birth-lbl").appendChild(document.createTextNode(a.IDS_BIRTH));b=document.getElementById("us-connect-birth-textbox");b.setAttribute("tabindex",k++,0);b.setAttribute("placeholder",a.IDS_MSG_BIRTH);b.setAttribute("title",a.IDS_BIRTH_TITLE);d.args&&d.args.birth&&(b.value=d.args.birth);b=document.getElementById("us-connect-auto-connect-checkbox");b.setAttribute("tabindex",k++,0);b.setAttribute("title",a.IDS_AUTO_CONNECT_TITLE);document.getElementById("us-connect-auto-connect-lbl").appendChild(document.createTextNode(a.IDS_AUTO_CONNECT));f.setAttribute("tabindex",k++,0);f.classList.remove("us-cloud-btn-disable");f.onclick=function(){l(a)};var r=document.getElementById("us-cls-img-btn");r.setAttribute("title",a.IDS_CLOSE,0);r.onclick=function(){d.onCancel()};e=document.getElementById("us-cls-btn-img");e.setAttribute("tabindex",k++,0);r.onkeydown=function(h){h=h||window.event;var a=h.which||h.keyCode;9==a&&h.shiftKey&&(r.onblur=function(){setTimeout(function(){f.focus()},10)});9!=a||h.shiftKey||(r.onblur=function(){setTimeout(function(){q.focus()},10)})};var x=!1;e.onkeyup=function(a){a=a||window.event;9==(a.which||a.keyCode)&&a.shiftKey&&x&&(x=!1,setTimeout(function(){f.focus()},10))};e.onkeydown=function(a){a=a||window.event;if(9==(a.which||a.keyCode)&&a.shiftKey)return a.cancelBubble=!0,x=a.returnValue=!0,!1}}else{e=document.getElementById("us-cls-img-btn");e.style.visibility="hidden";e=document.getElementById("us-cls-btn-img");e.style.visibility="hidden";m.style.display="block";m.style.visibility="visible";b.style.display="none";b.style.visibility="hidden";document.getElementById("us-mo-caption").appendChild(document.createTextNode(a.IDS_MO_CAPTION));b=d.args.authCode;m=d.args.authCodeTime;var z=d.args.authStatus;document.getElementById("us-lbl-mo-title").appendChild(document.createTextNode(a.IDS_AUTH_CODE));m=(new Date(m.replace(/[.-]/gi,"/"))).getTime();e=(new Date).getTime();var u=(m-e)/1E3,A,p,B=document.getElementById("authtime"),v=document.getElementById("authcode");v.innerText=b;var w=setInterval(function(){--u;A="0"+parseInt(u/60);p=""+parseInt(u%60);p=1==p.length?"0"+p:p;B.innerText=A+":"+p;0==u&&clearInterval(w);var b=z();switch(b.code){case 0:f.classList.remove("us-cloud-btn-disable");clearInterval(w);break;case 5201:alert(a.IDS_ERR_MSG_INCORRECT_CODE1+b.error_count+a.IDS_ERR_MSG_INCORRECT_CODE2);break;case 5202:clearInterval(w);l(a,{errCode:b.code,errMsg:a.IDS_ERR_MSG_TIMEOUT});break;case 5204:clearInterval(w),l(a,{errCode:b.code,errMsg:a.IDS_ERR_MSG_VERIFY_FAIL})}},1E3);f.onclick=function(){l(a)};f.setAttribute("tabindex",k++,0);f.onkeydown=function(a){a=a||window.event;9==(a.which||a.keyCode)&&(f.onblur=function(){setTimeout(function(){v.focus()},10)})};var y=!1;v.onkeyup=function(a){a=a||window.event;9==(a.which||a.keyCode)&&y&&(y=!1,setTimeout(function(){f.focus()},10))};v.onkeydown=function(a){a=a||window.event;if(9==(a.which||a.keyCode)&&a.shiftKey)return a.cancelBubble=!0,y=a.returnValue=!0,!1}}return document.getElementById("us-div-cloud")}()};return function(d){var t=c.uiLayerLevel,l=c.uiUtil().getOverlay(t),g=z({type:d.type,args:d.args,onConfirm:d.onConfirm,onCancel:d.onCancel});g.style.zIndex=t+1;c.ESVS.TargetObj.insertBefore(l,c.ESVS.TargetObj.firstChild);var n=window.onresize;return{show:function(){c.ActiveUI=this;draggable(g,document.getElementById("us-div-cloud-title"));l.style.display="block";var k=document.getElementById("us-div-cert-select"),b=document.getElementById("us-div-cert-manage");g.style.width="connect"==d.type?"345px":"440px";c.uiUtil().offsetResize(g);window.onresize=function(){g&&(g.style.left=c.uiUtil().getScrollLeft()+(c.uiUtil().getViewportWidth()-c.uiUtil().getNumSize(c.uiUtil().getStyle(g,"width","width")))/2+"px");if(k){var a=document.getElementById("us-div-list");a=60+k.offsetTop+a.offsetTop;g.style.top=a+"px"}else b&&(a=document.getElementById("us-div-cert-manage-list"),a=60+b.offsetTop+a.offsetTop,g.style.top=a+"px");n&&n()};c.uiLayerLevel+=10;c.ESVS.TabIndex+=30;setTimeout(function(){"connect"==d.type?document.getElementById("us-connect-name-textbox").focus():document.getElementById("us-btn").focus()},10)},hide:function(){l.style.display="none";g.style.display="none"},dispose:function(){window.onresize=function(){n&&n()};g.parentNode.parentNode.removeChild(g.parentNode);l.parentNode.removeChild(l);c.uiLayerLevel-=10;c.ESVS.TabIndex-=30}}}};