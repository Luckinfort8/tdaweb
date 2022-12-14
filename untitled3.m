clc
vars = {'x','y','R','J','M','V','valores','h','j','dis'};
clear(vars{:});
syms x y
R=[x^2-10*x+y^2+8; x*y^2+x-10*y+8];
J= jacobian(R,[x,y]);

x(1)=10;
y(1)=10;
for i=1:100
   x(i)=vpa(x(i));
   y(i)=vpa(y(i));
   M=subs(subs(J,x(i)),y(i));
   V=subs(subs(-R,x(i)),y(i));
   valores=rref([M V]);
   h(i)=valores(1,3);
   j(i)=valores(2,3);
   x(i+1)=vpa(x(i)+h(i));
   y(i+1)=vpa(y(i)+j(i));
   dis(i)=sqrt((x(i+1)-x(i))^2+(y(i+1)-y(i))^2);
   if dis(i)<0.0000001
       break
   end
end

x
y
dis
disp('x= ');disp(x(end));
disp('y= ');disp(y(end));


