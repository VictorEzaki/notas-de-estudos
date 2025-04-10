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

	int size = 0;

	int chose;
	do {
		cout << endl;
		cout << "+-----------------------------------------+\n";
		cout << "|           - Lista de Desafios -         |\n";
		cout << "|-----------------------------------------|\n";
		cout << "| [1] Quadrado                            |\n";
		cout << "| [2] Quadrado colorido                   |\n";
		cout << "| [3] Metade pirâmide                     |\n";
		cout << "| [4] Pirâmide                            |\n";
		cout << "| [5] Pirâmide dupla                      |\n";
		cout << "| [6] Sequência de pirâmide               |\n";
		cout << "| [7] Jogo da forca                       |\n";
		cout << "| [10] Sair                               |\n";
		cout << "+-----------------------------------------+\n";
		cout << "\nEscolha uma das opções: ";
		cin >> chose;
		switch (chose) {
			case 1: {
				system("cls");

				do {
					cout << "Digite o tamanho do quadrado: ";
					cin >> size;

					if(size < 0) {
						system("cls");
						cout << "Insira um valor válido, o sistema não aceita número negativos";
					}
					cout << endl;
				} while(size < 0);

				for(int i = 0; i < size; i++) {
					cout << "\t";
					for(int j = 0; j < size; j++) {
						cout << "* ";
					}
					cout << endl;
				}

				break;
			}

			case 2: {
				system("cls");

				do {
					cout << "Digite o tamanho do quadrado: ";
					cin >> size;

					if(size < 0) {
						system("cls");
						cout << "Insira um valor válido, o sistema não aceita número negativos";
					}
					cout << endl;
				} while(size < 0);

				for(int i = 0; i < size; i++) {
					cout << "\t";
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

				do {
					cout << "Digite o tamanho da metade: ";
					cin >> size;

					if(size < 0) {
						system("cls");
						cout << "Insira um valor válido, o sistema não aceita número negativos";
					}
					cout << endl;
				} while(size < 0);

				for(int i = 0; i < size; i++) {
					for(int j = 0; j < i + 1; j++) {
						cout << "*";
					}
					cout << "\n";
				}

				break;
			}

			case 4: {
				system("cls");

				do {
					cout << "Digite o tamanho do triângulo: ";
					cin >> size;

					if(size < 0) {
						system("cls");
						cout << "Insira um valor válido, o sistema não aceita número negativos";
					}
					cout << endl;
				} while(size < 0);

				for(int i = 0; i < size; i++) {
					cout << "\t";
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

			case 5: {
				system("cls");

				do {
					cout << "Digite o tamanho do triângulo duplo: ";
					cin >> size;

					if(size < 0) {
						system("cls");
						cout << "Insira um valor válido, o sistema não aceita número negativos";
					}
					cout << endl;
				} while(size < 0);
				cout << "\n\n";

				for(int i = 0; i < size; i++) {
					cout << "\t";
					if(i > 0) {
						for(int k = i; k < i * 2; k++) {
							cout << " ";
						}
					}

					for(int j = i * 2; j < size * 2 - 1; j++) {
						cout << "*";
					}

					if(i < size - 1) {
						cout << "\n";
					}
				}

				for(int i = 0; i <= size; i++) {
					cout << "\t";
					if (i > 0) {
						for(int k = i; k < size; k++) {
							cout << " ";
						}
					}

					for(int j = 1; j < i * 2; j++) {
						cout << "*";
					}

					cout << "\n";
				}
				break;
			}

			case 6: {
				system("cls");

				do {
					cout << "Digite o tamanho da sequência: ";
					cin >> size;

					if(size < 0) {
						system("cls");
						cout << "Insira um valor válido, o sistema não aceita número negativos";
					}
					cout << endl;
				} while(size < 0);
				cout << "\n\n";

				for(int i = 0; i < size; i++) {
					cout << endl;
					for(int j = 0; j < i + 1; j++) {
						cout << "*";
					}

					cout << endl;
					for(int k = 0; k < i + 2; k++) {
						cout << "*";
					}

					cout << endl;
					for(int l = 0; l < i + 1; l++) {
						cout << "*";
					}
				}
				break;
			}
			
			case 7: {
				system("cls");
				
				break;
			}

			case 10: {
				cout << "Saindo...";
				break;
			}

			default: {
				cout << "Escolha uma opção válida";
				break;
			}
		}
	} while (chose != 10);
}