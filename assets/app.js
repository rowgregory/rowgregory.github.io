$(document).ready(function () {

    $('.takeMeTo').on('click', function(e) {
        console.log("clicked");
        e.preventDefault();
    
         setTimeout("location.href = 'https://rowgregory.github.io/Portfolio';", 2600);     
    })
    
    var relativeOffset = anime.timeline({
        autoplay:false
    })
    
    relativeOffset
    
        .add({
            targets: 'div.w',
            // rotate:[
            //     {value:'4turn', duration: 2000}
            // ],
            translateX: [
                { value: -200, duration: 1000,},
                {value: -400, duration: 700,delay:200,}
                ],
            translateY: [
                { value: -300, duration: 800, delay: 700,},
                { value: 1000, duration:8000, delay:400,}
                ],
            complete: function() {
                $('div.w').hide();
            }
        })
        .add({
            targets: 'div.e1',
            offset:'-=9900',
            translateY:[
                {value: 100, duration:500},
                {value:-250, duration:800, delay: 600,}
            ],
            
            translateX:[
                {value:200, duration:500, delay:510,},
                { value: -1000, duration:8000, delay:720,}
            ]
    
        })
        .add({
            targets: 'div.l',
            offset:'-=9900',
            translateX:[
                {value:-170, duration:500,},
                { value: 500, duration:2000, delay:620,}
            ],
            translateY:[
                {value: 100, duration:500, delay:500},
                {value:750, duration:3000, delay: 900,}
            ], 
            complete: function() {
                $('div.l').hide();
            }
        })
    
        .add({
            targets: 'div.c',
            offset:'-=9900',
            translateY:[
                {value:-300, duration:1000,},
                {value:130, duration:500,delay:500,}
            ], 
              translateX:[
                  {value:-300, duration:500,delay:800,},
                { value: 700, duration:7000, delay:620,}
              ],
              complete: function() {
                $('div.c').hide();
            }
        })
        .add({
            targets: 'div.o',
            offset:'-=9900',
            translateY:[
                {value:-75, duration:800,},
                {value:130, duration:1000,delay:300,},
                {value: -600, duration:2500, delay:300, },
            ], 
            translateX:[
                {value:-350, duration:1500,delay:2000,},
                // { value: 700, duration:7000, delay:620,}
            ],
            complete: function() {
                $('div.o').hide();
            }
            
        })
        .add({
            targets: 'div.m',
            offset:'-=9900',
            translateX:[
                {value:200, duration:700,},
                { value: -800, duration:7000, delay:620,}
            ],
            translateY:[
                {value:-75, duration:800,delay:400,},
            ], 
            
            complete: function() {
                $('div.m').hide();
            }
            
        })
        .add({
            targets: 'div.e2',
            offset:'-=9900',
            translateY:[
                {value:230, duration:800,},
                {value:-800, duration:2000, delay:600,},
            ], 
            translateX:[
                {value:200, duration:700,delay:300,},
                // { value: -800, duration:7000, delay:620,}
            ],
            
            
            complete: function() {
                $('div.m').hide();
            }
            
        })
    
        document.querySelector('.takeMeTo').onclick = relativeOffset.restart;
        $('#largeOuterCircle65').hide();
        $('#largeOuterCircle7').hide();
        $('.takeMeTo').hover(function() {
            $('#largeOuterCircle7').toggle();
            $('#largeOuterCircle65').toggle();
        })
    })