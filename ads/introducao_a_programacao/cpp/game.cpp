#include <iostream>
#include <fstream>
#include <vector>
#include <string>
#include <cstdlib>
#include <ctime>
using namespace std;

string getRandomLine(int index, const string& filename) {
	system("chcp 65001");
	ifstream file(filename);
	if (!file.is_open()) {
		cerr << "Erro ao abrir o arquivo: " << filename << endl;
		return "";
	}

	string line;
	int currentLine = 0;

	while (getline(file, line)) {
		if (currentLine == index) {
			return line;
		}
		currentLine++;
	}

	cerr << "Linha não encontrada no arquivo: " << filename << endl;
	return "";
}

main() {
	system("chcp 65001");

	srand(time(0));
	int randomIndex = rand() % 30;

	string word = getRandomLine(randomIndex, "forcaWord.txt");
	string dicas = getRandomLine(randomIndex, "dicas.txt");

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
		cout << dicas << "\n\n";
		for(int i = 0; i < word.length(); i++) {
			if(positions[i] != -1) {
				cout << word[positions[i]] << " ";
			} else {
				cout << "- ";
			}
		}

		if(acertos == word.length()) {
			cout << "\n\nParabéns, você acertou a palavra!!!";
			finish = true;
		}
		if(erros == 6) {
			cout << "\n\nVocê atingiu o número máximo de erros.";
			finish = true;
		}

		if(acertos != word.length()) {
			cout << "\n\nDigite uma letra: ";
			cin >> letra;
		}

		for(int i = 0; i < word.length(); i++) {
			if(tolower(letra) == tolower(word[i]) && positions[i] == -1) {
				positions[i] = i;
				acertos++;
				break;
			}
		}
		for(int i = 0; i < word.length(); i++) {
			if(letra != word[i]) {
				erros++;
				break;
			}
		}

	} while(!finish);
}