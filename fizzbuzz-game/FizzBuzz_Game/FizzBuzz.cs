using System;

namespace FizzBuzz_Game
{
    public class FizzBuzz : IFizzBuzz
    {
        public string Answer(int i)
        {
            // numero divisel por 3 fizz
            if (i % 3 == 0 && i % 5 > 0)
            {
                return "fizz";
            }
            // numero divisel por 5 buzz
            if (i % 5 == 0 && i % 3 > 0)
            {
                return "buzz";
            }
            // ambos fizzbuzz
            if (i % 3 == 0 && i % 5 == 0)
            {
                return "fizzbuzz";
            }
            return "";
        }
    }
}