#include <iostream>
#include <locale.h>
using namespace std;

main() {
	
	setlocale(LC_ALL, "portuguese");
	
	string aluno;
	int max = 3, arrayPeso[max] = {2, 3, 5};
	float arrayNotas[max], totalNotas = 0;
	
	cout << "Digite o nome do aluno: ";
	cin >> aluno;
	
	for (int i = 0; i < 3; i++) {
		
		system ("cls");
		cout << "Digite a " << i + 1 << "� nota de " << aluno << ": ";
		cin >> arrayNotas[i];
		totalNotas += arrayNotas[i] * arrayPeso[i];
		
	}
	
	system ("cls");
	cout << "A m�dia ponderada de " << aluno << " foi de: " << totalNotas / 10;
	
}
