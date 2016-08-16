var helper = {
    loadTemplate : function (url, sucessCallback) {
        var req = new XMLHttpRequest();
        if (!req) throw new Error('Http request not supported by the browser');

        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                if (req.status == 200 || req.status == 304) {
                    var response = this.response || this.responseText || this.responseXML;
                    sucessCallback(response, req.status, req);
                }
                else {
                    throw Error('Cannot load "' + url + '" : ' + req.status);
                }
            }
        }

        req.open('GET', url, true);
        req.send();
    }
};