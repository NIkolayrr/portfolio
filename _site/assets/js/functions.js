$(document).ready(function () {
    smoothScroll(300);
    workBelt();
    workLoad();
});

function smoothScroll(duration) {
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        let target = $($(this).attr('href'));
        $('html,body').animate({
            scrollTop: target.offset().top
        }, duration);
    });
}

function workBelt() {
    let $workBelt = $('.work-belt');

    $('.thumbs').on('click', function () {
        $workBelt.css('left', '-100%');
        $('.work-container').show();
    });
    $('.work-return').on('click', function () {
        $workBelt.css('left', '0%');
        $('.work-container').hide(800);
    });
}

function workLoad() {
    $.ajaxSetup({cache: false});
    $('.thumbs').on('click', function () {
        let $this = $(this),
            $newTitle = $this.find('strong').text(),
            $newFolder = $this.data('folder'),
            spinner = '<div class="loader">Loading...</div>',
            newHtml = 'work/' + $newFolder;

        $('.project-load').html(spinner).load(newHtml);
        $('.project-title').text($newTitle);
    });
}