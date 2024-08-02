const prompt = require("prompt-sync")();
const altura = Number(prompt("Altura da Árvore: "));

console.log();

for (let i = 1; i <= altura; i++) {
    const espacos = 30 + (altura - i);
    console.log(" ".repeat(espacos) + "*".repeat(i * 2));
}

/*
                                    **          espacos = 30 + 8 - 1
                                   ****         espacos = 30 + 8 - 2  
                                  ******        espacos = 30 + 8 - 3
                                 ********       espacos = 30 + 8 - 4
                                **********      espacos = 30 + 8 - 5
                               ************     espacos = 30 + 8 - 6
                              **************    espacos = 30 + 8 - 7
                             ****************   espacos = 30 + 8 - 8
*/
