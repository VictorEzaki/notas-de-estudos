#include <iostream>
#include <locale.h>
using namespace std;

main() {
	
	setlocale(LC_ALL, "portuguese");
	
	float ladoA, ladoB, ladoC, altura;
	
	cout << "Descobrindo se � tri�ngulo ou n�o\n";
	cout << "--------------------------------------\n\n";
	
	cout << "Digite o primeiro lado: ";
	cin >> ladoA;
	cout << "Digite o segundo lado: ";
	cin >> ladoB;
	cout << "Digite o terceiro lado: ";
	cin >> ladoC;
	cout << "--------------------------------------\n\n";
	
	altura = (ladoA + ladoB + ladoC) / 2;
	
	if ((ladoA + ladoB) > ladoC && 
		(ladoA + ladoC) > ladoB && 
		(ladoB + ladoC) > ladoA) {
			cout << "Os lado passados formam um tri�ngulo, e possui uma �rea de: " << (ladoA * altura) / 2;
		} else {
			cout << "Os lados passados n�o formam um tri�ngulo.";
		}
	
}
