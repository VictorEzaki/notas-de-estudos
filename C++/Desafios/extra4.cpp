#include <iostream>
#include <locale.h>
using namespace std;

main () {
	
	setlocale(LC_ALL, "portuguese");
	
	float base, altura;
	
	cout << "CALCULANDO A BASE DE UM RET�NGULO (em metros)\n";
	cout << "-------------------------------------\n\n";
	
	cout << "Digite o valor da base do ret�ngulo: ";
	cin >> base;
	cout << "Digite o valor da altura do tri�ngulo: ";
	cin >> altura;
	
	cout << "A �rea total desse ret�ngulo � de " << base * altura << " m.";
	
}
