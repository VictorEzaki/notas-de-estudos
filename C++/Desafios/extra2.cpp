#include <iostream>
#include <locale.h>
using namespace std;

main() {
	
	setlocale(LC_ALL, "portuguese");
	
	int num;
	
	cout << "Digite um n�mero: ";
	cin >> num;
	
	cout << "O dobro do n�mero escolhido � " << num * 2;
	
}
