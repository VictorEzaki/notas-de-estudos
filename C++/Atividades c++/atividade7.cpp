#include <iostream>
#include <locale.h>
using namespace std;

main () {
	
	setlocale (LC_ALL, "portuguese");
	
	int distancia;
	
	cout << "Convers�o de KM para metros e cent�metros: ";
	cin >> distancia;
	
	cout << "\n--------------------------------------\n\n";
	cout << distancia << " em metros �: " << (distancia * 1000) << "\n";
	cout << distancia << " em cent�metros �: " << (distancia * 1000) * 100 << "\n";
	
}
