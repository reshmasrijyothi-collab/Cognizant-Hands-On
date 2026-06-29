
public class FinancialForecast{
 static double future(double pv,double rate,int years){
  if(years==0) return pv;
  return future(pv,rate,years-1)*(1+rate);
 }
 public static void main(String[] a){
  System.out.println(future(10000,0.1,5));
 }
}
