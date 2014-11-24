$('body').scrollspy({ target: '#side-navbar' });

$(document).ready(function(){
    $(".side-navbar").affix({
        offset: { 
            top: 140,
        }
    });
});

$('body').scrollspy({
    target: '.side-navbar',
    offset: 40
});
