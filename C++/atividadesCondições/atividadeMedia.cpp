#include <iostream>
#include <locale.h>
using namespace std;

main() {
	
	setlocale(LC_ALL, "portuguese");
	
	float nota1, nota2, nota3, media;
	
	cout << "Calculando a m�dia do aluno\n";
	cout << "----------------------------------\nn";
	
	cout << "Digite a primeira nota: ";
	cin >> nota1;
	cout << "Digite a segunda nota: ";
	cin >> nota2;
	cout << "Digite a terceira nota: ";
	cin >> nota3;
	
	media = (nota1 + nota2 + nota3) / 3;
	
	if (media < 5) {
		cout << "Sua m�dia � " << media << "\nSitua��o: Reprovado.";
	} else if (media < 7) {
		cout << "Sua m�dia � " << media << "\nSitua��o: Recupera��o.";
	} else {
		cout << "Sua m�dia � " << media << "\nSitua��o: Aprovado.";
	}
	
}
