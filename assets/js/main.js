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
    


