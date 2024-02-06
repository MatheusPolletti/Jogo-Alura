var carta1 = 
    {
      nome: "Bulbasauro", 
      imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg", /* Usei a mesma imagem em todos */
      atributos: 
        {
          ataque: 7,
          defesa: 8,
          magia: 6
        }
    };

var carta2 = 
    {
      nome: "Darth Vader",
      imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
      atributos:
       {
         ataque: 9,
         defesa: 8,
         magia: 2
       }
    };

var carta3 = 
    {
      nome: "Shiryu de dragão",
      imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
      atributos:
       {
         ataque: 5,
         defesa: 9,
         magia: 10
       }
    };

var carta4 = 
    {
      nome: "Gwen",
      imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
      atributos:
       {
         ataque: 3,
         defesa: 8,
         magia: 10
       }
    };

var carta5 = 
    {
      nome: "Montana",
      imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
      atributos:
       {
         ataque: 10,
         defesa: 7,
         magia: 0
       }
    };

var carta6 = 
    {
      nome: "Flash",
      imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
      atributos:
       {
         ataque: 9,
         defesa: 7,
         magia: 5
       }
    };

var carta7 = 
    {
      nome: "Ben10",
      imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
      atributos:
       {
         ataque: 10,
         defesa: 6,
         magia: 0
       }
    };

var carta8 = 
    {
      nome: "Rambo",
      imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
      atributos:
       {
         ataque: 8,
         defesa: 7,
         magia: 0
       }
    };

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];
var cartaMaquina = 0;
var cartajogador = 0;

function sortearCarta()
{
  var numeroCartaMaquina = parseInt(Math.random() * 8);
  cartaMaquina = cartas[numeroCartaMaquina];
  do
    {
      var numeroCartaJogador = parseInt(Math.random() * 8);
    } while (numeroCartaMaquina == numeroCartaJogador)
  cartaJogador = cartas[numeroCartaJogador];
  
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  
  exibirCartaJogador();
}

function obtemAtributoSelecionado()
{
  var radioAtributos = document.getElementsByName("atributo");
  
  for (var i = 0; i < radioAtributos.length; i++)
    {
      if (radioAtributos[i].checked == true)
        return radioAtributos[i].value
    }
}

function jogar()
{
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
  
  if (valorCartaJogador > valorCartaMaquina)
    {
      elementoResultado.innerHTML = "<p class = 'resultado-final'>Venceu</p>"
    }
  else if (valorCartaJogador < valorCartaMaquina)
      {
        elementoResultado.innerHTML = "<p class = 'resultado-final'>Perdeu</p>"
      }
  else
    {
      elementoResultado.innerHTML = "<p class = 'resultado-final'>Empate</p>"
    }
  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina()
}

function exibirCartaJogador()
{
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundimage = "url(" +  cartaJogador.imagem + ")";
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id = 'opcoes' class = 'carta-status' >";
  
  var opcoesTexto = ""
  
  for (var atributo in cartaJogador.atributos)
    {
      opcoesTexto += "<input type = 'radio' name = 'atributo' value = '" + atributo + "'>" + atributo + "" + cartaJogador.atributos[atributo] + "<br>";
    }
  var nome = `<p class = "carta-subtitle">${cartaJogador.nome}</p>`
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina()
{
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id = 'opcoes' class = 'carta-status' >";
  
  var opcoesTexto = ""
  
  for (var atributo in cartaMaquina.atributos)
    {
      opcoesTexto += "<p type = 'text' name = 'atributo' value = '" + atributo + "'>" + atributo + "" + cartaMaquina.atributos[atributo] + "</p>";
    }
  var nome = `<p class = "carta-subtitle">${cartaMaquina.nome}</p>`
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

/*
disabled
checked - Marcado
document.getElementsByName
console.log(cartaMaquina);
console.log(cartaJogador);
console.log(carta1.atributos.ataque)
console.log(cartas)
*/  
