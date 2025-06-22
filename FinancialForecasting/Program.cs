using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("📈 Financial Forecasting Tool");

        double presentValue = 10000;  // Starting amount
        double growthRate = 0.05;     // 5% growth rate
        int years = 10;               // Forecast for 10 years

        Console.WriteLine($"\nInitial Amount: ₹{presentValue}");
        Console.WriteLine($"Growth Rate: {growthRate * 100}%");
        Console.WriteLine($"Years: {years}");

        // Recursive calculation
        double recursiveResult = Forecast.PredictFutureValue(presentValue, growthRate, years);
        Console.WriteLine($"\n📌 Recursive Forecasted Value: ₹{Math.Round(recursiveResult, 2)}");

        // Iterative (optimized) calculation
        double iterativeResult = Forecast.PredictFutureValueIterative(presentValue, growthRate, years);
        Console.WriteLine($"✅ Iterative Forecasted Value: ₹{Math.Round(iterativeResult, 2)}");
    }
}
