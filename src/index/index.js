import $ from "jquery";
import particleBac from "../../static/js/particle-bac"
$(".animateList .animateItem").on("click",function(){
    const pageName = $(this).attr("data-pageName");
    if(pageName){
        $(".content>iframe").attr("src","../"+pageName)
    }
})
particleBac(".main",{
    line:false,
    color:"rgba(0,0,0,1)",
    count:100,
})