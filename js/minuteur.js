 jQuery(document).ready(function($){
     

        $('.pie_progress').asPieProgress({
            namespace: 'pie_progress'
        });

     
        // Example with grater loading time - loads longer
    var passeInfo = false;
    var passeAlerte = false;
    var passeWarning = false;
  $('.pie_progress--countdown').asPieProgress({
            namespace: 'pie_progress',
            easing: 'linear',
            first: 120,
            max: 120,
            goal: 0,
            speed: 1200, // 120 s * 1000 ms per s / 100
            numberCallback: function(n){
                var minutes = Math.floor(this.now/60);
                var seconds = this.now % 60;
                var ratio = this.now/this.max;
                 document.getElementById("console").textContent = ratio;

                if (ratio > 0.75){
                    
                    document.getElementById('content').setAttribute('class','ok');   
                }
                if (ratio < 0.75){
                 if(passeInfo != true){
                      passeInfo = true;
                      document.getElementById('alerte-audio').play();
                  }
                  document.getElementById("console").textContent = 'info';
                  document.getElementById('content').setAttribute('class','info'); 
                }
                if (ratio < 0.50){
                  if(passeWarning != true){
                      passeWarning = true;
                      document.getElementById('alerte-audio').play();
                  }
                  document.getElementById("console").textContent = 'warning';
                  document.getElementById('content').setAttribute('class','warning'); 
                }
                if (ratio < 0.25){
                  if(passeAlerte != true){
                      passeAlerte = true;
                      document.getElementById('alerte-audio').play();
                  }
                  document.getElementById("console").textContent = 'alert';
                  document.getElementById('content').setAttribute('class','alert'); 
                }
                if (minutes ==0 && seconds < 1){
                    document.getElementById('content').setAttribute('class','end'); 
                    document.getElementById('alerte-audio').play();
                 
                }
            
                
                if(seconds < 10) {
                   seconds = '0' + seconds;
                }
                return minutes +': ' + seconds;
                }
            });
        $('#button_start').on('click', function(){
            passeInfo = false;
            passeAlerte = false;
            passeWarning = false;
            var mins = parseInt(document.getElementById("minutes_id").value);
            var secs = parseInt(document.getElementById("secondes_id").value);
            var secs2 = (mins * 60) + secs;
            var speed =secs2*10;
            $('.pie_progress').asPieProgress('reinit',secs2,secs2,speed,0);

        });
        $('#button_finish').on('click', function(){
             $('.pie_progress').asPieProgress('finish');
        });
        $('#button_go').on('click', function(){
             $('.pie_progress').asPieProgress('go',50);
        });
        $('#button_go_percentage').on('click', function(){
            $('.pie_progress').asPieProgress('go','50%');
        });
        $('#button_stop').on('click', function(){
            $('.pie_progress').asPieProgress('stop');
        });
        $('#button_reset').on('click', function(){

            $('.pie_progress').asPieProgress('reset');
        });
    });