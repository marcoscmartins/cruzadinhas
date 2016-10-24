var manifest = [
    {src : "images/play.png", 		    type : createjs.LoadQueue.IMAGE, id : "playbutton"},
    {src : "images/settings.png",       type : createjs.LoadQueue.IMAGE, id : "settingsbutton"},
    {src : "images/trophy.png",         type : createjs.LoadQueue.IMAGE, id : "trophy"},
    {src : "images/logonoas.png", 	    type : createjs.LoadQueue.IMAGE, id : "logonoas"},
    {src : "images/noas.png", 		type : createjs.LoadQueue.IMAGE, id : "noas"},
    {src : "images/indicacao.png", 	type : createjs.LoadQueue.IMAGE, id : "indicacao"},
    {src : "images/titulo.png", 		type : createjs.LoadQueue.IMAGE, id : "titulo"},
    {src : "images/concentracao.png",  type : createjs.LoadQueue.IMAGE, id : "concentracao"},
    {src : "images/confirm.png",		type : createjs.LoadQueue.IMAGE, id : "confirmbutton"},
    {src : "images/opcoesbackground.png",type : createjs.LoadQueue.IMAGE, id : "opcoesbackground"},
    {src : "images/simplebackground.png",type : createjs.LoadQueue.IMAGE, id : "simplebackground"},
    {src : "images/fundo.png",    type : createjs.LoadQueue.IMAGE, id : "background"},
    {src : "images/cleanbutton.png",   type : createjs.LoadQueue.IMAGE, id : "cleanbutton"},
    {src : "images/cleanoptionbutton.png",   type : createjs.LoadQueue.IMAGE, id : "cleanoptionbutton"},
    // opções do menu
    {src : "images/home.png",            type : createjs.LoadQueue.IMAGE, id : "home"},
    {src : "images/info.png",            type : createjs.LoadQueue.IMAGE, id : "info"},
    {src : "images/midiaon.png",         type : createjs.LoadQueue.IMAGE, id : "midiaon"},
    {src : "images/midiaoff.png",        type : createjs.LoadQueue.IMAGE, id : "midiaoff"},
    {src : "images/fullscreenon.png",    type : createjs.LoadQueue.IMAGE, id : "fullscreenon"},
    {src : "images/fullscreenoff.png",   type : createjs.LoadQueue.IMAGE, id : "fullscreenoff"},
    // informacoes
    {src : "images/credits.png",                 type : createjs.LoadQueue.IMAGE, id : "credits"},
    {src : "images/informacoesbackground.png",   type : createjs.LoadQueue.IMAGE, id : "informacoesbackground"},
    // créditos
    {src : "images/creditosbackground.png",   type : createjs.LoadQueue.IMAGE, id : "creditosbackground"},
    // finalizacao
    {src : "images/novojogo.png", type : createjs.LoadQueue.IMAGE, id : "novojogobutton"},
    {src : "images/ranking.png",  type : createjs.LoadQueue.IMAGE, id : "rankingbutton"},
    // ranking
    {src : "images/rankingbackground.png",   type : createjs.LoadQueue.IMAGE, id : "rankingbackground"},
    // ajuda
    {src : "images/helpimage.png",   type : createjs.LoadQueue.IMAGE, id : "helpimage"},
    {src : "images/helpbutton.png",  type : createjs.LoadQueue.IMAGE, id : "helpbutton"},
    {src : "images/pecashelp.png",   type : createjs.LoadQueue.IMAGE, id : "pecashelp"},
    // images da cruzadinha 
    // level 1
    {src : "images/word/morangos.png",    type : createjs.LoadQueue.IMAGE, id : "morangos"},
    {src : "images/word/dados.png",       type : createjs.LoadQueue.IMAGE, id : "dados"},
    {src : "images/word/tesoura.png",     type : createjs.LoadQueue.IMAGE, id : "tesoura"},
    // level 2
    {src : "images/word/cadeado.png",     type : createjs.LoadQueue.IMAGE, id : "cadeado"},
    {src : "images/word/bananas.png",     type : createjs.LoadQueue.IMAGE, id : "bananas"},
    {src : "images/word/borboleta.png",   type : createjs.LoadQueue.IMAGE, id : "borboleta"},
    {src : "images/word/gato.png",        type : createjs.LoadQueue.IMAGE, id : "gato"},
    {src : "images/word/mala.png",        type : createjs.LoadQueue.IMAGE, id : "mala"},
    // level 3
    {src : "images/word/cenouras.png",    type : createjs.LoadQueue.IMAGE, id : "cenouras"},
    {src : "images/word/sorvete.png",     type : createjs.LoadQueue.IMAGE, id : "sorvete"},
    {src : "images/word/casa.png",        type : createjs.LoadQueue.IMAGE, id : "casa"},
    {src : "images/word/carro.png",       type : createjs.LoadQueue.IMAGE, id : "carro"},
    {src : "images/word/bola.png",        type : createjs.LoadQueue.IMAGE, id : "bola"},
    {src : "images/word/bota.png",        type : createjs.LoadQueue.IMAGE, id : "bota"},
    // level 4
    {src : "images/word/telefone.png",    type : createjs.LoadQueue.IMAGE, id : "telefone"},
    {src : "images/word/sino.png",        type : createjs.LoadQueue.IMAGE, id : "sino"},
    {src : "images/word/caju.png",        type : createjs.LoadQueue.IMAGE, id : "caju"},
    {src : "images/word/flor.png",        type : createjs.LoadQueue.IMAGE, id : "flor"},
    {src : "images/word/velas.png",       type : createjs.LoadQueue.IMAGE, id : "velas"},
    {src : "images/word/torta.png",       type : createjs.LoadQueue.IMAGE, id : "torta"},
    {src : "images/word/porta.png",       type : createjs.LoadQueue.IMAGE, id : "porta"},
    {src : "images/word/uvas.png",        type : createjs.LoadQueue.IMAGE, id : "uvas"},
    {src : "images/word/chaves.png",      type : createjs.LoadQueue.IMAGE, id : "chaves"},
    // level 5
    {src : "images/word/lapis.png",       type : createjs.LoadQueue.IMAGE, id : "lapis"},
    {src : "images/word/lampada.png",     type : createjs.LoadQueue.IMAGE, id : "lampada"},
    {src : "images/word/celular.png",     type : createjs.LoadQueue.IMAGE, id : "celular"},
    {src : "images/word/sapatos.png",     type : createjs.LoadQueue.IMAGE, id : "sapatos"},
    {src : "images/word/relogio.png",     type : createjs.LoadQueue.IMAGE, id : "relogio"},
    {src : "images/word/ventilador.png",  type : createjs.LoadQueue.IMAGE, id : "ventilador"},
    {src : "images/word/chapeu.png",      type : createjs.LoadQueue.IMAGE, id : "chapeu"},
    {src : "images/word/lixeira.png",     type : createjs.LoadQueue.IMAGE, id : "lixeira"},
    {src : "images/word/porco.png",       type : createjs.LoadQueue.IMAGE, id : "porco"},
    // level 6
    {src : "images/word/joaninha.png",     type : createjs.LoadQueue.IMAGE, id : "joaninha"},
    {src : "images/word/estrela.png",     type : createjs.LoadQueue.IMAGE, id : "estrela"},
    {src : "images/word/martelo.png",     type : createjs.LoadQueue.IMAGE, id : "martelo"},
    {src : "images/word/pena.png",        type : createjs.LoadQueue.IMAGE, id : "pena"},
    {src : "images/word/peixe.png",       type : createjs.LoadQueue.IMAGE, id : "peixe"},
    {src : "images/word/foguete.png",     type : createjs.LoadQueue.IMAGE, id : "foguete"},
    {src : "images/word/piano.png",       type : createjs.LoadQueue.IMAGE, id : "piano"},
    {src : "images/word/controle.png",    type : createjs.LoadQueue.IMAGE, id : "controle"},
    {src : "images/word/cofre.png",       type : createjs.LoadQueue.IMAGE, id : "cofre"},
    {src : "images/word/coco.png",        type : createjs.LoadQueue.IMAGE, id : "coco"},
    // level 7
    {src : "images/word/calculadora.png", type : createjs.LoadQueue.IMAGE, id : "calculadora"},
    {src : "images/word/cogumelo.png",    type : createjs.LoadQueue.IMAGE, id : "cogumelo"},
    {src : "images/word/computador.png",  type : createjs.LoadQueue.IMAGE, id : "computador"},
    {src : "images/word/muro.png",        type : createjs.LoadQueue.IMAGE, id : "muro"},
    {src : "images/word/roda.png",        type : createjs.LoadQueue.IMAGE, id : "roda"},
    {src : "images/word/disco.png",       type : createjs.LoadQueue.IMAGE, id : "disco"},
    {src : "images/word/alho.png",        type : createjs.LoadQueue.IMAGE, id : "alho"},
    {src : "images/word/lupa.png",        type : createjs.LoadQueue.IMAGE, id : "lupa"},
    {src : "images/word/bateria.png",     type : createjs.LoadQueue.IMAGE, id : "bateria"},
    {src : "images/word/cama.png",        type : createjs.LoadQueue.IMAGE, id : "cama"},
    {src : "images/word/caixa.png",       type : createjs.LoadQueue.IMAGE, id : "caixa"},
    {src : "images/word/livros.png",      type : createjs.LoadQueue.IMAGE, id : "livros"},
    // AUDIO
    {src : "audio/fase1.mp3",          type : createjs.LoadQueue.SOUND, id : "fase1"},
    {src : "audio/fase2.mp3",          type : createjs.LoadQueue.SOUND, id : "fase2"},
    {src : "audio/fase3.mp3",          type : createjs.LoadQueue.SOUND, id : "fase3"},
    {src : "audio/fase4.mp3",          type : createjs.LoadQueue.SOUND, id : "fase4"},
    {src : "audio/fase5.mp3",          type : createjs.LoadQueue.SOUND, id : "fase5"},
    {src : "audio/fase6.mp3",          type : createjs.LoadQueue.SOUND, id : "fase6"},
    {src : "audio/fase7.mp3",          type : createjs.LoadQueue.SOUND, id : "fase7"},
    {src : "audio/ajuda.mp3",          type : createjs.LoadQueue.SOUND, id : "ajuda"},
    {src : "audio/creditos.mp3",       type : createjs.LoadQueue.SOUND, id : "creditos"},
    {src : "audio/finalizacao.mp3",    type : createjs.LoadQueue.SOUND, id : "finalizacao"},
    {src : "audio/gameoverletras.mp3", type : createjs.LoadQueue.SOUND, id : "gameoverletras"},
    {src : "audio/gameovertempo.mp3",  type : createjs.LoadQueue.SOUND, id : "gameovertempo"},
    {src : "audio/informacoes.mp3",    type : createjs.LoadQueue.SOUND, id : "informacoes"},
    {src : "audio/instrucoes.mp3",     type : createjs.LoadQueue.SOUND, id : "instrucoes"},
    {src : "audio/opcoes.mp3",         type : createjs.LoadQueue.SOUND, id : "opcoes"},
    {src : "audio/ranking.mp3",        type : createjs.LoadQueue.SOUND, id : "ranking"},
    {src : "audio/sucesso.mp3",        type : createjs.LoadQueue.SOUND, id : "sucesso"},
    {src : "audio/titulo.mp3",         type : createjs.LoadQueue.SOUND, id : "titulosound"},
    {src : "audio/marimbamelody.mp3",  type : createjs.LoadQueue.SOUND, id : "musica"},
    {src : "audio/popphoenix.mp3",     type : createjs.LoadQueue.SOUND, id : "pop"},
    {src : "audio/right.mp3",          type : createjs.LoadQueue.SOUND, id : "right"},
    {src : "audio/wrong.mp3",          type : createjs.LoadQueue.SOUND, id : "wrong"}
];