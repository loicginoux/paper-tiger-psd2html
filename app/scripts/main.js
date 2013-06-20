// jQuery(function(){
// 	jQuery(".info h2").fitText(1, { maxFontSize: '80px' });
// 	jQuery(".info p").fitText(1, { maxFontSize: '22px' });
// })


// facebook plugin
(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/fr_FR/all.js#xfbml=1&appId=244695498909368";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

// twitter plugin
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");