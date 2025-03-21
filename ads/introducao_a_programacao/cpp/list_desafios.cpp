#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

void setColor(const string& colorCode) {
	cout << "\033[" << colorCode << "m";
}

main() {
	system("chcp 65001");
	cout << fixed << setprecision(2);

	int chose;
	while (chose != 10) {
		cout << "\n\n\n\tLista de Desagios";
		cout << "\n------------------------------------------\n";
		cout << "[1] Quadrado\n";
		cout << "[2] Quadrado colorido\n";
		cout << "[3] Metade pirâmide\n";
		cout << "[4] Pirâmide\n";
		cout << "[10] Sair\n";
		cout << "\n------------------------------------------\n";
		cout << "\nEscolha uma das opções: ";
		cin >> chose;

		switch (chose) {
			case 1: {
				system("cls");

				int size = 10;

				cout << "Digite o tamanho do quadrado: ";
				cin >> size;
				cout << endl;

				for(int i = 0; i < size; i++) {
					for(int j = 0; j < size; j++) {
						cout << "* ";
					}
					cout << endl;
				}

				break;
			}

			case 2: {
				system("cls");

				int size = 10;

				cout << "Digite o tamanho do quadrado: ";
				cin >> size;
				cout << endl;

				for(int i = 0; i < size; i++) {
					for(int j = 0; j < size; j++) {
						setColor("3" + to_string(i + 1));
						cout << "* ";
					}
					cout << endl;
				}

				setColor("0");
				break;
			}

			case 3: {
				system("cls");

				int size;
				
				cout << "Digite o tamanho da metade: ";
				cin >> size;

				for(int i = 0; i < size; i++){
					for(int j = 0; j < i + 1; j++) {
						cout << "*";
					}
					cout << "\n";
				}

				break;
			}
			
			case 4: {
				system("cls");
				
				int size;
				
				cout << "Digite o tamanho do triângulo: ";
				cin >> size;
				
				for(int i = 0; i < size; i++) {
					
					for(int k = i; k < size; k++) {
						cout << " ";
					}
					
					for(int j = 1; j < i * 2; j++) {
						cout << "*";
					}
					
					cout << "\n";
				}
				
				break;
			}

			case 10: {
				cout << "Saindo...";
				break;
			}
		}
	}
}