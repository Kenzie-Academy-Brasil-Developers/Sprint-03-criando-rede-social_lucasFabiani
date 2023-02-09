function createMenu() {
  const usuario = document.querySelector(".usuario");

  
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = "./src/assets/img/user1.png";
  img.alt = "";
  figure.appendChild(img);

  
  const divTeste = document.createElement("div");
  divTeste.className = "teste";
  const divLogin = document.createElement("div")
  divLogin.classList.add('divLogin')
  const divNome = document.createElement("div")  
  divLogin.appendChild(divNome);
  divLogin.appendChild(figure);
  const h2 = document.createElement("h2");
  h2.textContent = "Lucas Fabiani";
  divNome.appendChild(h2);
  const h3 = document.createElement("h3");
  h3.textContent = "Front end Engineer";
  divNome.appendChild(h3);

 
  
  usuario.appendChild(divLogin);
  usuario.appendChild(divTeste);

  
  const containerPublicacao = document.createElement("div");
  containerPublicacao.className = "container-publicacao";
  const inputTitulo = document.createElement("input");
  inputTitulo.type = "text";
  inputTitulo.className = "titulo";
  inputTitulo.placeholder = "Digitar título do post";
  containerPublicacao.appendChild(inputTitulo);
  const inputDescricao = document.createElement("input");
  inputDescricao.type = "text";
  inputDescricao.className = "descricao";
  inputDescricao.placeholder = "Digitar descrição do post";
  containerPublicacao.appendChild(inputDescricao);
  const button = document.createElement("button");
  button.textContent = "Postar";
  containerPublicacao.appendChild(button);



  button.addEventListener("click", function() {
var titulo = inputTitulo.value;
var descricao = inputDescricao.value;
if (!titulo || !descricao) {
alert("É obrigatório preencher tanto o título quanto a descrição da publicação");
return;
}
var novaPublicacao = {title: titulo, text: descricao, user: "Lucas Fabiani",stack:"Front end Engineer", img: "./src/assets/img/user1.png",likes:0,id:posts.length+1};
posts.unshift(novaPublicacao);
createFeed(posts);
});

  
  divTeste.appendChild(containerPublicacao);
  
  
}
createMenu();



  

function createFeed(array){
  const mainFeed = document.querySelector('.main-feed')
  mainFeed.innerHTML = ''
  array.forEach(post => {
    const publicacao = createFeedPublicacoes(post)
    mainFeed.appendChild(publicacao)
  });
}

function createCardSugestoes(array){
  const mainList = document.querySelector('.lista')  
  console.log(array)
  mainList.innerHTML = ''

  array.forEach(sugestao => {
    const card = createCard(sugestao)
    mainList.appendChild(card)
  });
}

function createCard(sugestao){
  const listUser = document.createElement('li') 
  const listNome = document.createElement('h3') 
  const listStack = document.createElement('h4')
  const listFigure = document.createElement('figure') 
  const divTeste = document.createElement('div') 
  const listImg = document.createElement('img') 
  const listButton = document.createElement('button') 


  listUser.classList.add('list-user')

  listNome.innerText = sugestao.user  
  listStack.innerText = sugestao.stack
  listImg.src = sugestao.img
  listImg.alt = sugestao.user  
  listButton.innerText = 'Seguir'
  listButton.classList.add('seguir')


  divTeste.classList.add('teste')
  
  divTeste.append(listNome,listStack)
  listFigure.appendChild(listImg)
  listUser.appendChild(listFigure)
  listUser.appendChild(divTeste)  
  divTeste.appendChild(listButton)

listButton.addEventListener("click", function() {
  if (listButton.innerText === 'Seguir') {
    listButton.innerText = 'Seguindo';
    listButton.classList.remove('seguir');
    listButton.classList.add('seguindo');
  } else {
    listButton.innerText = 'Seguir';
    listButton.classList.remove('seguindo');
    listButton.classList.add('seguir');
  }
});
  
  return listUser
}
createCardSugestoes(suggestUsers)




  

function createFeed(array){
  const mainFeed = document.querySelector('.main-feed')
  mainFeed.innerHTML = ''
  array.forEach(post => {
    const publicacao = createFeedPublicacoes(post)
    mainFeed.appendChild(publicacao)
  });
}

