javascript:(function(e,a,g,h,f,c,b,d){if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){c=a.createElement('script');c.type='text/javascript';c.src='http://ajax.googleapis.com/ajax/libs/jquery/'+g+'/jquery.min.js';c.onload=c.onreadystatechange=function(){if(!b&&(!(d=this.readyState)||d=='loaded'||d=='complete')){h((f=e.jQuery).noConflict(1),b=1);f(c).remove()}};a.documentElement.childNodes[0].appendChild(c)}})(window,document,'1.3.2',function($,L){
	$('a').click(function(e){e.preventDefault();});
$('img').css('cursor', 'crosshair');$(document).on('click','img',function(){
	var altimg = $(this).attr('alt');
	var srcimg = $(this).attr('src');
	var linkSrc = $(this).parent().attr('href');
	$('body').append('
	<style>
	.infoBox {
		background:rgba(240,240,240,.85);
		border:solid 1px #999;
		border-radius:5px;
		box-shadow:1px -1px 5px #999;
		display:block;
		font-family:arial;
		font-size:11px;
		margin:5px;
		max-height:auto;
		min-height:120px;
		max-width:250px;
		min-width:120px;
		overflow-y:srolling
		padding:10px 20px;
		position:fixed;
			top:10px;
			right:10px;
		text-align:left;
		word-wrap: break-word;
		z-index:100000!important;
		}
	</style>
	<div id=\'nfobx\' class=\'infoBox\'>
		<h3 style="text-align:center;color:#118;font-family:arial;font-size:16px;">-Image Info Tool-</h3>
		<br>The Image ALT Text is:
		<br>
		<div style=\'font-family:courier;color:#900;background:#fff;padding:5px;border-radius:3px;border:1px solid #cdcdcd;\'>&#34;'+altimg+'&#34;</div>
		<br>The Image Path is:&nbsp;&nbsp;&nbsp;
		<a href='+srcimg+' target=\'_blank\'><span style=\'font-size:10px\'>(View IMG in new tab)</span></a>
		<br>
		<div style=\'font-family:courier;color:#900;background:#fff;padding:5px;border-radius:3px;border:1px solid #cdcdcd;\'>&#34;'+srcimg+'&#34;</div>
		<br>The Image Link URL is:<br>
		<div style=\'font-family:courier;background:#fff;padding:5px;border-radius:3px;border:1px solid #cdcdcd;color:#900;\'>&#34;'+linkSrc+'&#34;</div>
		<br>The Full Code Snippet is:<br>
		<textarea id="total" onclick=\'javascript:$(this).focus();$(this).select();\' style=\'background:#fff;width:240px;height:200px;padding:5px;font-family:courier;color:#900;font-size:12px;\'>&lt;a href=&#34;'+linkSrc+'&#34; target=\'_parent\'&gt;&lt;img src=&#34;'+srcimg+'&#34; alt=&#34;'+altimg+'&#34; title=&#34;'+altimg+'&#34;&gt;&lt;/a&gt;</textarea>
		<br><br>
		<input type=\'button\' style=\'cursor:pointer;background:#ddd;color:#000;border:1px solid #000;border-radius:3px;\' value=\'Refresh Page\'onClick=\'history.go(0)\' >
	</div>')
	;})
;})
