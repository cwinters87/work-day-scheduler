    const today = moment()    
    $('#currentDay').text(today.format('dddd, MMMM Do'))


    var hourTime = today.format('hh')
    var currentHour = parseInt(hourTime, 10)

    console.log(currentHour)


    
    var changeColor = function(){
        if(currentHour < 6){
        $("textarea").addClass("past")}
    }

    changeColor()
    
    
    setInterval(function() {
        location.reload(true)
      }, 3600000);
    
    
    
    
    
    $('#nine').text(localStorage.getItem('nine'))
    $('#ten').text(localStorage.getItem('ten'))
    $('#eleven').text(localStorage.getItem('eleven'))
    $('#twelve').text(localStorage.getItem('twelve'))
    $('#one').text(localStorage.getItem('one'))
    $('#two').text(localStorage.getItem('two'))
    $('#three').text(localStorage.getItem('three'))
    $('#four').text(localStorage.getItem('four'))
    $('#five').text(localStorage.getItem('five'))


    $("#nine-btn").click(function(){
        var textarea = $.trim($("#nine").val())
        localStorage.setItem('nine', textarea)
        $('#nine').text(localStorage.getItem('nine'))
    })

    $("#ten-btn").click(function(){
        var textarea = $.trim($("#ten").val())
        localStorage.setItem('ten', textarea)
        $('#ten').text(localStorage.getItem('ten'))
    })

    $("#eleven-btn").click(function(){
        var textarea = $.trim($("#eleven").val())
        localStorage.setItem('eleven', textarea)
        $('#eleven').text(localStorage.getItem('eleven'))
    })

    $("#twelve-btn").click(function(){
        var textarea = $.trim($("#twelve").val())
        localStorage.setItem('twelve', textarea)
        $('#twelve').text(localStorage.getItem('twelve'))
    })

    $("#one-btn").click(function(){
        var textarea = $.trim($("#one").val())
        localStorage.setItem('one', textarea)
        $('#one').text(localStorage.getItem('one'))
    })
    
    $("#two-btn").click(function(){
        var textarea = $.trim($("#two").val())
        localStorage.setItem('two', textarea)
        $('#two').text(localStorage.getItem('two'))
    })

    $("#three-btn").click(function(){
        var textarea = $.trim($("#three").val())
        localStorage.setItem('three', textarea)
        $('#three').text(localStorage.getItem('three'))
    })

    $("#four-btn").click(function(){
        var textarea = $.trim($("#four").val())
        localStorage.setItem('four', textarea)
        $('#four').text(localStorage.getItem('four'))
    })

    $("#five-btn").click(function(){
        var textarea = $.trim($("#five").val())
        localStorage.setItem('five', textarea)
        $('#five').text(localStorage.getItem('five'))
    })
    


