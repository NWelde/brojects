//program to figure out area circumfrance and diameter of a circle 
//static - is a keword used to assign a property or method  to a class itlself and not the object 
class MathUnit{
    static PI = 3.1459;
    
    static getDiameter(radius){
        return radius*2;
    }

    static getCircumfrance(radius){
        return 2*this.PI * radius;
    }
    static getArea(radius) {
    return this.PI*radius*radius
}
}

const MathUnit1 = new MathUnit.PI;


console.log(MathUnit1);

console.log(MathUnit.getDiameter(10));
console.log(MathUnit.getCircumfrance(10));
console.log(MathUnit.getArea(10));