function createFeedPublicacoes(post){
  const listPost = document.createElement('h2')
  const divFeed = document.createElement('div')
  divFeed.classList.add('feed')
  const botoes = document.createElement('div')
  botoes.classList.add('container-botoes')
  const containerModal = document.createElement('div')
  containerModal.classList.add('BotaoModal')
  const buttonModal = document.createElement('button')
  buttonModal.classList.add('botaoModal')
  const buttonCoracao = document.createElement('button')
  buttonCoracao.classList.add('botaoCoracao')
  const buttonCompartilhar = document.createElement('button')
  buttonCompartilhar.classList.add('botaoCompartilhar')
  const feedBox = document.createElement('div')
  feedBox.classList.add('boxFeed')
  const boxPai = document.createElement('div')
  boxPai.classList.add('boxPai')
  const feedFigure = document.createElement('figure')
  const feedImg = document.createElement('img')
  const nomeFeed = document.createElement('div')
  nomeFeed.classList.add('boxNomeProfissao')
  const nome = document.createElement('h3')
  const feedStack = document.createElement('h4')
  const publicacaoFeed = document.createElement('div')
  publicacaoFeed.classList.add('publicacao')
  const tituloFeed = document.createElement('h3')
  const postagemFeed = document.createElement('p')
  const coracao = document.createElement('p')
  coracao.classList.add('coracao')
  const imgCoracao = document.createElement('img')
  const imgCompartilhar = document.createElement('img')


  listPost.innerText = 'Posts'
  buttonModal.innerHTML = 'Abrir Post'
  imgCoracao.src = "src/assets/img/heart.svg";
  imgCompartilhar.src = "src/assets/img/compartilhar.png"
  feedImg.src = post.img
  feedImg.alt = post.user
  nome.innerText = post.user
  feedStack.innerHTML = post.stack
  tituloFeed.innerHTML = post.title
  coracao.innerHTML = post.likes

 
  
  const postText = post.text;
const dotIndex = postText.indexOf(".");
const substringedText = postText.substring(0,dotIndex+1);
postagemFeed.innerHTML = dotIndex !== -1 ? `${substringedText}` : `${postText}`;
coracao.innerHTML = post.likes;
 


     

  
  divFeed.append(feedFigure,nomeFeed,feedBox)
  boxPai.append(feedBox,nomeFeed)
  feedBox.append(feedFigure,feedImg)
  feedFigure.appendChild(feedImg)
  nomeFeed.appendChild(nome)
  nomeFeed.appendChild(feedStack)
  publicacaoFeed.append(tituloFeed,postagemFeed)
  divFeed.appendChild(boxPai)
  divFeed.appendChild(publicacaoFeed)
  divFeed.appendChild(botoes)
  botoes.append(containerModal,buttonCoracao,coracao,buttonCompartilhar)
  containerModal.appendChild(buttonModal)
  buttonCoracao.appendChild(imgCoracao)
  buttonCompartilhar.appendChild(imgCompartilhar)
imgCoracao.classList.add('cinza')
imgCompartilhar.classList.add('branco')

 
  
 buttonCoracao.addEventListener("click", function() {
  if (imgCoracao.classList.contains('cinza')) {
    imgCoracao.src = "src/assets/img/vector.svg"    
    coracao.innerHTML = post.likes + 1
    imgCoracao.classList.toggle('cinza')
    console.log("chegou aqui")
    
  } else {
    imgCoracao.src = "src/assets/img/heart.svg"
    coracao.innerHTML = post.likes 
    imgCoracao.classList.toggle('cinza')
    
  }


});
 buttonCompartilhar.addEventListener("click", function() {
  if (imgCompartilhar.classList.contains('branco')) {    
    imgCompartilhar.src = "src/assets/img/compartilharverde.jpg"
    imgCompartilhar.classList.toggle('branco') 
  } else {

    imgCompartilhar.src = "src/assets/img/compartilhar.png"  
    imgCompartilhar.classList.toggle('branco')    
    
  }
});

 
   buttonModal.addEventListener("click", function() {
  const openModal = document.createElement('dialog')
  const tituloModal = document.createElement('h2')
  const descricaoModal = document.createElement('h3')
  const fotoModal = document.createElement('div')
  const figureModal = document.createElement('figure')
  const imgModal = document.createElement('img')
  const nomeModal = document.createElement('h2')  
  const profissaoModal = document.createElement('p')
  const fecharModal = document.createElement('p')
  const nomeProfissaoModal = document.createElement('div')
  fecharModal.classList.add('fechar-modal')


    openModal.appendChild(fotoModal) 
    openModal.appendChild(tituloModal)
    openModal.appendChild(descricaoModal)
    openModal.appendChild(fecharModal)

    fotoModal.append(figureModal,nomeProfissaoModal)
    
    figureModal.appendChild(imgModal)
    nomeProfissaoModal.append(nomeModal,profissaoModal)
    imgModal.src = post.img
    imgModal.alt = post.user
    nomeModal.innerHTML = post.user
    profissaoModal.innerHTML = post.stack
    tituloModal.innerHTML = post.title
    descricaoModal.innerHTML = post.text
    fecharModal.innerHTML = 'X'
    document.body.appendChild(openModal)
    openModal.showModal()

  fecharModal.addEventListener("click", function() {
      openModal.close();
    });
  });
  
  
  
  
  return divFeed
}

createFeed(posts)

