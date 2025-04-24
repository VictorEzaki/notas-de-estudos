#include <windows.h>
#include <iostream>

using namespace std;

void gotoxy(int x, int y) {
	COORD coordinate;
	coordinate.X = x;
	coordinate.Y = y;
	SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coordinate);
}

main() {
	system("chcp 65001");
	
	string name, cidade;
	int idade;

	string ficha[] = {
		"+----------------------------------+\n",
		"|               Ficha              |\n",
		"+----------------------------------+\n",
		"|                                  |\n",
		"| Nome..:                          |\n",
		"| Idade.:                          |\n",
		"| Cidade:                          |\n",
		"|                                  |\n",
		"|                                  |\n",
		"|                                  |\n",
		"|                                  |\n",
		"+----------------------------------+\n"
	};
	
	for (int i = 0; i < 12; i++) {
		cout << ficha[i];
	}
	
	gotoxy(9, 5);
	cin >> name;
	
	gotoxy(9, 6);
	cin >> idade;
	
	gotoxy(9, 7);
	cin >> cidade;
}