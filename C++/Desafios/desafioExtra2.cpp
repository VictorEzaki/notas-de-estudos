#include <iostream>
#include <locale.h>
using namespace std;

main() {
	
	setlocale(LC_ALL, "portuguese");
	
	int num;
	
	cout << "Digite um n�mero para saber se ele � positivo ou negativo: ";
	cin >> num;
	
	if (num >= 0) {
		cout << "O n�mero esolhido � positivo.";
	} else {
		cout << "O n�mero esolhido � negativo.";
	}
	
}
