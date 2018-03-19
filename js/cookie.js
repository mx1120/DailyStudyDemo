/*cookie的存取设置*/
window.GetCookie = function(name){
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen)
    {
    var j = i + alen;
    if (document.cookie.substring(i, j) == arg)
    return GetCookieVal(j);
    i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0) break;
    }
    return null;
};
window.GetCookieVal = function(offset){
    var endstr = document.cookie.indexOf (";", offset);
    if (endstr == -1)
    endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
};
window.SetCookie = function(name,value){
    var expdate = new Date();
    var argv = SetCookie.arguments;
    var argc = SetCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : 7;//设置默认 cookie 过期时间为 7 天
    var path = (argc > 3) ? argv[3] : '/'; //默认所有页面使用
    var domain = (argc > 4) ? argv[4] : null;
    var secure = (argc > 5) ? argv[5] : null;
    // if(expires!=null) expdate.setTime(expdate.getTime() + ( expires * 24 * 60 * 60 * 1000 )); //按天计算
    if(expires!=null) expdate.setTime(expdate.getTime() + ( expires * 60 * 1000 )); //按分钟计算
    document.cookie = name + "=" + escape (value) +((expires == null) ? "" : ("; expires="+ expdate.toGMTString()))
    +("; path=" + path) +((domain == null) ? "" : ("; domain=" + domain))
    +((secure == null) ? "" : ("; secure=" + secure));//path 默认为/ domain和secure默认都不设置。已经将delCookie方法同步，删除时保持一致，否则会导致cookie删除失败！！
};
window.DelCookie = function(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    document.cookie = name + "=; expires="+ exp.toGMTString()+"; path=/";
}

