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
	do {
		cout << "\n\n\n\tLista de exercícios Nº 3";
		cout << "\n------------------------------------------\n";
		cout << "[1] Quem é mais velho\n";
		cout << "[2] Desafio lógica\n";
		cout << "[3] Ímpar ou par\n";
		cout << "[4] Ano bisexto\n";
		cout << "[5] Calculadora\n";
		cout << "[6] Desconto progressivo\n";
		cout << "[7] Dias do mês\n";
		cout << "[8] Média do aluno\n";
		cout << "[9] Positivo ou negativo\n";
		cout << "[10] Desafio1\n";
		cout << "[11] Desafio2\n";
		cout << "[12] Desafio3\n";
		cout << "[13] Desafio4\n";
		cout << "[14] Desafio5\n";
		cout << "[15] Sair do programa\n";
		cout << "\n------------------------------------------\n";
		cout << "\nEscolha uma das opções: ";
		cin >> chose;
		switch (chose) {
			case 1: {
				system("cls");

				int pessoa1, pessoa2;
				string name1, name2;

				cout << "\tQual a maior idade?";
				cout << "\n------------------------------------------\n";

				do {
					cout << "Digite o nome da primeira pessoa: ";
					cin >> name1;
					cout << "Digite a idade da primeira pessoa: ";
					cin >> pessoa1;
					cout << "Digite o nome da segunda pessoa: ";
					cin >> name2;
					cout << "Digite a idade da segunda pessoa: ";
					cin >> pessoa2;
					system("cls");
				} while(pessoa1 < 0 && pessoa2 < 0);


				cout << "\n------------------------------------------\n";

				if(pessoa1 > pessoa2) {
					cout << name1 << " é a pessoa mais velha!";
				} else {
					cout << name2 << " é a pessoa mais velha!";
				}
				cout << "";
				break;
			}

			case 2: {
				system("cls");
				int num1 = 5;
				int num2 = 10;
				int num3 = 6;
				int num4 = 5;

				if ((num1 >= num4 || num3 < num1) && (num3 < num2 || num4 > num2)) {
					cout << "\n ENTENDI TUDO !!! \n";
				} else {
					cout << "\n\n NÃO ENTENDI NADA \N";
				}

				break;
			}

			case 3: {
				system("cls");

				int num;

				cout << "\tÍmpar ou par";
				cout << "\n------------------------------------------\n";

				cout << "Digite um número: ";
				cin >> num;

				if (num % 2 == 0) {
					cout << "O número é par";
				} else {
					cout << "O número é ímpar";
				}

				cout << "\n------------------------------------------\n";
				break;
			}

			case 4: {
				system("cls");

				int year;

				cout << "\t\tAno bisexto";
				cout << "\n------------------------------------------\n";

				cout << "Digite o ano que deseja verificar: ";
				cin >> year;

				if(year % 4 == 0) {
					cout << "O ano é bisexto";
				} else {
					cout << "O ano não é bisexto";
				}

				cout << "\n------------------------------------------\n";
				break;
			}

			case 5: {
				char operacao;
				float num1, num2, result;
				string opName;

				system("cls");

				cout << "\tCalculadora";
				cout << "\n------------------------------------------\n";

				cout << "\n[+] Soma";
				cout << "\n[-] Subtração";
				cout << "\n[*] Multiplicação";
				cout << "\n[/] Divisão\n";
				cout << "Qual operação? ";
				cin >> operacao;

				cout << "Digite o primeiro número: ";
				cin >> num1;
				cout << "Digite o segundo número: ";
				cin >> num2;

				switch (operacao) {
					case '+': {
						result = num1 + num2;
						opName = "soma";
						break;
					}

					case '-': {
						result = num1 - num2;
						opName = "subtração";
						break;
					}

					case '*': {
						result = num1 * num2;
						opName = "multiplicação";
						break;
					}

					case '/': {
						result = num1 / num2;
						opName = "divisão";
						break;
					}

					default: {
						cout << "Char inválido";
						break;
					}
				}
				system("cls");
				cout << "\n------------------------------------------\n";
				cout << "O resultado da " << opName << " é: " << result;
				cout << "\n------------------------------------------\n";
				break;
			}

			case 6: {
				system("cls");

				float valueBuy, desconto;

				cout << "\tDesconto progressivo";
				cout << "\n------------------------------------------\n";

				cout << "Digite o valor da compra: ";
				cin >> valueBuy;

				system("cls");

				if(valueBuy > 500) {
					desconto = valueBuy * 15 / 100;
					valueBuy -= desconto;
					cout << "O valor total da compra com um desconto de 15% fica: " << valueBuy;
				} else if (valueBuy >= 100) {
					desconto = valueBuy * 10 / 100;
					valueBuy -= desconto;
					cout << "O valor total da compra com um desconto de 10% fica: " << valueBuy;
				} else {
					desconto = valueBuy * 5 / 100;
					valueBuy -= desconto;
					cout << "O valor total da compra com um desconto de 5% fica: " << valueBuy;
				}

				cout << "\n------------------------------------------\n";
				break;
			}

			case 7: {
				system("cls");

				int mes;

				cout << "\tQuantos dias tem o mês";
				cout << "\n------------------------------------------\n";

				cout << "Digite o mês em número que deseja saber o número de dias: ";
				cin >> mes;

				system("cls");

				if(mes == 2) {
					cout << "O mês tem 28 dias";
				} else if(mes == 8 || mes % 2 != 0) {
					cout << "O mês tem 31 dias";
				} else {
					cout << "O mês tem 30 dias";
				}

				cout << "\n------------------------------------------\n";
				break;
			}

			case 8: {
				system("cls");

				float soma = 0, nota[3], media;

				cout << "\tMédia do aluno";
				cout << "\n------------------------------------------\n";

				for(int i = 0; i < 3; i++) {
					cout << "Digite a " << i + 1 << "º nota: ";
					cin  >> nota[i];
				}

				for(int i = 0; i < 3; i++) {
					soma += nota[i];
				}
				system("cls");

				media = soma / 3;
				if (media < 4) {
					cout << "Reprovado com média " << media << "!!!";
				} else if(media < 7) {
					cout << "Recuperação com média " << media << "!!!";
				} else {
					cout << "Aprovado com média " << media << "!!!";
				}
				cout << "\n------------------------------------------\n";
				break;
			}

			case 9: {
				system("cls");

				int num;

				cout << "\tPositivo ou negativo";
				cout << "\n------------------------------------------\n";

				cout << "Digite um número: ";
				cin >> num;
				system("cls");

				if(num < 0) {
					cout << "O número é negativo";
				} else {
					cout << "O número é positivo";
				}
				cout << "\n------------------------------------------\n";
				break;
			}

			case 10: {
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

			case 11: {
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

			case 12: {

				break;
			}

			case 15: {
				cout << "Saindo...";
				break;
			}
		}
	} while (chose != 15);
}