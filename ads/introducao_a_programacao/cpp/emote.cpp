#include <iostream>
using namespace std;

int main() {
	system("chcp 65001");
	cout<<"\n\n\n\n\n\n\n";
	// Parte do telhado
	for (int i = 1; i <= 11; i++) {
		cout << "\t\t\t\t\t";
		// Espaços em branco à esquerda
		for (int j = 11; j > i; j--) {
			cout << "  ";
		}
		// Telhado com emojis
		for (int k = 0; k < (2 * i - 1); k++) {
			cout << "🧱";
		}
		cout << endl;
	}

	// Parte do corpo da casa
	for (int i = 0; i < 6; i++) {
		cout << "  \t\t\t\t\t";
		cout << "  ";
		for (int j = 0; j < 19; j++) {
			if ((i == 2 || i == 5) && j >= 3 && j <= 5) {
				cout << "🪟"; // janelas
			} else if ((i == 3 || i == 4) && j >= 2 && j <= 6) {
				cout << "🪟"; // janelas
			} else if ((i == 3 || i == 4) && j >= 12 && j <= 16) {
				cout << "🪟"; // janelas
			} else if ((i == 2 || i == 5) && j >= 13 && j <= 15) {
				cout << "🪟"; // janelas
			} else {
				cout << "🏠"; // parede
			}
		}
		for (int j = 6; j > i + 1; j--) {
			cout << "  ";
		}
		// Telhado com emojis
		for (int k = 0; k < (2 * i - 1); k++) {
			cout << "🧱";
		}
		cout << endl;
	}
	for (int i = 0; i < 6; i++) {
		cout << "  \t\t\t\t\t";
		cout << "  ";
		for (int j = 0; j < 28; j++) {
			if (i >= 2 && j >= 8 && j <= 10) {
				cout << "🪟"; // janelas
			} else if(i >= 1 && j >= 20 && j <= 26) {
				cout << "🟫";
			} else {
				cout << "🏠"; // parede
			}
		}
		cout << endl;
	}
	cout<<"\n\n\n\n\n\n\n";
	return 0;
}