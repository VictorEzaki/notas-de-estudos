#include <iostream>
#include <locale.h>
using namespace std;

main() {
	
	setlocale(LC_ALL, "portuguese");
	
	int num1, num2;
	
	cout << "Digite um n�mero: ";
	cin >> num1;
	cout << "Digite outro n�mero: ";
	cin >> num2;
	
	cout << "-------------------------------\n";
	
	if (num1 > num2) {
		cout << num1 << " � maior que " << num2;
	} else {
		cout << num2 << " � maior que " << num1;
	}
	
}
