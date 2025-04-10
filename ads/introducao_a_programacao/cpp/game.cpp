#include <iostream>
using namespace std;

main() {
	string word = "hello";
	char letra;
	bool correct = false;
	int positions[word.length()], acertos = 0;

	for(int i = 0; i < word.length(); i++) {
		positions[i] = -1;
	}

	do {
		system("cls");
		cout << "+------------------------------------+\n";
		cout << "|            Jogo da forca           |\n";
		cout << "+------------------------------------+\n";
		cout << "\n\n";
		for(int i = 0; i < word.length(); i++) {
			cout << "- ";
		}

		cout << "\n\nDigite uma letra: ";
		cin >> letra;

		for(int i = 0; i < word.length(); i++) {
			if(letra == word[i] && positions[i] == -1) {
				positions[i] = i;
				acertos++;
				break;
			}
		}

		if(acertos == 5) {
			correct = true;
		}
	} while(!correct);
}