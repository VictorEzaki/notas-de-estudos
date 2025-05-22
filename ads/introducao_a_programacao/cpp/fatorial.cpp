#include <iostream>

using namespace std;

main() {
	system("chcp 65001");
	
	int num = 5, fatorial = 0;
	fatorial = num;
	
	for(int i = num - 1; i > 0; i--) {
		fatorial *= i;
	}
	
	cout << "Fatorial de " << num << " é: " << fatorial;
	
}