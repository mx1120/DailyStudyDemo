/**
 * Created by Administrator on 2017/4/25.
 */
/*
 * 17kouyu API provides 17kouyu Ltd's (www.17kouyu.com) world leading pronunciation
 * evaluation, speech recognition technologies, and text-to-speech technologies.
 *
 * 17kouyu Ltd opens this API hoping make every programmer be capable to implement
 * speech enabled applicaitons.
 *
 * Copyright (c) 2016 by 17kouyu. All rights reserved.
 *
 * $Id: iload.js 4938 2016-08-12 09:26:05Z $
 */
_17kouyu = {};
(function(){
    _17kouyu.jsLoadStart = new Date().getTime();

    _17kouyu.getCss = function(src){
        document.write('<' + 'link href="' + src + '"' + ' rel="stylesheet" type="text/css" />');
    }

    _17kouyu.getScript = function(src){
        document.write('<' + 'script src="' + src + '"' + ' type="text/javascript"><' + '/script>');
    }

    var generateGUID = (typeof(window.crypto) != 'undefined' && typeof(window.crypto.getRandomValues) != 'undefined') ? function(){
            // If we have a cryptographically secure PRNG, use that
            // http://stackoverflow.com/questions/6906916/collisions-when-generating-uuids-in-javascript
            var buf = new Uint16Array(8);
            window.crypto.getRandomValues(buf);
            var S4 = function(num){
                var ret = num.toString(16);
                while (ret.length < 4) {
                    ret = "0" + ret;
                }
                return ret;
            };
            return (S4(buf[0]) + S4(buf[1]) + "-" + S4(buf[2]) + "-" + S4(buf[3]) + "-" + S4(buf[4]) + "-" + S4(buf[5]) + S4(buf[6]) + S4(buf[7]));
        } : function(){
            // Otherwise, just use Math.random
            // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };

    //_17kouyu.host = "http://localhost";
    _17kouyu.jssdkVersion = "2.0.3";
    _17kouyu.apiVersion = "v2.0";

    _17kouyu.host = _17kouyu.host || "http://sdk.17kouyu.com/jssdk/" + _17kouyu.apiVersion;

    // _17kouyu.getCss(_17kouyu.host + "/Resources/themes/default/idebug.css");
    // _17kouyu.getCss(_17kouyu.host + "/Resources/themes/default/ui.css");

    _17kouyu.logId = generateGUID();
    _17kouyu.getScript(_17kouyu.host + "/Resources/jquery/ijquery-1.6.2-min.js");
    _17kouyu.getScript(_17kouyu.host + "/Resources/17kouyu-min.js");
})();