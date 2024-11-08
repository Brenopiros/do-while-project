// const usuario ={nome: 'Daniel', idade: 17, time: 'Sport' };

// const mensagemDeBoasVindas1= 'Bem vindo, torcedor Tricolori';

// const mensagemDeBoasvindas2= 'Bem vindo, torcedor Rubro-Negrol'; 
// const mensagemDeBoasVindas3= 'Bem vindo, torcedor Vascaínol';

// const mensagemDeBoasVindasGeral= 'Bem vindo, amante do esportel';

// const mensagemDeEscolha ='Clique no setor para o qual deseja comprar seu ingressol';

// const mensagemFinal ='Divirta-se no Maracanälll';

// let numeroderepeticoes = 0;
// do{
// usuario.time ==='Fluminense' & usuario.idade >= 18

// ? console.log(mensagemDeBoasvindas1)

// : usuario.time === 'Flamengo' && usuario.idade >= 18

// ? console.log(mensagemDelloasvindas2)

// : usuario.idade >= 18

// ? console.log(mensagemDeBoasVindasGeral)

// : console.log('Não vendemos ingresso para torcedores menores de 18 anos')

// console.log(mensagemDeEscolha);
// console.log(mensagemFinal);

// numeroderepeticoes++;
// }while(numeroderepeticoes <0);

// Exercício 1: Cadastro de Alunos

// const prompt = require ('prompt-sync')();
// let cadastro =[];
// let continuar;
// do{
//   let nome = prompt('digite seu nome:')
//   let idade = prompt('digite sua idade:')

//   cadastro.push({nome: nome, idade: idade});

//   continuar = prompt('deseja cadastrar novo aluno? (s/n):')
// }while(continuar.toLowerCase() ==='s')
//   console.log('alunos cadastrados');
//   console.log(cadastro);
  

  //Exercício 2: Simulador de Notas

//  const prompt = require ('prompt-sync')();
// let registro =[];
// let notas =[];
// let continuar;
// do{
//   let nome = prompt('digite seu nome:')
//   let nota1 = parseFloat(prompt('digite sua 1 nota:'));
//   let nota2 = parseFloat(prompt('digite sua 2 nota:'));
//   let nota3 = parseFloat(prompt('digite sua 3 nota:'));


//   registro.push({nome: nome});
//   let media = (nota1+nota2+nota3)/3;
//   notas.push(media)

//   continuar = prompt('deseja cadastrar novo aluno? (s/n):')
// }while(continuar.toLowerCase() ==='s')
//   console.log('Alunos cadastrados e suas médias:');
//   console.log(registro.map((aluno, index) => `${aluno.nome}: Média = ${notas[index].toFixed(2)}`).join('\n'));

//Exercício 3: Tentativas de Login

// const prompt = require ('prompt-sync')();
// let sistema = ['breno', 6607]
// let Login = false

// do{
//   let nomeusuario = prompt('digite seu usuario:');
//   let suasenha = parseFloat(prompt('digite sua senha:'));

//   if (nomeusuario === sistema[0] && suasenha === sistema[1]) {
//     console.log(`seja bem vindo ${sistema[0]}`);
//     login = true;
    
//   } else {
//     console.log('Usuário ou senha incorretos. Tente novamente.');
//     let tentarNovamente = prompt('Deseja tentar novamente? (s/n): ');
    
//     if (tentarNovamente.toLowerCase() !== 's') {
//       console.log('Saindo do sistema...');
//       login = true;
//     } else {
      
//     }
//   }

  
// }while(!login);

//Exercício 4: Calculadora de Potência

   const prompt = require ('prompt-sync')();
   let contamat = []; 
   let continuar = true;
do{
   let número = parseFloat(prompt('digite sua número:')); 
   let Potência = parseFloat(prompt('digite sua potência:'));

   let resultado = número ** Potência;

console.log(`${número} elevado a ${Potência} é igual a ${resultado}`);

     continuar = prompt('deseja fazer mais uma conta? (s/n):')
}while(continuar.toLowerCase() ==='s')

     
  