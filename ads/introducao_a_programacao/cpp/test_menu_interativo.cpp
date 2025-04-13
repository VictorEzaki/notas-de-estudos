#include <stdio.h>
#include <iostream>
#include <conio.h>
#include <windows.h>
using namespace std;
void MoveToXY(int x,int y)
{
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE),(COORD){x,y});
}
int main()
{
  inivio:
  system("cls");
  int entra,x=8,y=0,a,
      ant_y=0;
  printf("ENTRAR\n");
  printf("opções\n");
  printf("  SAIR"  );
  MoveToXY(x,y);
  printf("<-");
  do{
    a=0;
    if(kbhit())a=getch();
    switch(a)
    {
    case 72:  // Move a Seta para Cima
      y--;
      if( y < 0 )y = 2;
      break;
    case 80:  // Move a Seta para Baixo
      y++;
      if( y > 2 )y = 0;
      break;
    }
    if( y != ant_y )
    {
      printf("\a");
      MoveToXY(x,ant_y);
      printf("  ");
      MoveToXY(x,y);
      printf("<-");
    }
    if( a == 13 && y == 2 )break;
    ant_y = y;
  }while( 1 );
  cout<<"\n\nQuer Realmente Sair Do Programa !\n"
        "\n1 = Sim\n2 = nao"<<endl;
  scanf("%d", &entra);
  if(entra == 2)goto inivio;
  cout<<"\n\n\n\n"<<endl;
  
}