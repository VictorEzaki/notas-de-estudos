#include <iostream>
#include <locale.h>
using namespace std;

main() {
	
	setlocale(LC_ALL, "portuguese");
	
	int num;
	
	cout << "Digite um n�mero para saber se ele � par ou �mpar: ";
	cin >> num;
	
	if (num % 2 == 0) {
		cout << "O n�mero esolhido � par.";
	} else {
		cout << "O n�mero escolhido � �mpar.";
	}
	
}
