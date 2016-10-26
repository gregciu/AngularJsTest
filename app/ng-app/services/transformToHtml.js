'use strict';

greetingMainApp.factory('transformToHtml', function () {

    return {
        transformJqueryToHtml: function (fileNumber) {
            return $.getJSON( "data/" + fileNumber + ".json", function( data ) {
                    var items = [];
                    $.each( data, function( key, val ) {
                        items.push( "<li id='" + key + "'>" + val + "</li>" );
                    });

                    $( "<ul/>", {
                        "class": "my-new-list",
                        html: items.join( "" )
                    }).appendTo( "body" );

                    });
        }
    }
});