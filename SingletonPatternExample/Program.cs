using System;

class Program
{
    static void Main(string[] args)
    {
        Logger logger1 = Logger.Instance;
        logger1.Log("First log message.");

        Logger logger2 = Logger.Instance;
        logger2.Log("Second log message.");

        if (ReferenceEquals(logger1, logger2))
        {
            Console.WriteLine("Both logger instances are the same (singleton works).");
        }
        else
        {
            Console.WriteLine("Logger instances are different (singleton failed).");
        }
    }
}
