#include <iostream>
#include <locale.h>
using namespace std;

main () {
	
	setlocale(LC_ALL, "portuguese");
	
	float num1, num2;
	
	cout << "Digite um n�mero real (usando .): ";
	cin >> num1;
	cout << "Digite outro n�mero real (usando .): ";
	cin >> num2;
	
	cout << "O resultado da soma entre " << num1 << " + " << num2 << " � = " << (num1 + num2);
	
	
	
	
	
	
}
