//biblioteca atv recursive function
#include<iostream> // usar o cout e o cin
using namespace std;// para usar o cout e o cin

//funçao 1 fibonnaci series
int fibonacci(int x) {
   if (x == 0 || x == 1) {
      return x;
   } else {
      return (fibonacci(x - 1) + fibonacci(x - 2));
   }
}
//funçao 2 number power
int calculate(int base, int power) {
    if (power != 0)
        return (base * calculate(base, power - 1));
    else
        return 1;
}
//funçao 3 reverse a number
int reverseNumber(int n, int temp = 0) {
   if (n > 0) {
      temp = temp * 10 + n % 10;
      return reverseNumber(n / 10, temp);
   } else {
      return temp;
	  }
}
//funçao 4 cheking if the number is a prime number
bool isPrime(int n, int i = 2) {
	if (n <= 2)
		return (n == 2) ? true : false;
	if (n % i == 0)
		return false;
	if (i * i > n)
		return true;

	return isPrime(n, i + 1);
}