#include <iostream>
#include <locale.h>
using namespace std;

main() {
	
	setlocale(LC_ALL, "portuguese");
	
	int num1, num2, num3;
	
	cout << "Digite o primeiro n�mero: ";
	cin >> num1;
	cout << "Digite o segundo n�mero: ";
	cin >> num2;
	cout << "Digite o terceiro n�mero: ";
	cin >> num3;
	
	if (num1 < num2 && num1 < num3) {
		cout << "O primeiro n�mero digitado � o menor: " << num1;
	} else if (num2 < num1 && num2 < num3) {
		cout << "O segundo n�mero digitado � o menor: " << num2;
	} else {
		cout << "O terceiro n�mero digitado � o menor: " << num3;
	}
	
}
