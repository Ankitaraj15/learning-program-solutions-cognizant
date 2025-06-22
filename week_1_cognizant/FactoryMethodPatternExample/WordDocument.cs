using System;

public class WordDocument : IDocument
{
    public void Open()
    {
        Console.WriteLine("Opening Word document...");
    }
}