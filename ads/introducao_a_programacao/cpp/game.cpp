#include <iostream>
using namespace std;

main() {
	system("chcp 65001");

	string word = "hello";
	char letra;
	bool finish = false;
	int positions[word.length()], acertos = 0, erros = 0;

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
			if(positions[i] != -1) {
				cout << word[positions[i]] << " ";
			} else {
				cout << "- ";
			}
		}

		if(acertos != 5) {
			cout << "\n\nDigite uma letra: ";
			cin >> letra;
		}

		if(acertos == 5) {
			finish = true;
			cout << "\nParabéns, você acertou a palavra!!!";
		}
		if(erros == 6) {
			finish = true;
			cout << "\nVocê atingiu o número máximo de erros.";
		}


		for(int i = 0; i < word.length(); i++) {
			if(letra == word[i] && positions[i] == -1) {
				positions[i] = i;
				acertos++;
				break;
			}
		}
		for(int i = 0; i < word.length(); i++) {
			if(letra != word[i] && positions[i] != -1) {
				erros++;
				break;
			}
		}

	} while(!finish);
}