/**
 * Created by lhc on 2017/3/31.
 */
//关闭click.bs.dropdown.data-api事件，使顶级菜单可点击
$(document).ready(function(){
    $(document).off('click.bs.dropdown.data-api');
});
//自动展开
$('li.dropdown').mouseover(function(){
    $(this).addClass('open');
});
//自动关闭
$('li.dropdown').mouseout(function(){
    $(this).removeClass('open');
});