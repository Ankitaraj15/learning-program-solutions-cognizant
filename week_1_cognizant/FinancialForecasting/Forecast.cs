using System;

public static class Forecast
{
    // Recursive method to calculate future value
    public static double PredictFutureValue(double presentValue, double growthRate, int years)
    {
        if (years == 0)
            return presentValue;

        return (1 + growthRate) * PredictFutureValue(presentValue, growthRate, years - 1);
    }

    // Optimized method using iteration to prevent recursion overhead
    public static double PredictFutureValueIterative(double presentValue, double growthRate, int years)
    {
        double result = presentValue;
        for (int i = 0; i < years; i++)
        {
            result *= (1 + growthRate);
        }
        return result;
    }
}
