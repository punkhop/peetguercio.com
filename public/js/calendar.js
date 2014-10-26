google.setOnLoadCallback(getMyFeed);
var myService;
var feedUrl = "https://www.google.com/calendar/feeds/g27.net_9ht2e4uhfh602mnen6psa6mun0%40group.calendar.google.com/public/basic";

function setupMyService() {
  myService = new google.gdata.calendar.CalendarService('exampleCo-exampleApp-1');
}

function getMyFeed() {
  setupMyService();
  myService.getEventsFeed(feedUrl, handleMyFeed, handleError);
}

function handleMyFeed(result) {
  var entries = result.feed.entry.slice(0,10);
  for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      var title = entry.getTitle().getText();
      console.log(title);
    }
  }

function handleError(err) {
  console.log('calendar error: ', err);
}
