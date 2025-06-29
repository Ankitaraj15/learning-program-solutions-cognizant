using NUnit.Framework;
using CalcLibrary;          // namespace from MathLibrary.cs

namespace CalcTests
{
    [TestFixture]                          // ➊ identifies this as a test class
    public class CalculatorTests
    {
        private SimpleCalculator _calc;    // SimpleCalculator is the real class

        [SetUp]                            // ➋ runs before each test
        public void SetUp()
        {
            _calc = new SimpleCalculator();
        }

        [TearDown]                         // ➌ runs after each test
        public void TearDown()
        {
            _calc = null;
        }

        // ➍ One method, exercised with three input sets
        [TestCase(2, 3, 5)]
        [TestCase(-4, -6, -10)]
        [TestCase(0, 0, 0)]
        public void Addition_ReturnsExpected(double a, double b, double expected)
        {
            var actual = _calc.Addition(a, b);   // call the library code
            Assert.That(actual, Is.EqualTo(expected));
        }
    }
}