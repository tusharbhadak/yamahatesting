
 function setWhatsappHref() {
     768 > $(window).width() ? $("#whatsapp-url").attr("href", "whatsapp://send?text=" + window.location.href) : $("#whatsapp-url").attr("href", "https://web.whatsapp.com/send?text=" + window.location.href)
 }

 function getPageInitFunctionId() {
     return $(".content").attr("data-ref")
 }


 $(window).on("load", SectionInView);


 $(document).ready(function (e) {
   
     setWhatsappHref(), $("#sideInfoBtn").click(function () {
         $(this).hasClass("is-active") ? ($(this).removeClass("is-active"), $("#sideInfo").removeClass("is-active")) : ($(this).addClass("is-active"), $("#sideInfo").addClass("is-active"))
     })
     
     var function_id = getPageInitFunctionId();
     if (void 0 != function_id && "" != function_id) try {
         eval(function_id)()
     } catch (e) {}
   
 });
 var path = window.location.pathname;
 "/" == path.charAt(path.length - 1) && (path = path.substring(0, path.length - 1)), "/" != path.charAt(0) && (path = "/" + path);
 var parentUrl = "";

 function isScrolledIntoView(e) {
     var t = $(window).scrollTop(),
         a = t + $(window).height(),
         o = $(e).offset().top;
     return o + $(e).height() <= a && o >= t
 }

 function SectionInView() {
     isScrolledIntoView($("#footer-bottom")) ? $("#sideInfo, #sideInfoBtn").addClass("side-info--footer") : $("#sideInfo, #sideInfoBtn").removeClass("side-info--footer")
 }
 $.each($(".breadcrumb li > a"), function (e, t) {
     1 == e && (parentUrl = t.getAttribute("href"))
 }), "" == parentUrl ? $(".nav a[href='" + path + "']").addClass("active") : ("/" == parentUrl.charAt(parentUrl.length - 1) && (parentUrl = parentUrl.substring(0, parentUrl.length - 1)), "/" != parentUrl.charAt(0) && (parentUrl = "/" + parentUrl), $(".nav a[href='" + parentUrl + "']").addClass("active")), 




 document.cookie = "_td=aec45509-b0d4-4061-907e-64152af91aef; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "_ga_WFP5CFBJRS=GS1.1.1706087769.4.1.1706091870.36.0.0; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "_gat_gtag_UA_61645253_7=1; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "_ga=GA1.1.2090616963.1706075533; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "_ga=GA1.1.2090616963.1706075533; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "_gid=GA1.1.509375716.1706020246; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = " =1.1.794210634.1700122385; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "_ga_WFP5CFBJRS=GS1.1.1706087769.4.1.1706092106.9.0.0; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "_gat_UA-61645253-1=1; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "_gid=GA1.1.509375716.1706020246; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "_gcl_au=1.1.794210634.1700122385; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "cookie_consent=yes; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "PHPSESSID=hs7039qknv7slgjarquqv3hb5j; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "_vwo_uuid_v2=D517EBEFA2A47C5D13D3A425640FB9D04|f7f936250684893540dfdf4a4e9f7de7; HttpOnly; Secure; SameSite=Strict; Secure";

 document.cookie = "_gid=GA1.1.509375716.1706020246; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "_ga_WFP5CFBJRS=GS1.1.1706087769.4.1.1706092712.60.0.0; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "cookie_consent=yes; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "_gcl_au=1.1.794210634.1700122385; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "_gcl_au=1.1.794210634.1700122385; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "__Secure-1PSIDTS=sidts-CjIBPVxjSuAk41AS7y_p5HE09EziztZyedq-qz0lRX66NFiWH9YEWpXs57xL1vkaLmmkExAA; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "_gid=GA1.2.509375716.1706020246; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "_gcl_au=1.1.794210634.1700122385; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "visid_incap_378496=o84+GW6bSNqQ4BY9J48Rrw7YdmUAAAAAQUIPAAAAAAALlvJXd6Xlox+q0cvFznTG; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "_gcl_au=1.1.794210634.1700122385; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "_ga_WFP5CFBJRS=deleted; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "cookie_consent=yes; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "_vwo_uuid_v2=DC195FE38DEE7AD886156C19336940459|88a22d6579cc9e3a25a8a47276966e01; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "_ga=GA1.1.2090616963.1706075533; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "_ga_WFP5CFBJRS=GS1.1.1706093060.182.1.1706093714.60.0.0; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "incap_ses_747_378496=wUrRW3g97m4MJFWb9uZdCgPqsGUAAAAAAYoRFXdoxsUCEXdJZ9PnjQ==; HttpOnly; Secure; SameSite=Strict; Secure";

 document.cookie = "__unam=bc20de1-18c24f4b80c-199001a3-53; HttpOnly; Secure; SameSite=None; Secure";
 document.cookie = "_gid=GA1.2.509375716.1706020246; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "visid_incap_378496=o84+GW6bSNqQ4BY9J48Rrw7YdmUAAAAAQUIPAAAAAAALlvJXd6Xlox+q0cvFznTG; HttpOnly; Secure; SameSite=Strict; Secure";
 document.cookie = "_gcl_au=1.1.794210634.1700122385; HttpOnly; Secure; SameSite=Lax; Secure";

 document.cookie = "sessionCookie=mySessionValue; HttpOnly; Secure; SameSite=Strict";