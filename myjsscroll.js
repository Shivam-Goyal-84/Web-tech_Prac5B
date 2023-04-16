  $('#darkm').click(function() {
    var $listSort = $('#darkmm');
    if ($listSort.attr('data-bs-theme')) {
        $listSort.removeAttr('data-bs-theme');
    } else {
        $listSort.attr('data-bs-theme', 'dark');
    }
});




$('document').ready(function () {
    $('#Mcity').hide();
    $('#bigIFrame').hide();
    $('#Mcity').show(1000);
    $('#Diploma').hide();
    $('#hcard').hide();
    $('#hhcard').hide();
    $('#padd').hide();
    $('#paddd').hide();
    $("a").click(function(){
        $('#bigIFrame').show();
    })
    $('#dDiploma').click(function () {
        $('#bigIFrame').hide();
        $('#dOthers').slideToggle(100);
        $('#dHSC').slideToggle(100);
        $('#dSSC').slideToggle(100);
        $('#dDegree').slideToggle(100);
        $('#cOthers').slideToggle(100);
        $('#cHSC').slideToggle(100);
        $('#cSSC').slideToggle(100);
        $('#cDegree').slideToggle(100);
        $('#paddd').slideToggle(100);
        $('#Mcity').slideToggle(100);
        $('#Diploma').slideToggle(100);
        $('#hcard').slideToggle(100);
        console.log("We click");
        $('.table-responsive').fadeToggle(1000);
    })

    $('#Degree').hide();
    $('#dDegree').click(function () {
        $('#bigIFrame').hide();
        $('#dOthers').slideToggle(100);
        $('#dHSC').slideToggle(100);
        $('#dSSC').slideToggle(100);
        $('#dDiploma').slideToggle(100);
        $('#cOthers').slideToggle(100);
        $('#cHSC').slideToggle(100);
        $('#cSSC').slideToggle(100);
        $('#cDiploma').slideToggle(100);
        $('#padd').slideToggle(100);
        $('#Mcity').slideToggle(100);
        $('#Degree').slideToggle(100);
        $('#hcard').slideToggle(100);
        console.log("We click");
        $('.table-responsive').fadeToggle(1000);
    })

    $('#HSC').hide();
    $('#dHSC').click(function () {
        $('#bigIFrame').hide();
        $('#dOthers').slideToggle(100);
        $('#dDiploma').slideToggle(100);
        $('#dSSC').slideToggle(100);
        $('#dDegree').slideToggle(100);
        $('#cOthers').slideToggle(100);
        $('#cDiploma').slideToggle(100);
        $('#cSSC').slideToggle(100);
        $('#cDegree').slideToggle(100);
        $('#padd').slideToggle(100);
        $('#Mcity').slideToggle(100);
        $('#HSC').slideToggle(100);
        $('#hcard').slideToggle(100);
        console.log("We click");
        $('.table-responsive').fadeToggle(1000);
    })

    $('#SSC').hide();
    $('#dSSC').click(function () {
        $('#bigIFrame').hide();
        $('#dOthers').slideToggle(100);
        $('#dHSC').slideToggle(100);
        $('#dDiploma').slideToggle(100);
        $('#dDegree').slideToggle(100);
        $('#cOthers').slideToggle(100);
        $('#cHSC').slideToggle(100);
        $('#cDiploma').slideToggle(100);
        $('#cDegree').slideToggle(100);
        $('#padd').slideToggle(100);
        $('#Mcity').slideToggle(100);
        $('#SSC').slideToggle(100);
        $('#hcard').slideToggle(100);
        $('#hhcard').slideToggle(100);
        console.log("We click");
        $('.table-responsive').fadeToggle(1000);
    })

    $('#Others').hide();
    $('#dOthers').click(function () {
        $('#bigIFrame').hide();
        $('#dDiploma').slideToggle(100);
        $('#dHSC').slideToggle(100);
        $('#dSSC').slideToggle(100);
        $('#dDegree').slideToggle(100);
        $('#cDiploma').slideToggle(100);
        $('#cHSC').slideToggle(100);
        $('#cSSC').slideToggle(100);
        $('#cDegree').slideToggle(100);
        $('#padd').slideToggle(100);

        $('#Mcity').slideToggle(100);
        $('#Others').slideToggle(100);
        $('#hcard').slideToggle(100);
        $('#hhcard').slideToggle(100);
        console.log("We click");
        $('.table-responsive').fadeToggle(1000);
    })
})