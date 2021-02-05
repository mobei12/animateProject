import $ from "jquery";
import particleBac from "../../static/js/particle-bac"
$(".animateList .animateItem").on("click",function(){
    const pageName = $(this).attr("data-pageName");
    $(this).addClass("active").siblings().removeClass("active")
    if(pageName){
        $(".content>iframe").attr("src","../"+pageName)
    }
})
particleBac(".main",{
    line:false,
    color:"rgba(255,255,255,1)",
    count:300,
    radius:14,
    "z-index":-1
})
