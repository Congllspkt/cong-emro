var __cloudlist=function(a){var n=function(e){function l(b){if(!b)return alert("UI load error."),!1;var a=document.createElement("div");document.body.insertBefore(a,document.body.firstChild);a.innerHTML=b;return!0}function g(b,a){var c="";if("CERT_HISTORY"==e.type)for(var d=0;d<b.length;d++){var f="<li><dl><dt>"+a.IDS_LABEL_CLOUD_TIME+"</dt><dd>"+b[d].date+"</dd></dl></li>",g="<li><dl><dt>"+a.IDS_LABEL_CLOUD_FUNC+"</dt><dd>"+b[d].action+"</dd></dl></li>",h="<li><dl><dt>"+a.IDS_LABEL_CLOUD_PLATFORM+"</dt><dd>"+b[d].connect_device+"</dd></dl></li>";c+='<li><ul class="us-cloud-row">'+f+g+h+"</ul></li>"}else if("USER_HISTORY"==e.type)titleLbl.appendChild(document.createTextNode(__lang.IDS_CLOUD_CERT_INFO)),noticeText.innerHTML=__lang.IDS_CLOUD_CERT_NOTICE;else if("AUTO_CON"==e.type)for(d=0;d<b.length;d++)f="<li>"+a.IDS_LABEL_CLOUD_OS+" "+b[d].os+"</li>",g="<li>"+a.IDS_LABEL_CLOUD_SITE+" "+b[d].ip+"</li>",h="<li>"+a.IDS_LABEL_CLOUD_PLATFORM+" "+b[d].platform_version+"</li>",c+='<li><ul class="us-cloud-row">'+f+g+h+('<li><button id="'+b[d].device_id+'" >'+a.IDS_LABEL_CLOUD_DELETE+" </button></li>")+"</ul></li>";return c}var f=function(){var b=window.XMLHttpRequest?new window.XMLHttpRequest:new ActiveXObject("MSXML2.XMLHTTP.3.0");b.open("GET",a.ESVS.SRCPath+"unisignweb/rsrc/layout/cloudlist.html?version="+a.ver,!1);b.send(null);return b.responseText},h=function(){var b=window.XMLHttpRequest?new window.XMLHttpRequest:new ActiveXObject("MSXML2.XMLHTTP.3.0");b.open("GET",a.ESVS.SRCPath+"unisignweb/rsrc/lang/"+a.ESVS.Language+"/cloudlist_"+a.ESVS.Language+".js?version="+a.ver,!1);b.send(null);return b.responseText},n=a.ESVS.TabIndex;return function(){var b=a.CustomEval(f),c=a.CustomEval(h,!0);l(b());var k=document.getElementById("us-cloud-info-lbl-title"),d=document.getElementById("us-cloud-info-notice-text");b=document.getElementById("us-cloud-info-list").children[0];var m=e.args;if("USER_HISTORY"==e.type)for(k.appendChild(document.createTextNode(c.IDS_CLOUD_USER_INFO)),d.innerHTML=c.IDS_CLOUD_USER_NOTICE,c=0;c<m.length;c++)k=document.createElement("li"),k.appendChild(document.createTextNode(m.join(","))),b.appendChild(k);else"CERT_HISTORY"==e.type?(k.appendChild(document.createTextNode(c.IDS_CLOUD_CERT_INFO)),d.innerHTML=c.IDS_CLOUD_CERT_NOTICE,b.innerHTML=g(m,c)):"AUTO_CON"==e.type&&(k.appendChild(document.createTextNode(c.IDS_CLOUD_AUTO_CONNECT_INFO)),d.innerHTML=c.IDS_CLOUD_AUTO_CON_NOTICE+"<br>"+c.IDS_CLOUD_AUTO_CON_NOTICE1,b.onclick=function(a){if("button"==a.target.tagName.toLowerCase())e.onConfirm(a.target.id)},b.innerHTML=g(m,c));document.getElementById("us-cloud-info-cls-btn-img").setAttribute("src",a.ESVS.SRCPath+"unisignweb/rsrc/img/x-btn.png",0);b=document.getElementById("us-cloud-info-cls-img-btn");b.setAttribute("tabindex",n++,0);b.onclick=function(){e.onCancel()};return document.getElementById("us-div-cloud-Info")}()};return function(e){var l=a.uiLayerLevel,g=a.uiUtil().getOverlay(l),f=n({type:e.type,args:e.args,onConfirm:e.onConfirm,onCancel:e.onCancel});f.style.zIndex=l+1;a.ESVS.TargetObj.insertBefore(g,a.ESVS.TargetObj.firstChild);var h=window.onresize;return{show:function(){a.ActiveUI=this;draggable(f,document.getElementById("us-div-cloud-info-title"));g.style.display="block";a.uiUtil().offsetResize(f);window.onresize=function(){a.uiUtil().offsetResize(f);h&&h()};a.uiLayerLevel+=10;a.ESVS.TabIndex+=30},hide:function(){g.style.display="none";f.style.display="none"},dispose:function(){window.onresize=function(){h&&h()};f.parentNode.parentNode.removeChild(f.parentNode);g.parentNode.removeChild(g);a.uiLayerLevel-=10;a.ESVS.TabIndex-=30}}}};