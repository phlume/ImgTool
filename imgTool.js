javascript:(function(e,a,g,h,f,c,b,d){
    if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){
        c=a.createElement('script');c.type='text/javascript';c.src='http://ajax.googleapis.com/ajax/libs/jquery/'+g+'/jquery.min.js';c.onload=c.onreadystatechange=function(){
            if(!b&&(!(d=this.readyState)||d=='loaded'||d=='complete')){
                h((f=e.jQuery).noConflict(1),b=1);f(c).remove()
                }
            };
            a.documentElement.childNodes[0].appendChild(c)
        }
    })
    (window,document,'1.11.1',function($,L){$('a').click(function(e){
        e.preventDefault();});
        $('img').css('cursor', 'crosshair');
        $(document).on('click','img',function(){
            var altimg = $(this).attr('alt');
            var srcimg = $(this).attr('src');
            var linkSrc = $(this).parent().attr('href');
            $('body').append('
              <style>
              .infoBox {
                position:absolute;
                margin:5px;
                padding:10px;
                top:40px;
                right:40px;
                display:block;
                background:#fff;
                border:solid 2px #cce;
                border-radius:5px;
                box-shadow:3px 3px 30px #333;
                z-index:10;
                min-width:180px;
                max-width:300px;
                min-height:240px;
                max-height:550px;
              }
              </style>
                <div id=\'nfobx\' class=\'infoBox\'>
                    <br>
                    The Image ALT Text is: 
                    <br>
                    <span style=\'font-family:courier;color:#900;\'>'+altimg+'</span>
                    <br>
                    <br>
                    The Image Path is: 
                    <br>
                    <span style=\'font-family:courier;color:#900;\'>'+srcimg+'</span>
                    <br>
                    <br>
                    The Image URL is:
                    <br>
                    <span style=\'font-family:courier;color:#900;\'>'+linkSrc+'</span>
                    <br>
                    <br>
                    <br
                    <br>
                    The Full Code Snippet is:
                    <br>
                    <br>
                    <span style=\'font-family:courier;color:#900;font-size:12px;\'>&amp;lt;a href='+linkSrc+' target=\'_parent\'&amp;gt;&amp;lt;img src='+srcimg+' alt='+altimg+' title='+altimg+'&amp;gt;&amp;lt;/a&amp;gt;</span>
                </div>
      ');
    });
});
