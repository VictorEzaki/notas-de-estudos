#include <iostream>
#include <locale.h>
using namespace std;

main() {
	
	setlocale(LC_ALL, "portuguese");
	
	float valorHora, horasTrabalhadas;
	
	cout << "Digite o valor da hora do trabalhador: ";
	cin >> valorHora;
	cout <<"Digite o n�mero de horas trabalhadas: ";
	cin >> horasTrabalhadas;
	
	cout << "O trabalhador tem R$" << (valorHora * horasTrabalhadas) << " � receber.";
	
}
