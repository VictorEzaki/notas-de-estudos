#include <iostream>
#include "revisao_matriz.h"
using namespace std;

 main() {
    const int TAM = 15;
    char matriz[TAM][100]; // Supondo que a matriz tenha 100 colunas

    iniciarMatriz(matriz, TAM);

    // Exibir a matriz para verificar
    for (int i = 0; i < TAM; i++) {
        for (int j = 0; j < TAM; j++) {
              cout << matriz[i][j] << " ";
        }
       cout << endl;
    }

  
}