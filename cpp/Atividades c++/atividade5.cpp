#include <iostream>
#include <locale.h>
using namespace std;

main () {
	
	setlocale (LC_ALL, "portuguese");
	
	float milhas;
	
	cout << "CONVERSOR DE MILHAS PARA QUIL�METROS\n";
	cout << "-----------------------------------------\n\n";
	cout << "Digite a quantidade de milhas que deseja converter: ";
	cin >> milhas;
	
	cout << milhas << " milhas em KM �: " << (milhas * 1.60934) << "KM.";
	
}
