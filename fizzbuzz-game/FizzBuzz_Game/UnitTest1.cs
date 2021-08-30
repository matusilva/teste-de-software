using System;
using NUnit.Framework;

namespace FizzBuzz_Game
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Test1()
        {
            FizzBuzz fb = new FizzBuzz();
            Assert.AreEqual("fizz", fb.Answer(3));
            Assert.AreEqual("buzz", fb.Answer(10));
            Assert.AreEqual("fizzbuzz", fb.Answer(15));
            Assert.Pass();
        }
    }
}