#include <iostream>
#include <locale.h>
using namespace std;

main () {
	
	setlocale(LC_ALL, "portuguese");
	
	float base, altura;
	
	cout << "CALCULANDO A �REA DE UM TRI�NGULO (em metros)";
	cout << "\n--------------------------------------\n\n";
	
	cout << "Digite o valor da base do tri�ngulo: ";
	cin >> base;
	cout << "Digite o valor da altura do tri�ngulo: ";
	cin >> altura;
	
	cout << "A �rea total do tri�ngulo � de " << (base * altura) / 2 << " m.";
	
}
