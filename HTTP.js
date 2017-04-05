/*
    var error: String;
    private var url;//Link to your online hosted document
    private var connection :boolean = true;//Is there an available connection?
    // The variable to control where the scrollview 'looks' into its child elements.
    var scrollPosition : Vector2;
    // The string to display inside the scrollview. 2 buttons below add &amp; clear this string.
    private var lbl_web : String;// This is our placeholder for the text from the document
    var www : WWW = new WWW (url);// Creating a variable which is an URL
    var notificationTexture : Texture;
    //#######

function Start()
{
    url= "//api.songkick.com/api/3.0/venues/360426/calendar.json?apikey=HbxxwGdA8uTGvpQK&jsoncallback=?";; //Paste your URL here
    www = new WWW(url);//Let's add the properties of your URL to the variable WWW
    yield www;
    lbl_web = www.text;
    if (www.error != null)//If there was an error during download...
        Debug.Log(www.error);//Print error
    connection = true; //Set connection to be false
    if(www.error == null)//Otherwise...Set connection to false
        connection = false;
 
}
 
function OnGUI () {
    if(connection == false)// If there is no Internet connection
    {
        GUI.DrawTexture(Rect(Screen.width*0.1,Screen.height*0.92,25,25), notificationTexture);
        GUI.Label (Rect ((Screen.width *0.1+50), Screen.height *0.92, Screen.width *0.8, Screen.height *0.8), "Please connect to the internet");
    }
    if(connection == true)// Connection established
    {
       scrollPosition = GUI.BeginScrollView (Rect ((Screen.width*0.1),(Screen.height*0.1),(Screen.width*0.8),(Screen.height*0.8)),
       scrollPosition, Rect (0, 0,(Screen.width*2), (Screen.height*2)));
       GUILayout.Label (lbl_web);
       GUI.EndScrollView ();
    }
}
*/