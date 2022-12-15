clc
vars = {'x','y','l','f','g','L','gra','px','py','pl','hex','determinante','maximos','minimos'};
clear(vars{:});
syms x y l
f(x,y)=9-x^2-y^2;
g(x,y)=x+y-3 ;

L(x,y,l)=f(x,y)+l*g(x,y)%Funcion Lagrangeana

gra=jacobian(L(x,y,l),[x,y,l])%Gradiente

[px,py,pl]=solve(gra,x,y,l)%valores de x,y,l

hex(x,y,l)=hessian(L(x,y,l),[x,y,l])%Matriz hassiana

pmax=0;
pmin=0;
maximos=0;
minimos=0;
for i=1:length(px)
determinante = det(hex(px(i),py(i),pl(i)));%Determinante hassiano
if determinante > 0
    pmax=pmax+1;
    maximos(pmax)=determinante;

elseif determinante < 0
    pmin=pmin+1;
    minimos(pmin)=determinante;
end
end
if maximos == 0
    maximos="No existen maximos";
elseif minimos == 0
    minimos="No existen minimos";
end
maximos
minimos