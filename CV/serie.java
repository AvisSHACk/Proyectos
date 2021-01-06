import java.util.Scanner;
class Series {
    static public void main(String args[]){	
	System.out.println("Programa que hace una suma de fracciones Series");
    	Scanner entrada = new Scanner(System.in);
	System.out.println("Ingresa el valor de n: ");
	int n = entrada.nextInt();
	double resultado = 0.0;
	System.out.println("==========================================");
	for(int i = 1; i <= n; i++){
	    resultado += Math.pow((double) i/ 2.0 , i);
	}
	
	     System.out.println(resultado);
	
    }
}
