var app = app || {};

app.shows = (function($,formatGoogleCalendar){
    "use strict";

    var _isInitialized = false,
        init = function(){
            var defer = $.Deferred();
            if(!_isInitialized){        
                _isInitialized = true;
                
                formatGoogleCalendar.init({
                    calendarUrl: 'https://www.googleapis.com/calendar/v3/calendars/g27.net_9ht2e4uhfh602mnen6psa6mun0@group.calendar.google.com/events?key=AIzaSyBgnhLwWs3CJfpYpBfoPsUGyoUsYzmLjEk&maxResults=10&orderBy=startTime&singleEvents=true&timeMin=' + (new Date()).toISOString(),
                    past: false,
                    upcoming: true,
                    sameDayTimes: false,
                    pastTopN: 0,
                    upcomingTopN: -1,
                    itemsTagName: 'div',
                    upcomingSelector: '.events-upcoming',
                    //pastSelector: '#events-past',
                    upcomingHeading: '<h2>Live Shows</h2>',
                    //pastHeading: '<h2>Past events</h2>',
                    format: ['*date*', '*summary*', '*description*', '*location*']
                }).done(function(){
                    defer.resolve();
                });
                
            }
            else{
                defer.resolve();
            }
            return defer.promise();
        };

    return{
        init: init
    };
}($,formatGoogleCalendar));