/* var error: String;
private var url;
private var connection :boolean = true;
var scrollPosition : Vector2;
private var lbl_web : String;
var www : WWW = new WWW (url);
var notificationTexture : Texture;


function Start()
{
    url= "http://www.cems.uwe.ac.uk/~le2-nunez/Songkick/O2.html";
    www = new WWW(url);
    yield www;
    lbl_web = www.text;
    if (www.error != null)
        Debug.Log(www.error);
    connection = true; 
    if(www.error == null)
        connection = false;
 
}


function OnGUI () 

{
    if(connection == true)
    {
        GUI.DrawTexture(Rect(Screen.width*0.1,Screen.height*0.92,25,25), notificationTexture);
        GUI.Label (Rect ((Screen.width *0.1+50), Screen.height *0.92, Screen.width *0.8, Screen.height *0.8),"Please connect to the internet");
        GUI.color = Color.blue;
    }

    if(connection == false)
    {
        scrollPosition = GUI.BeginScrollView (Rect ((Screen.width*0.1),(Screen.height*0.1),(Screen.width*0.8),(Screen.height*0.8)),
        scrollPosition, Rect (0, 0,(Screen.width*2), (Screen.height*2)));
       GUILayout.Label (lbl_web);
       GUI.EndScrollView ();
  }
}
*/