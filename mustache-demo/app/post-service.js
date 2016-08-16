function PostService (){

    this.getData = function(url){
        return new Promise(function(resolve, reject){

            var req = new XMLHttpRequest();
            req.onreadystatechange = function () {
                if (req.readyState === 4) {
                    if (req.status == 200 || req.status == 304) {
                        resolve(req.responseText, req.status, req);
                    }
                    else {
                        reject(req, req.status);
                    }
                }
            };

            req.open('GET', url, true);
            req.send();
        });
    }

}