Topic: any vs unknown + Type Narrowing


any : Typescript a any use kora hoi na karon typescript any check kore na. Take kono value diye define kora hoi jodi bola hoi any tokon se ata r check kore na tokon runtime a kono error dekhai na.Runtime a ase se crash kore jai tokon se value right thakle kaj kore , wrong thakle error dekhai .

unknown: Typescript a unknown use kora nirapod karon hocce unkonwn diye jodi value declare kora hoi tokon typescript dore ney ata ki ami cini na tai se age check kore ney value wrong thakle se complie a error diye dey, tokon runtime pojontto jawoa lage na . tai program runtime a crash hower sombona thake na. TypeScript jor kore check korai tai atai nirapod.

Type Narroeing: amra jokon kothay o thake data ante jai tokon se jane na ki data asbe tokon amra type of diye unknown type specific type a niye ase  "string" diye type kore dile se check korbe ata "string" naki tokon se "string" data paile niye asbe ba "number", "Boolean" je data amar type of diye declare kore dibo se data se niye asbe r jodi oi data na pai se error dibe

aikhane amra jodi any use kori tokon data cole asbe and runtime a amra crash korbe tai any k adiye cola valo typescript a .

unkonwn jokon use korbo tokon se data k check kore pelbe complier a karon API thake jokon data asbe tokon to se jane na ki data asbe tai se tokon unkowon k safe korar jonnno  typeof , insaneof ,  in use kore jaty runtime a clear thake crash na kore.

Example :

            let data: unknown = "hello";

            if (typeof data === "string"){
              console.log(data.toUpperCase())
            }

aikhane data save karon aikhane typeof = "string" bola hoice
