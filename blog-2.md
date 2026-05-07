Topic : OOP


OOP: OOP mane holo object-Oriented Programing . OOP er 4ta pillars ace pillar gule holo

Pillar 1: Inheritance - Atar kaj holo Baba, Dada ader kono gun ace oigula se pai .

Example :

          class Person {
            name: string;
            age: number;

            constructor(name:string, age: number) {
              this.name = name;
              this.age = age;
            }
            introduce() : string {
              return `I am ${this.name}`
            }
          }

          class Programmer extends Person{
            jobTitle: string;

            constructor (name:string, age: number, jobTitle: string){
              super(name, age);
              this.jobTitle = jobTitle
            }
          }

          const prog = new Programmer ("Tajin", 30, "Web Developer")
          console.log(prog.introduce())

aikahen dekho 2ta alada alada person thake programmer paice and abr child a nijer akta podobi ace oita o add hoice
introduce() method akoi line a likha hoice alada likhty hoi nai
2 jaiga thake se akhon dynamic vabe data niye output dibe .



Pillar 2: Polymoriphism - Atar kaj Inheritance er motoi kintu er kicu alada rup thake .

example :

                class Animal {
                    makeSound(): string {
                  return "Je kono animal er sound";
                   }
                     }
                    class Dog extends Animal {
                      makeSound(): string {
                        return "geo geo!";
                      }
                    }
                  class Cat extends Animal {
                    makeSound(): string {
                      return "meow mewo!";
                    }
                  }

                    const animals: Animal[] = [new Dog(), new Cat()];
                    animals.forEach(a => console.log(a.makeSound()));

aikhe kaj ta inheritance er motoi aktar upore akta nirborshil kintu oder rup kintu alada alada tai makeSound() tader nam dore call korle se alada alada vabe responce kortece

Pillar 3: Abstraction - Atar kaj holo se sb kicu k vitore lukiye rakhe and tar votore se ki kortece seta se jane na circle er moaddome se kaj ta somponno kortece

Example :

              abstract class Shape {
                abstract getArea(): number;

                describe(): string {
                  return `Area holo: ${this.getArea()}`;
                }
              }

              class Circle extends Shape {
                constructor(private radius: number) { super(); }

                getArea(): number {
                  return Math.PI * this.radius ** 2;
                }
              }

              const c = new Circle(5);
              console.log(c.describe());

Abstract diye class likhty hoi and circle er maddome se kaj ta ses korce  kintu vitore se calculation kivaby korce tar janty hoi ni .

Pillar 4: Encapsultaion - Atar kaj holo nijeke shield deya ak kothay bolty securiy deya se nijer data nijei rokkha kore .

example :

          class BankAccount {
          private balance: number = 500;

          deposit(amount: number): void {
            if (amount > 500) this.balance += amount;
          }

          getBalance(): number {
            return this.balance;
          }
        }

        const account = new BankAccount();
        account.deposit(1000);
        console.log(account.getBalance());

er kaj hocce se nijeke shield deya karon tar balance aikhane kew change korty parbe na tai se private kore rakce

aikhane kew caile sudu deposite() diyei jog korte parbe .
