#include <iostream>
#include <iomanip>
#include <string>
#include <stdio.h>
#include <conio.h>
#include <windows.h>
#include <ctime>
#include <cstdlib>

#define KEY_UP 72
#define KEY_DOWN 80
#define KEY_ESC 27
#define KEY_ENTER 13
using namespace std;

void setColor(const string& colorCode) {
	cout << "\033[" << colorCode << "m";
}

void MoveToXY(int x,int y) {
	SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE),(COORD) {
		x,y
	});
}

int menu() {
	srand(time(0));
	
	int x=28,y=4,a,ant_y=0;
	system("cls");
	cout << endl;
	cout << "+-----------------------------------------+\n";
	cout << "|           - Lista de Desafios -         |\n";
	cout << "|-----------------------------------------|\n";
	cout << "| [1] Quadrado..............              |\n";
	cout << "| [2] Quadrado colorido.....              |\n";
	cout << "| [3] Metade pirâmide.......              |\n";
	cout << "| [4] Pirâmide..............              |\n";
	cout << "| [5] Pirâmide dupla........              |\n";
	cout << "| [6] Sequência de pirâmide.              |\n";
	cout << "| [7] CHAR aleatório+vogias.              |\n";
	cout << "| [10] Sair.................              |\n";
	cout << "+-----------------------------------------+\n";
	MoveToXY(x,y);
	printf("<-");
	do {
		a=0;
		if(kbhit())a=getch();
		switch(a) {
			case 72:  // Move a Seta para Cima
				y--;
				if( y < 4 )y = 11;
				break;
			case 80:  // Move a Seta para Baixo
				y++;
				if( y > 11 )y = 4;
				break;
		}
		if( y != ant_y ) {
			printf("\a");
			MoveToXY(x,ant_y);
			printf("  ");
			MoveToXY(x,y);
			printf("<-");
		}
		if( a == 13 && y == 4 ) {
			return 1;
		}
		if( a == 13 && y == 5 ) {
			return 2;
		}
		if( a == 13 && y == 6 ) {
			return 3;
		}
		if( a == 13 && y == 7 ) {
			return 4;
		}
		if( a == 13 && y == 8 ) {
			return 5;
		}
		if( a == 13 && y == 9 ) {
			return 6;
		}
		if( a == 13 && y == 10 ) {
			return 7;
		}
		if( a == 13 && y == 11 ) {
			return 10;
		}
		ant_y = y;
	} while( 1 );
}

void menuExit() {
	int a;
	cout << endl;
	cout << "Pressione [Enter] para voltar ao menu";
	a=0;

	while(a != 13) {
		if(kbhit())a=getch();
	}
}

char gerarCharRandom() {
	return 'A' + rand() % 26;
}

main() {
	system("chcp 65001");
	cout << fixed << setprecision(2);

	system("cls");

	int size = 0, key = 0;

	do {
		key = menu();
		switch (key) {
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
				menuExit();
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
				menuExit();
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
				menuExit();

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
				menuExit();

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
				menuExit();
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
				menuExit();
				break;
			}

			case 7: {
				system("cls");
				
				char letras[100];
				int qtdeVogais = 0;
				
				for(int i = 0; i < 100; i++) {
					letras[i] = gerarCharRandom();
					
					cout << letras[i] << endl;
					
					if(letras[i] == 'A' || letras[i] == 'E' || letras[i] == 'I' || letras[i] == 'O' || letras[i] == 'U') {
						qtdeVogais++;
					}
				}
				
				cout << "Foram geradas " << qtdeVogais << " vogais.";
				
				menuExit();
				break;
			}

			case 10: {
				cout << "Saindo...";
				break;
			}
		}
	} while (key != 10);
}