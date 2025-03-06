#include <iostream>
#include <iomanip>
using namespace std;

areaRetangulo() {
	system("cls");
	
	float large, hight, result;
	
	cout << "\tCalculadora de área do retângulo";
	cout << "\n------------------------------------------------------\n";
	
	cout << "Digite a largura do retangulo: ";
	cin >> large;
	cout << "Digite a altura do retangulo: ";
	cin >> hight;
	
	cout << "\n------------------------------------------------------\n";
	result = large * hight;
	cout << "A área do retângulo é de: " << result;
	cout << "\n------------------------------------------------------\n";
}

conversorTemperatura() {
	system("cls");
	
	float celcius, fahrenheit;
	
	cout << "\tConversor de celcius para fahrenheit";
	cout << "\n------------------------------------------------------\n";
	
	cout << "Digite a temperatura em graus Celcius: ";
	cin >> celcius;
	
	cout << "\n------------------------------------------------------\n";
	fahrenheit = (celcius * 9/5) + 32;
	cout << celcius << "C° em fahrenheit é:" << fahrenheit << "F°";
	cout << "\n------------------------------------------------------\n";
}

mediaAlturas() {
	system("cls");
	
	float hight1, hight2, hight3, result;
	
	cout << "\tCálculo média de três alturas";
	cout << "\n------------------------------------------------------\n";
	
	cout << "Digite a primeira altura: ";
	cin >> hight1;
	cout << "Digite a segunda altura: ";
	cin >> hight2;
	cout << "Digite a terceira altura: ";
	cin >> hight3;
	
	result = (hight1 + hight2 + hight3) / 3;
	cout << "A média aritméticas das três alturas é de: " << result;
	cout << "\n------------------------------------------------------\n";
}

desconto() {
	system("cls");
	
	float price, result;
	
	cout << "\tCálculo de desconto de 15%";
	cout << "\n------------------------------------------------------\n";
	
	cout << "Digite o preço do produto: ";
	cin >> price;
	
	result = price * 15 / 100;
	cout << "15% de desconto em " << price << " é de: " << result;
}

main() {
	system("chcp 65001");
	cout << fixed << setprecision(2);
	
	int chose;
	while (chose != 11) {
		cout << "\n\n\n\tLista de exercícios";
		cout << "\n------------------------------------------\n";
		cout << "[1] Área do retângulo\n";
		cout << "[2] Conversão de temperatura\n";
		cout << "[3] Média aritmética de três alturas\n";
		cout << "[4] Preço com desconto\n";
		cout << "[5] Área do retângulo\n";
		cout << "[6] Área do retângulo\n";
		cout << "[7] Área do retângulo\n";
		cout << "[8] Área do retângulo\n";
		cout << "[9] Área do retângulo\n";
		cout << "[10] Área do retângulo\n";
		cout << "[11] Sair do programa\n";
		cout << "\n------------------------------------------\n";
		cout << "\nEscolha uma das opções: ";
		cin >> chose;
		
		switch (chose) {
			case 1:
				areaRetangulo();
				break;
				
			case 2:
				conversorTemperatura();
				break;
				
			case 3:
				mediaAlturas();
				break;
				
			case 4:
				desconto();
				break;
				
			case 11:
				cout << "Saindo...";
				break;
			default:
				break;
		}
	}
}