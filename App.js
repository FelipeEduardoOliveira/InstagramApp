
import React, { Component } from 'react';

import{ StyleSheet, View, Image, TouchableOpacity, FlatList} from 'react-native';

import Lista from  './src/components/lista';

class App extends Component{
    constructor(porps){
      super(porps);
      this.state = {
        feed: [
          {
            id: '1', 
            nome: 'Estevao Almeida', 
            descricao: 'Mais um dia de muitos bugs :)', 
            imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
            imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
            likeada: false, 
            likers: 1
           },
          {
            id: '2', 
            nome: 'Matheus', 
            descricao: 'Isso sim é ser raiz!!!!!', 
            imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
            imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
            likeada: false, 
            likers: 0
          },
          {
            id: '3', 
            nome: 'Jose Augusto', 
            descricao: 'Bora trabalhar Haha', 
            imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
            imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
            likeada: false, 
            likers: 3
          },
          {
            id: '4', 
            nome: 'Gustavo Henrique', 
            descricao: 'Isso sim que é TI!', 
            imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
            imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
            likeada: false, 
            likers: 1
          },
          {
            id: '5', 
            nome: 'Guilherme', 
            descricao: 'Boa tarde galera do insta...', 
            imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
            imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
            likeada: false, 
            likers: 23
          },
          {
            id: '6', 
            nome: 'Felipe Oliveira', 
            descricao: 'Se liga nesse meu projeto que acabei de fazer', 
            imgperfil: 'https://avatars3.githubusercontent.com/u/59943007?s=460&u=56ce2ac75669fc474c8c866a18cb9bc7326bb8e5&v=4', 
            imgPublicacao: 'https://cdn.dribbble.com/users/2108035/screenshots/5264194/instagram_premium_layout.gif',
            likeada: false, 
            likers: 32
          }
        ]
       };
    }

  render(){
    return(

      <View style={style.container}>   
            <View style={style.header}>
              <TouchableOpacity >    
                  <Image
                  source={require("./src/img/instagram.png")}
                  style={style.headerLogo} 
                  />  
              </TouchableOpacity>
                  
              <TouchableOpacity>
                  <Image
                  source={require("./src/img/send.png")}
                  style={style.headerSend} 
                  />  
              </TouchableOpacity>            
            
            </View>      

            <FlatList 
            showsVerticalScrollIndicator= {false}
            data={this.state.feed}
            renderItem={({item}) => <Lista data={item} />}

            />      
      </View>
    
    );
  }

}




const style = StyleSheet.create( {
  container:{
    flex: 1
  },

  header:{
    padding: 7,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.8,
    color: "#0000"
  },
  headerLogo:{
    height:20,
    width:90
  },
  headerSend:{
    height:30,
    width:30
  }
 });

export default App;
