        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="{{$base_url}}/assets/js/jquery.min.js"><\/script>')</script>

        <script src="{{$base_url}}/assets/js/global.min.js"></script>
        <script src="{{$base_url}}/assets/js/{{$page_slug}}.min.js"></script>

        <!-- For Dev - livereload -->
        <script>
          window.location.hostname === 'localhost' && document.write('<script src="//localhost:35729/livereload.js"><\/script>');
        </script>
    </body>
</html>