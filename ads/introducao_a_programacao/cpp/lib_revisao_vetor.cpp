#include <iostream>
using namespace std;

// criar constante
int const TAM = 10;
float media,notas[TAM], menorNota, maiorNota;//TAM para gerenciar o tamanho do vetor
int qtde_menor_7;

//=======================================================
// FUNÇÃO MÉDIA
float mediaVetor(float notas[],int TAM) {
	float media,acum=0;
	for (int i=0; i<TAM; i++) {
		acum = acum + notas[i];
	}
	media=acum/TAM;
	return (media);
}
//=============================================
//FUNÇÃO QTDE NOTAS MENORES QUE SETE
int verificarQtdeVetor(float notas[],int TAM) {
	int cont_menor_7=0;
	for(int i=0; i<TAM; i++) {
		if (notas[i]<7)
			cont_menor_7++;//conta notas menores de 7
	}
	return (cont_menor_7);
}
//============================================
//FUNÇÃO MENOR NOTA VETOR
//=============================================
float verificarMenorNota(float notas[],int TAM) {
	float menor = notas[0];
	for(int i = 0; i < TAM; i++) {
		if(notas[i] < menor) {
			menor = notas[i];
		}
	}
	
	return menor;
}
//============================================
//FUNÇÃO MAIOR NOTA VETOR
//=============================================
float verificarMaiorNota(float notas[],int TAM) {
	float maior = notas[0];
	for(int i = 0; i < TAM; i++) {
		if(notas[i] > maior) {
			maior = notas[i];
		}
	}
	
	return maior;
}
