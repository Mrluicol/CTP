using System.Collections;
using UnityEngine;
using UnityEngine.Experimental;
using UnityEngine.Networking;

public class rest : MonoBehaviour
{
    void Start()
    {
        Coroutine routine = StartCoroutine(TestNewRoutineGivesException());
    }

    IEnumerator TestNewRoutineGivesException()
    {
        UnityWebRequest www = UnityWebRequest.Get("http://www.cems.uwe.ac.uk/~le2-nunez/Songkick/");
        www.downloadHandler = new DownloadHandlerBuffer();
        yield return www.Send();
        while (!www.downloadHandler.isDone)
            yield return new WaitForEndOfFrame();

        if (www.isError)
        {
            Debug.Log(www.error);
        }
        else
        {
            string results = www.downloadHandler.text;
            string result = null;
            Display(result);
        }

        yield break;
    }

    void Display(string result)
    {
        Debug.Log("Successfully got the result: " + result);
    }
}