var Base64={decode:function(d){var a;if(void 0===Base64.decoder){var b=[];for(a=0;64>a;++a)b["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a)]=a;for(a=0;9>a;++a)b["= \f\n\r\t\u00a0\u2028\u2029".charAt(a)]=-1;Base64.decoder=b}b=[];var c=0,f=0;for(a=0;a<d.length;++a){var e=d.charAt(a);if("="==e)break;e=Base64.decoder[e];if(-1!=e){if(void 0===e)throw"Illegal character at offset "+a;c|=e;4<=++f?(b[b.length]=c>>16,b[b.length]=c>>8&255,b[b.length]=c&255,f=c=0):c<<=6}}switch(f){case 1:throw"Base64 encoding incomplete: at least 2 bits missing";
case 2:b[b.length]=c>>10;break;case 3:b[b.length]=c>>16,b[b.length]=c>>8&255}return b},re:/-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,unarmor:function(d){var a=Base64.re.exec(d);if(a)if(a[1])d=a[1];else if(a[2])d=a[2];else throw"RegExp out of sync";return Base64.decode(d)}};
