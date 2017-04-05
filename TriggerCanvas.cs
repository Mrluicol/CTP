using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Experimental;
using UnityEngine.Networking;

public class TriggerCanvas : MonoBehaviour
{
    public Canvas Canvas2;
    public GameObject Banner2;
   GameObject mycharacter;

   // private TriggerCanvas2 jsScript;

    public bool is_entered;

    void start()
    {
        mycharacter = GameObject.FindWithTag("Player");
        is_entered = false;
    }

    public void OnTriggerEnter(Collider col)
    {


        if (col.tag == "Player")
        {
            Canvas2.GetComponent<Canvas>().enabled = true;
           Banner2.SetActive(true);
            Debug.Log("Player hitting building");

           // jsScript = this.GetComponent<TriggerCanvas2>();
            
        }

        if (is_entered == false)
        {
            Application.OpenURL("http://www.cems.uwe.ac.uk/~le2-nunez/Songkick/index.html");
            is_entered = true;
        }



    }
     void OnTriggerExit()
     {
        is_entered = false;
        Canvas2.GetComponent<Canvas>().enabled = false;
    }
    
}