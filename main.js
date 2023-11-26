$(function(){
        $('.btn').on('click', function(){
            $('#popup-cont').fadeIn(600);
            $('#popup').animate({
                width: '200px',
                height: '300px'
            }, 600)
        })
        $('#popup-cont').on('click', function(event){
            if (event.target == this){
                $(this).fadeOut();
                $('#popup').animate({
                    width: '0px',
                    height: '0px'
                }, 600)
            }
        })
        $('.menu_btn').on('click', function(){
            $('.rest').toggleClass('rest_1');
        })

        $.get('http://data.fixer.io/api/latest' ,
        {'access_key':  'f31700909164e47bc9b701565a9a9a63'},
        function(otv){
            var nazv = otv.rates.RUB;
            var nazv_1 =$('<div class="otv_1" id="otv"></div>');
            nazv_1.text('1 рубль стоит '+ nazv +' евро');
            $('.bluda_text').append(nazv_1)
            console.log(otv.rates);
        })

        $('.head_menu').on('click', function(){
            $('.head_menu').css({'display': 'none'});
            $('.nav_item_1').css({'left': '50%'});
            $('#temn').css({'width': '50%'});
        })
        $('#temn').on('click', function(){
            $('.head_menu').css({'display': 'block'});
            $('.nav_item_1').css({'left': '150%'});
            $('#temn').css({'width': '0'});
        })
})