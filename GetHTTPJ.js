var url = "//api.songkick.com/api/3.0/venues/360426/calendar.json?apikey=HbxxwGdA8uTGvpQK&jsoncallback=?";
var www : WWW = new WWW(url);

// wait for request to complete
yield www;
 
// and check for errors
if (www.error == null)
{
    Debug.Log("Error");
    // request completed!
} else {
    // something wrong!
    Debug.Log("WWW Error: "+ www.error);
}