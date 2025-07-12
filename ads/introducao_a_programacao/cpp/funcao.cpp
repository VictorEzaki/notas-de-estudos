#include <iostream>
#include "media.h"

using namespace std;

int main() {
	system("chcp 65001");
	float nota1, nota2, nota3, result;
	
	cout << "Informe a nota: ";
	cin >> nota1;
	cout << "Informe a nota: ";
	cin >> nota2;
	cout << "Informe a nota: ";
	cin >> nota3;
	
	result = calcularMedia(nota1, nota2, nota3);
	
	cout << endl << "Resultado: " << result;
	
	return 0;
}