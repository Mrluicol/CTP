using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class O2 : MonoBehaviour
{

    // public void URLcall()
    // {



    //}

    //---------------------------Sets Direction1 cube as a public variable

    public Canvas Canvas2;
    //public GameObject Banner2;

    GameObject mycharacter;


    public bool is_entered;

    void start()
    {
        mycharacter = GameObject.FindWithTag("Player");

        is_entered = false;

    }

    //---------------------------Unhides the direction cube when the first person collides with the trigger
    public void OnTriggerEnter(Collider col)
    {


        if (col.tag == "Player")
        {
            Canvas2.GetComponent<Canvas>().enabled = true;
            //Banner2.SetActive(true);
            Debug.Log("Player hitting building");
        }

        if (is_entered == false)
        {
            Application.OpenURL("http://www.cems.uwe.ac.uk/~le2-nunez/Songkick/O2.html");
            is_entered = true;
        }

    }
    void OnTriggerExit()
    {
        is_entered = false;
        Canvas2.GetComponent<Canvas>().enabled = false;
    }

}