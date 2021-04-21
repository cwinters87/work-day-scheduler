    const today = moment()    
    $('#currentDay').text(today.format('dddd, MMMM Do'))


    var hourTime = today.format('H')
    var currentHour = parseInt(hourTime, 10)

    
    var changeColorNine = function(){
        if (currentHour === 9) {
            $("#nine").addClass('present')}         
        else if (currentHour > 9) {
            $("#nine").addClass('past')}
        else {
            $("#nine").addClass('future')}
        }
    
    var changeColorTen = function(){
        if (currentHour === 10) {
            $("#ten").addClass('present')}         
        else if (currentHour > 10) {
            $("#ten").addClass('past')}
        else {
            $("#ten").addClass('future')}
        }
    
    var changeColorEleven = function(){
        if (currentHour === 11) {
            $("#eleven").addClass('present')}         
        else if (currentHour > 11) {
            $("#eleven").addClass('past')}
        else {
            $("#eleven").addClass('future')}
        }
    
    var changeColorTwelve = function(){
        if (currentHour === 12) {
            $("#twelve").addClass('present')}         
        else if (currentHour > 12) {
            $("#twelve").addClass('past')}
        else {
            $("#twelve").addClass('future')}
        }
    
    var changeColorOne = function(){
        if (currentHour === 13) {
            $("#one").addClass('present')}         
        else if (currentHour > 13) {
            $("#one").addClass('past')}
        else {
            $("#one").addClass('future')}
        }
    
    var changeColorTwo = function(){
        if (currentHour === 14) {
            $("#two").addClass('present')}         
        else if (currentHour > 14) {
            $("#two").addClass('past')}
        else {
            $("#two").addClass('future')}
        }
    
    var changeColorThree = function(){
        if (currentHour === 15) {
            $("#three").addClass('present')}         
        else if (currentHour > 15) {
            $("#three").addClass('past')}
        else {
            $("#three").addClass('future')}
        }
    
    var changeColorFour = function(){
        if (currentHour === 16) {
            $("#four").addClass('present')}         
        else if (currentHour > 16) {
            $("#four").addClass('past')}
        else {
            $("#four").addClass('future')}
        }
    changeColorFour()

    var changeColorFive = function(){
        if (currentHour === 17) {
            $("#five").addClass('present')}         
        else if (currentHour > 17) {
            $("#five").addClass('past')}
        else {
            $("#five").addClass('future')}
        }


    
    
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
    
    changeColorNine()
    changeColorTen()
    changeColorEleven()
    changeColorTwelve()
    changeColorOne()
    changeColorTwo()
    changeColorThree()
    changeColorFour()
    changeColorFive()
        
    setInterval(function() {
        location.reload(true)
      }, 3600000); 

