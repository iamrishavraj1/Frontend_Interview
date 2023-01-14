#include <iostream>
#include <string>
using namespace std;

/*
Class - The class is a blueprint for creating object.
it defines the properties and methods that an object should have.
*/

class Person
{
public:
    // constructor
    Person(string name, long mobile, string occupation);
    // Method
    void intro();

private:
    // properties
    string fullName;
    long contactNumber;
    string role;
};

// constructor implementation
Person::Person(string name, long mobile, string occupation)
{
    fullName = name;
    contactNumber = mobile;
    role = occupation;
}

// Method implementation
void Person::intro()
{
    cout << "Hey my name is " << fullName << ", my contactDetails is " << contactNumber << " and my role is " << role << endl;
}

int main()
{
    /*
    Object - The Object is an instance of the class, which contains the
    instance of the members and behaviors defined in the class template.
    */
    Person emply1("Rishav Raj", 9608341528, "Front-end Developer");
    cout << emply1 << endl;
    emply1.intro();
}

// To implement inheritance, you use the : operator to indicate that one class is derived from another :

class Teacher : public Person
{
public:
    // constructor
    Teacher(string name, long mobile, string occupation, string subject);
    // Method
    void greet();

private:
    // properties
    string subject;
};

// constructor implementation
Teacher::Teacher(string name, long mobile, string occupation, string subject) : Person(name, mobile, occupation)
{
    this->subject = subject;
}

// Method implementation
void Teacher::greet()
{
    cout << "Hey Good Morning, " << fullName << " professor of " << subject << endl;
}

int main()
{
    /*
    Object - The Object is an instance of the class, which contains the
    instance of the members and behaviors defined in the class template.
    */
    Teacher teacher1("Ritesh Singh", 123456789, "Professor", "RAC");
    cout << teacher1 << endl;
    teacher1.intro();
    teacher1.greet();
}

// To implement polymorphism, you can use virtual functions, a function declared with the keyword virtual in a base class, which can be overridden in derived classes.

class Shape
{
public:
    // Method
    virtual double getArea() = 0;
};

class Circle : public Shape
{
public:
    // constructor
    Circle(double radius);
    // Method
    double getArea();

private:
    // properties
    double radius;
};

// constructor implementation
Circle::Circle(double radius)
{
    this->radius = radius;
}

// Method implementation
double Circle::getArea()
{
    return 3.14159 * pow(radius, 2);
}

class Square : public Shape

// here's an example of how you might implement run-time polymorphism, compile-time polymorphism, abstraction, and encapsulation in C++:

#include <iostream>
#include <string>
               using namespace std;

// Abstraction -  Hiding the implementation details and showing the important details of an object
class Shape
{
public:
    // Method
    virtual double getArea() = 0; // pure virtual function
};

class Circle : public Shape
{
public:
    // constructor
    Circle(double radius);
    // Method
    double getArea();

private:
    // properties
    double radius;
};

// constructor implementation
Circle::Circle(double radius)
{
    this->radius = radius;
}

// Method implementation
double Circle::getArea()
{
    return 3.14159 * pow(radius, 2);
}

class Square : public Shape
{
public:
    // constructor
    Square(double side);
    // Method
    double getArea();

private:
    // properties
    double side;
};

// constructor implementation
Square::Square(double side)
{
    this->side = side;
}

// Method implementation
double Square::getArea()
{
    return pow(side, 2);
}

int main()
{
    /*
    Run-time Polymorphism - The ability of different objects to respond differently to the same method or property in run-time.
    */
    Shape *shapes[2];
    shapes[0] = new Circle(2);
    shapes[1] = new Square(2);
    for (int i = 0; i < 2; i++)
    {
        cout << "Area: " << shapes[i]->getArea() << endl;
    }
}

// Here's an example of how you might implement compile-time polymorphism in C++:

#include <iostream>
using namespace std;

class Calculator
{
public:
    // Method
    int add(int a, int b);
    int add(int a, int b, int c);
};

int Calculator::add(int a, int b)
{
    return a + b;
}

int Calculator::add(int a, int b, int c)
{
    return a + b + c;
}

int main()
{
    /*
    Compile-Time Polymorphism - The ability of different objects to respond differently to the same method or property in compile-time.
    */
    Calculator calculate;
    cout << calculate.add(2, 2) << endl;
    cout << calculate.add(2, 2, 3) << endl;
}

// Here's an example of how you might implement Encapsulation in C++:
class BankAccount
{
private:
    // Encapsulation - Hiding the data members and providing access via methods
    int accountNumber;
    double accountBalance;

public:
    // Method
    void setAccountNumber(int number)
    {
        accountNumber = number;
    }
    void setAccountBalance(double balance)
    {
        accountBalance = balance;
    }
    int getAccountNumber()
    {
        return accountNumber;
    }
    double getAccountBalance()
