#include <dos.h>
#include <iostream>
#include <stdlib.h> 
#include <iomanip>
#include <conio.h> // Para usar o getch();
#include "function_recursive.h"

using namespace std;

int op;

main ()
{ 
   system("chcp 65001");// para usar acentos
   do{
   system ("cls");
   cout<<"\033[95mEscolha uma opção abaixo\033[0m\n";
   cout<<"\n [1] Função \033[95m01\033[0m\n\n";
   cout<<"\n [2] Função \033[95m02\033[0m\n\n";
   cout<<"\n [3] Função \033[95m03\033[0m\n\n";
   cout<<"\n [4] Função \033[95m04\033[0m\n\n";
   cin>>op;
  switch (op)
  {
    case  1:{
    	system ("cls");
int x;
         cout << " Digite o número de termos da série de Fibonacci: \n\n";
         cin >> x;
         cout << "\n\n Série de Fibonacci: \n\n";
         for (int i = 0; i < x; i++) {
            cout << fibonacci(i) << " ";
         }
         getch();
         break;
       }
         case 2:{
         	system ("cls");
int base, power, result;
         cout << " Digite o número base: \n\n";
         cin >> base;
         cout << "\n\n Digite o número de potência (inteiro positivo): \n\n";
         cin >> power;
         result = calculate(base, power);
         cout << "\n\n " << base << "^" << power << " = " << result;
         getch();
         break;
           }
    case 3:{
    	system ("cls");
int n, reverse;
         cout << " Digite um número: \n\n";
         cin >> n;
         reverse = reverseNumber(n);
         cout << "\n\n O reverso do número é: " << reverse;
         getch();
         break;
           }
    case 4:{
    	system ("cls");
int n;
         cout << " Digite um número: \n\n";
         cin >> n;
         if (isPrime(n))
            cout << " \n\n Sim, o número é um número primo.";
         else
            cout << " \n\n Não, o número não é um número primo.";
            getch();
         break;
           }		              
   default: {
               cout<<"\n Essa função não existe. Favor digitar novamente";
               getch();
               break;
            }
 }// fecha o SWITCH
} while(op!=4);
cout<<"\n\n\n ";
}