#include <iostream>
#include <locale.h>
using namespace std;

main () {
	
	setlocale(LC_ALL, "portuguese");
	
	float raio, diametro, circunferencia, area;
	float pi = 3.14;
	
	cout << "Digite o valor do raio do c�rculo: ";
	cin >> raio;
	
	diametro = raio * 2;
	area = pi * (raio * raio);
	circunferencia = 2 * pi * raio;
	
	cout << "O di�metro do c�rculo � " << diametro;
	cout << "\nA circunfer�ncia do c�rculo � " << circunferencia;
	cout << "\nA �rea do c�rculo � " << area;
	
}
