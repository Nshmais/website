$ (function(){
        $('.skill').on('click', function()  {
            var SkillId= $(this).attr('data-skillid');
            // alert(SkillId);
            // $('#more_skills').slideToggle(1000);
                if (SkillId === "language") {
                    $('#more_skills').html('<center><p><b>Languages</b></p>'+
                        '<p> Html, CSS, JavaScript, Python, SQL, C, jQuery.</p></center>');
                    // $('#more_skills').slideToggle(1000).show(200);;
                } else if (SkillId === "framework") {
                    $('#more_skills').html('<center><p><b>Framework</b></p>'+
                        '<p>Bootstrap, Flask, Knockout.js (MVVM), jinja2</p></center>');
                } else if (SkillId === "programs") {
                    $('#more_skills').html('<center><p><b>Programs</b></p>'+
                        '<p> MPLAB X, MATLAB, PSpice, Multisim, MIT app inventor, 3D Solidworks.</p></center>');
                } else if (SkillId === "design") {
                    $('#more_skills').html('<center><p class="center"><b>Circuit Design</b></p>'+
                        'Linux, Git/GitHub, Arduino, PIC Microcontrollers.</p></center>');
                } else if (SkillId === "managment") {
                    $('#more_skills').html('<center><p class="center"><b>Project Managment</b></p></center>');
                } else if (SkillId === "web") {
                    $('#more_skills').html('<center><p class="center"><b>Web</b></p></center>');;
                } else if (SkillId === "security") {
                    $('#more_skills').html('<center><p class="center"><b>Computer Security</b></p>'+
                        '<p>AOuth, Password-salt.</p></center>');
                } else if (SkillId === "research") {
                    $('#more_skills').html('<center><p class="center"><b>Research</b></p></center>');
                } else{
                    $('#more_skills').html('');
                }
         });
    });

// (pop-up explanation)
$(function(){
    $('[data-toggle="tooltip"]').tooltip();
});