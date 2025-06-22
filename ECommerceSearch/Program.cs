using System;
using System.Linq;

class Program
{
    static void Main()
    {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shirt", "Clothing"),
            new Product(3, "Phone", "Electronics"),
            new Product(4, "Table", "Furniture"),
            new Product(5, "Shoes", "Footwear")
        };

        Console.WriteLine("🔍 Linear Search for 'Phone':");
        var linearResult = SearchAlgorithms.LinearSearch(products, "Phone");
        Console.WriteLine(linearResult != null ? $"Found: {linearResult}" : "Not Found");

        Console.WriteLine("\n📊 Binary Search for 'Phone':");
        var sortedProducts = products.OrderBy(p => p.ProductName).ToArray();
        var binaryResult = SearchAlgorithms.BinarySearch(sortedProducts, "Phone");
        Console.WriteLine(binaryResult != null ? $"Found: {binaryResult}" : "Not Found");
    }
}
