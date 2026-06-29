
public class SearchAlgorithms{
 static Product linear(Product[] p,int id){
  for(Product x:p) if(x.productId==id) return x; return null;}
 static Product binary(Product[] p,int id){
  int l=0,h=p.length-1;
  while(l<=h){int m=(l+h)/2;
   if(p[m].productId==id)return p[m];
   if(p[m].productId<id)l=m+1; else h=m-1;}
  return null;}
}
