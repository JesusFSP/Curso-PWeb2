import java.util.*;
public class Calculator {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Ingrese el primer numero: ");
		int num1 = sc.nextInt(); 
		System.out.print("Ingrese el segundo numero: ");
		int num2 = sc.nextInt();
		
		System.out.print("La suma es:" + add(num1, num2));
		System.out.print("\nLa resta es:" + sub(num1, num2));
		System.out.print("\nLa multiplicacion es:" + mul(num1, num2));
		System.out.print("\nLa division es:" + div(num1, num2));
		System.out.print("\nEl modulo es:" + mod(num1, num2));

	}

	public static  int add(int a, int b){ 
		return a+b; 
	}
	public static int sub(int a, int b){ 
		return a-b; 
	}
	public static int mul(int a, int b){ 
		return a*b; 
	}
	public static int div(int a, int b){ 
		return a/b; 
	}
	public static int mod(int a, int b){ 
		return a%b; 
	}

}
