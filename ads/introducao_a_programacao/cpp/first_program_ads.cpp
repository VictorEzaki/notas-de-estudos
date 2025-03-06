#include <iostream>
#include <iomanip>
using namespace std;

float nota1, nota2, nota3, media;
main() {
	system("chcp 65001");
	cout << fixed << setprecision(2);
	
	cout << "\n\nPrograma para calcular a média";
	cout << "\n-------------------------------------";
	
	cout << "\nInforme a primeira nota: ";
	cin >> nota1;
	cout << "\nInforme a segunda nota: ";
	cin >> nota2;
	cout << "\nInforme a terceira nota: ";
	cin >> nota3;
	
	cout << "\n-------------------------------------";
	media = (nota1 + nota2 + nota3) / 3;
	cout << "\nSua média é: " << media;
}