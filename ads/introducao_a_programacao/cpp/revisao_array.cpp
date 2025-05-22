//FUP que leia 10 notas num vetor
// Use constante
// Calcule a média numa função e retorne p/prog principal
// Faça uma função que verifique quantos alunos
//tiraram notas menores que 7 - retorne a
//quantidade ao programa principal;

#include <iostream>
#include "lib_revisao_vetor.h"
using namespace std;

// criar constante
int const TAM = 10;
float media,notas[TAM], menorNota, maiorNota;//TAM para gerenciar o tamanho do vetor
int qtde_menor_7;

float mediaVetor(float notas[],int TAM);

int verificarQtdeVetor(float notas[],int TAM);

float verificarMenorNota(float notas[],int TAM);

float verificarMaiorNota(float notas[],int TAM);

main() {
	system("chcp 65001"); //para usar acentuação
	cout<<"\n\n\t\t ****  VETORES NOTAS   *** \n\n";
	cout<<"\n Informe " << TAM <<" notas";
	for (int i=0; i<TAM; i++) {
		cout<<"\n Informe a "<<i+1<<"ª nota: ";
		cin>> notas[i];
	}
	media = mediaVetor(notas,TAM);
	qtde_menor_7 = verificarQtdeVetor(notas,TAM);
	menorNota = verificarMenorNota(notas, TAM);
	maiorNota = verificarMaiorNota(notas, TAM);
	cout<<"\n A média das notas é: " <<media;
	cout<<"\n A qtde de notas menores que 7: "<<qtde_menor_7;
	cout<<"\n A Menor nota é: "<<menorNota;
	cout<<"\n A Maior nota é: "<<maiorNota;
	cout<<"\n\n\n\n\n";
}
