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
    color:"rgba(65 ,160, 255 , 1)",
    count:50,
    rate:0.5,
    radius:5,
    bounce:true,
    "z-index":-1
})
