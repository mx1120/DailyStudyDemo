/**
 * Created by Administrator on 2017/4/14.
 */
/*a为当前的所有cookie，将其转换为一个obj对象（类似于localStorage的存储）*/
window.CookieToLocalStorage = function (a) {
    if(a.length == 0){
        console.log('cookie 为空')
    }else {
        var op = a.split(';');
        var arr_key = []
        var arr_val = []
        var obj = {}
        for (var item in op) {
            if(item == 0){
                arr_key.push(op[item].split('=')[0])
                var mx = op[item].split('=')[0]
                arr_val.push(op[item].split('=')[1])
                obj[mx] = op[item].split('=')[1]
            }else {
                arr_key.push(op[item].split(' ')[1].split('=')[0])
                var pl = op[item].split(' ')[1].split('=')[0]
                arr_val.push(op[item].split(' ')[1].split('=')[1])
                obj[pl] = op[item].split(' ')[1].split('=')[1]
            }
        }
        return obj
    }
}