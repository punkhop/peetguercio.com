// this function is called from index.html script tag 'https://apis.google.com/js/client.js?onload=calendar_go'
function calendar_go() {
  gapi.client.setApiKey("AIzaSyBtH4ZNPsAfNFCFeznfp98TfajpPIx7gEM");
  gapi.client.load('calendar', 'v3', function() {
    var calendarId = 'g27.net_9ht2e4uhfh602mnen6psa6mun0@group.calendar.google.com';
    // "max-results=10&orderby=starttime&sortorder=ascending&futureevents=true&singleevents=true";
    var request = gapi.client.calendar.events.list({
      calendarId: calendarId,
      maxResults: 10,
      orderBy: 'startTime',
      singleEvents: true,
      timeMin: (new Date()).toISOString(),
    });

    request.execute(function(res) {
      handleMyFeed(res.result.items);
    });
  });
}

function zeroPad(n,length){
  var s=n+"",needed=length-s.length;
  if (needed>0) s=(Math.pow(10,needed)+"").slice(1)+s;
  return s;
}

function handleMyFeed(items) {
  items.forEach(function(entry){
    // format with date and title
    var date = new Date(entry.start.dateTime);
    var time = date.toLocaleTimeString().replace(/:\d+:\d+ /, '').toLowerCase();
    var title = entry.summary;
    var link = entry.htmlLink;
    var formatted = zeroPad((date.getMonth()+1),2) + '/' + zeroPad(date.getDate(),2) +  ' &nbsp;-&nbsp; ' + time +  '&nbsp; - &nbsp; <a target=_blank href="' + link + '">' + title + '</a>';

    // add to UI.
    $('#shows').append('<h4>' + formatted + '</h4>')
  });
  }

function handleError(err) {
  console.log('calendar error: ', err);
}
