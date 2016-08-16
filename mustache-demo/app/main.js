(function() {

    var container,
        postService = new PostService();

    function renderPosts (container,posts){
        helper.loadTemplate('templates/post-list.html', function(template){
            Mustache.parse(template);   
            var html = Mustache.render(template, posts);

            container.innerHTML = html;
        });
    }

    function loadData() {
        postService.getData('service.php').then(function (response,status,xhr){
            // console.log(response);

            var posts = { posts : JSON.parse(response) }; // <--
            renderPosts(container,posts);

        }, function (xhr,status){
            throw new Error('Error : ' + status);
        });
    }

    function init(){
        container = document.querySelector('#content');
        loadData();
    }

    init();

})();