#include <iostream>
#include <locale.h>
using namespace std;

main() {
	
	setlocale(LC_ALL, "portuguese");
	
	float num1, num2;
	int operador;
	
	cout << "CALCULADORA SIMPLES\n";
	cout << "--------------------------------------------\n\n";
	
	cout << "Digite um n�mero: ";
	cin >> num1;
	cout << "Digite outro n�mero: ";
	cin >> num2;
	
	cout << "--------------------------------------------\n\n";
	cout << "Qual opera��o matem�tica deseja realizar?\n" <<
			"1)Para adi��o.\n" <<
			"2)Para subtra��o.\n" <<
			"3)Para divis�o.\n" <<
			"4)Para multiplica��o.";
	cin >> operador;
	
	cout << "--------------------------------------------\n\n";
	
	if (operador == 1) {
		cout << "O resultado da soma �: " << num1 + num2;
	} else if (operador == 2) {
		cout << "O resultado da subtra��o �: " << num1 - num2;
	} else if (operador == 3) {
		cout << "O resultado da divis�o �: " << num1 / num2;
	} else if (operador == 4) {
		cout << "O resultado da divis�o �: " << num1 * num2;
	} else {
		cout << "Op��o inv�lida!";
	}
	
}
