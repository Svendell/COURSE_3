namespace Laba_07_CsharpCalc_UnitTests
{
    [TestFixture]
    public class CalculatorTests
    {
        [TestCase(5, 7, 12)]
        [TestCase(1, 2.5, 3.5)]
        [TestCase(100, -1, 99)]
        [TestCase(10, -100, -90)]
        public void Add_Numbers_ReturnsSum(double a, double b, double expected)
        {
            // Arrange
            var calc = new Calculator();

            // Act
            var actual = calc.Add(a, b);

            // Assert
            Assert.AreEqual(expected, actual);
        }
        [TestCase(8, 5, 3)]
        [TestCase(9, 12, -3)]
        [TestCase(25, 20, 5)]
        [TestCase(10, 2, 8)]
        public void Subtract_Numbers_ReturnsDifference(double a, double b, double expected)
        {
            var calc = new Calculator();

            double actual = calc.Subtract(a, b);

            Assert.AreEqual(expected, actual);
        }
        [TestCase(2, 5, 10)]
        [TestCase(5, 3, 15)]
        [TestCase(12, 10, 120)]
        [TestCase(10, 3, 30)]
        public void Multiply_Numbers_ReturnsProduct(double a, double b, double expected)
        {
            var calc = new Calculator();

            var actual = calc.Multiply(a, b);

            Assert.AreEqual(expected, actual);
        }
        [TestCase(6, 2, 3)]
        [TestCase(133, 1, 133)]
        [TestCase(35, 5, 7)]
        [TestCase(220, 2, 110)]
        public void Divide_Numbers_ReturnsQuotient(double a, double b, double expected)
        {
            var calc = new Calculator();

            double actual = calc.Divide(a, b);

            Assert.AreEqual(expected, actual);
        }
        [TestCase(4, 2)]
        [TestCase(9, 3)]
        [TestCase(25, 5)]
        [TestCase(16, 4)]
        public void SquareRoot_Number_ReturnsResult(double d, double expected)
        {
            var calc = new Calculator();

            double actual = calc.SquareRoot(d);

            Assert.AreEqual(expected, actual);
        }
    }
}