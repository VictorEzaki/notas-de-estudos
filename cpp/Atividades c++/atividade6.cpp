#include <iostream>
#include <locale.h>
using namespace std;

main() {
	
	setlocale(LC_ALL, "portuguese");
	
	float tempo;
	
	cout << "Qual o tempo de dura��o do evento em segundos? ";
	cin >> tempo;
	
	cout << "\n\n-------------------------------------------\n\n";
	cout << "Dura��o do evento em horas: " << ((tempo / 60) / 60);
	cout << "\nDura��o do evento em minutos: " << (tempo / 60);
	cout << "\nDura��o do evento em segundos: " << tempo;
	
}
