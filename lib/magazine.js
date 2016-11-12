/*
 * Magazine sample
 */

function addPage(page, book) {

    var id, pages = book.turn('pages');

    // Create a new element for this page
    var element = $('<div/>');

    // Add the page to the flipbook
    if (book.turn('addPage', element, page)) {

        // Add the initial HTML
        // It will contain a loader indicator and a gradient
        element.html('<div class="gradient"/><div class="loader"/>');

        // Load the page
        loadPage(page, element);
    }

}

function loadPage(page, pageElement) {

    // Create an image element

    var img = $('<img/>');

    img.mousedown(function(e) {
        e.preventDefault();
    });

    img.load(function() {

        // Add the image to the page after loaded
        $(this).appendTo(pageElement);

        // Remove the loader indicator
        pageElement.find('.loader').remove();
    });

    // Load the page

    img.attr("src", "http://server.h2k.com.br/estilodocorpo.com/site/2016/media/estatico/colecao/fit-together/catalogo/medium/" + (page + 1000) + ".jpg");

    loadRegions(page, pageElement);

}

// Zoom in / Zoom out

function zoomTo(event) {

    setTimeout(function() {
        if ($('.magazine-viewport').data().regionClicked) {
            $('.magazine-viewport').data().regionClicked = false;
        } else {
            if ($('.magazine-viewport').zoom('value') == 1) {
                $('.magazine-viewport').zoom('zoomIn', event);
            } else {
                $('.magazine-viewport').zoom('zoomOut');
            }
        }
    }, 10);

}



// Load regions

function loadRegions(page, element) {
    /*$.getJSON('pages/' + page + '-regions.json').done(function(data) {
        $.each(data, function(key, region) {
            addRegion(region, element);
        });
    });*/
}

// Add region

function addRegion(region, pageElement) {
    /*var reg = $('<div class="region ' + region['class'] + '"/>'),
            options = $('.magazine').turn('options'),
            pageWidth = options.width / 2,
            pageHeight = options.height;

        reg.css({
            top: Math.round(region.y / pageHeight * 100) + '%',
            left: Math.round(region.x / pageWidth * 100) + '%',
            width: Math.round(region.width / pageWidth * 100) + '%',
            height: Math.round(region.height / pageHeight * 100) + '%'
        }).attr('region-data', $.param(region.data || ''));

        reg.appendTo(pageElement);*/
}

// Process click on a region
function regionClick(event) {
    /*
    var region = $(event.target);

    if (region.hasClass('region')) {

        $('.magazine-viewport').data().regionClicked = true;

        setTimeout(function() {
            $('.magazine-viewport').data().regionClicked = false;
        }, 100);

        var regionType = $.trim(region.attr('class').replace('region', ''));

        return processRegion(region, regionType);
    }*/

}

// Process the data of every region
function processRegion(region, regionType) {
    /*
    var data = decodeParams(region.attr('region-data'));

    switch (regionType) {
        case 'link':
            window.open(data.url);
            break;
        case 'zoom':
            var regionOffset = region.offset(),
                viewportOffset = $('.magazine-viewport').offset(),
                pos = {
                    x: regionOffset.left - viewportOffset.left,
                    y: regionOffset.top - viewportOffset.top
                };

            $('.magazine-viewport').zoom('zoomIn', pos);
            break;
        case 'to-page':
            $('.magazine').turn('page', data.page);

            break;
    }*/

}

// Load large page

function loadLargePage(page, pageElement) {

    var img = $('<img/>');

    img.load(function() {
        var prevImg = pageElement.find('img');
        $(this).appendTo(pageElement);
        prevImg.remove();

    });

    // Loadnew page
    img.attr('src', "http://server.h2k.com.br/estilodocorpo.com/site/2016/media/estatico/colecao/fit-together/catalogo/full/" + (page + 1000) + ".jpg");
}

// Load small page
function loadSmallPage(page, pageElement) {

    var img = pageElement.find('img');

    img.off('load');
    // Loadnew page

    img.attr('src', "http://server.h2k.com.br/estilodocorpo.com/site/2016/media/estatico/colecao/fit-together/catalogo/medium/" + (page + 1000) + ".jpg");
}

// http://code.google.com/p/chromium/issues/detail?id=128488
function isChrome() {
    return navigator.userAgent.indexOf('Chrome') != -1;
}



// Number of views in a flipbook

function numberOfViews(book) {
    return book.turn('pages') / 2 + 1;
}

// Current view in a flipbook

function getViewNumber(book, page) {
    return parseInt((page || book.turn('page')) / 2 + 1, 10);
}


/*function setPreview(view) {

    var previewWidth = 112,
        previewHeight = 73,
        previewSrc = 'pages/preview.jpg',
        preview = $(_thumbPreview.children(':first')),
        numPages = (view == 1 || view == $('#slider').slider('option', 'max')) ? 1 : 2,
        width = (numPages == 1) ? previewWidth / 2 : previewWidth;

    _thumbPreview.
    addClass('no-transition').
    css({
        width: width + 15,
        height: previewHeight + 15,
        top: -previewHeight - 30,
        left: ($($('#slider').children(':first')).width() - width - 15) / 2
    });

    preview.css({
        width: width,
        height: previewHeight
    });

    if (preview.css('background-image') === '' ||
        preview.css('background-image') == 'none') {

        preview.css({
            backgroundImage: 'url(' + previewSrc + ')'
        });

        setTimeout(function() {
            _thumbPreview.removeClass('no-transition');
        }, 0);

    }

    preview.css({
        backgroundPosition: '0px -' + ((view - 1) * previewHeight) + 'px'
    });
}*/

// Width of the flipbook when zoomed in
function largeMagazineWidth() {
    return 2214;
}

// decode URL Parameters

function decodeParams(data) {

    var parts = data.split('&'),
        d, obj = {};

    for (var i = 0; i < parts.length; i++) {
        d = parts[i].split('=');
        obj[decodeURIComponent(d[0])] = decodeURIComponent(d[1]);
    }

    return obj;
}
