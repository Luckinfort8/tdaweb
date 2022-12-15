clc
vars = {'x1','x2','a','b','F','Grad','X','D','M','G','DeG','X1','dif'};
clear(vars{:});
syms x1 x2 a b
F=x1^2-24*x1+x2^2-10*x2;
Grad = gradient(F,[x1,x2])
x1(1)=8;
x2(1)=7;

for i=1:100
X=[x1(i);x2(i)];
D=-(subs(subs(Grad,x1(i)),x2(i)));
M=X+ a*D;
G=subs(subs(F,M(1)),M(2));
DeG=diff(G);
b=solve(DeG,a);
X1=X+b*D;
x1(i+1)=X1(1);
x2(i+1)=X1(2);
dif(i)= vpa(sqrt((x1(i+1)-x1(i))^2+(x2(i+1)-x2(i))^2));
if dif(i)<0.0000001
       break
   end

end
x1
x2
dif
disp('x1= ');disp(x1(end));
disp('x2= ');disp(x2(end));