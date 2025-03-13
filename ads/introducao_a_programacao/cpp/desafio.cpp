#include <iostream>

using namespace std;

main() {
	system("chcp 65001");
	
	int max = 2;
	string desenho = "";
	
	for (int i = 0; i <= max; i++) {
					
		for (int j = 0; j <= i; j++) {			
			desenho += "*";				
		}
		desenho += "\n";
					
		for (int j = 0; j <= i+1; j++) {
			desenho += "*";				
		}
		desenho += "\n";
					
		for (int j = 0; j <= i; j++) {			
			desenho += "*";				
		}
		
		desenho += "\n";
	}
					
	cout << desenho;
}