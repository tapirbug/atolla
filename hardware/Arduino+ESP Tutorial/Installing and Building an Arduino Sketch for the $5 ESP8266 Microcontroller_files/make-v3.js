function getUrlVars()
{var vars=[],hash;var hashes=window.location.href.slice(window.location.href.indexOf('?')+ 1).split('&');for(var i=0;i<hashes.length;i++)
{hash=hashes[i].split('=');vars.push(hash[0]);vars[hash[0]]=hash[1];}
return vars;}
function getCookie(name){var dc=document.cookie;var prefix=name+"=";var begin=dc.indexOf("; "+ prefix);if(begin==-1){begin=dc.indexOf(prefix);if(begin!=0)return null;}else{begin+=2;var end=document.cookie.indexOf(";",begin);if(end==-1){end=dc.length;}}
return unescape(dc.substring(begin+ prefix.length,end));}
function setCookie(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+ cvalue+"; "+ expires;}
var medium=getUrlVars()["utm_medium"];if(medium!=null){sessionStorage.setItem("medium",medium);}
var pagesViewed=1;if(getCookie("totalPagesViewed")){totalPagesViewed=parseInt(getCookie("totalPagesViewed"),10)+ 1;setCookie("totalPagesViewed",totalPagesViewed,364);}else{setCookie("totalPagesViewed",pagesViewed,364);}
if(sessionStorage.getItem("pagesViewed")){pagesViewed=parseInt(sessionStorage.getItem("pagesViewed"),10)+ 1;sessionStorage.setItem("pagesViewed",pagesViewed);}else{sessionStorage.setItem("pagesViewed",pagesViewed);}
if(!Date.now){Date.now=function now(){return new Date().getTime();};}
jQuery(document).ready(function(){start=Date.now();if(!sessionStorage.getItem("startTime")){sessionStorage.setItem("startTime",start);}
if(!getCookie("totalPagesViewed")){setCookie("initialLandingTime",start,364);}else{setCookie("initialLandingTime",getCookie("totalPagesViewed"),364);}});function optimize(){pagesViewed=parseInt(sessionStorage.getItem("pagesViewed"),10);if(pagesViewed==1){window['optimizely']=window['optimizely']||[];window.optimizely.push(["trackEvent","pagesViewed1"]);}else if(pagesViewed==2){window['optimizely']=window['optimizely']||[];window.optimizely.push(["trackEvent","pagesViewed2"]);}else if(pagesViewed==3){window['optimizely']=window['optimizely']||[];window.optimizely.push(["trackEvent","pagesViewed3"]);}else if(pagesViewed==4){window['optimizely']=window['optimizely']||[];window.optimizely.push(["trackEvent","pagesViewed4"]);}else if(sessionStorage.getItem("pagesViewed")>4){window['optimizely']=window['optimizely']||[];window.optimizely.push(["trackEvent","pagesViewedAlot"]);}
timeSpent=0;end=Date.now();timeSpent=end- sessionStorage.getItem("startTime");if(timeSpent<60000){window['optimizely']=window['optimizely']||[];window.optimizely.push(["trackEvent","timeOnPage0"]);}else if(timeSpent<120000){window['optimizely']=window['optimizely']||[];window.optimizely.push(["trackEvent","timeOnPage1"]);}else if(timeSpent<160000){window['optimizely']=window['optimizely']||[];window.optimizely.push(["trackEvent","timeOnPage2"]);}else if(timeSpent>=160000){window['optimizely']=window['optimizely']||[];window.optimizely.push(["trackEvent","timeOnPage3"]);}}
jQuery(window).load(function(){setInterval(function(){optimize();},30000)});jQuery(window).unload(function(){optimize();});function giveUUID(site,uuid){jQuery.ajax({type:'POST',url:site,crossDomain:true,data:'{"UUID":"'+uuid+'"}',dataType:'json',success:function(responseData,textStatus,jqXHR){var value=responseData.someKey;},error:function(responseData,textStatus,errorThrown){console.log('POST failed.'+uuid);}});}