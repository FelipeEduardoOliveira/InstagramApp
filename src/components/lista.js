
import React, { Component } from 'react';
import{ StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';


class Lista extends Component{
    
        constructor(props){
          super(props);
          this.state = {
            feed: this.props.data
          }
          this.mostraLike = this.mostraLike.bind(this);
          this.like = this.like.bind(this);
          this.trocaIcone - this.trocaIcone.bind(this);
        }

        mostraLike(like){

            let feed = this.state.feed;

            if(feed.likers <= 0){
              return;
            }
            return(
              <Text style={style.likeText}>
                {feed.likers} {feed.likers > 1 ? "Curtidas": "Curtida"}
              </Text>
            );
        }

        like(){
          let feed = this.state.feed;

          if(feed.likeada === true){
              this.setState({
                feed:{
                  ...feed,
                likers: feed.likers - 1,
                likeada: false
                }
                
              })
          }else{
            
            this.setState({
              feed:{
                ...feed,
              likers: feed.likers + 1,
              likeada: true
              }
              
            })
          }
        }

        trocaIcone(likeada){
          return likeada ? require('../img/heartRed.png') : require('../img/heart.png')
        }
  render(){
    return(

      <View style={style.container}>   
                <View style={style.listaHeader}>
                  <Image
                  source={({uri: this.state.feed.imgperfil})} 
                  style={style.fotoPerfil}
                  />
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>{this.state.feed.nome}</Text>
                </View>
                <View style={style.listaPost}>
                    <Image
                    resizeMode='cover'
                    style={style.listaPublicacao}
                    source={({uri: this.state.feed.imgPublicacao})}
                    />

                    <View style={style.iconBar}>
                    <TouchableOpacity onPress={this.like}>
                          <Image
                            source={(this.trocaIcone(this.state.feed.likeada))} 
                            style={style.icon}
                          />
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                      <Image
                        source={(require('../img/send.png'))} 
                        style={style.icon}
                      />
                    </TouchableOpacity>
                    </View>

                      {this.mostraLike(this.state.feed.likers)}

                    <Text style={style.listaNome}>
                      {this.state.feed.nome}
                    </Text>

                    <Text style={style.listaDesc}>
                      {this.state.feed.descricao}
                    </Text>
                </View>
      </View>
    
    );
  }

}




const style = StyleSheet.create( {
  container:{
    flex: 1,
    backgroundColor: '#0000',
    marginVertical: 5
  },
  listaHeader:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingLeft: 10,
  },
  fotoPerfil:{
    width: 45,
    height: 45,
    borderRadius: 25,
    // marginLeft: 10,
    marginRight: 8
  },
  listaPublicacao:{
    width: '100%',
    height: 400
  },
  listaDesc:{
    marginLeft:5,
    paddingVertical: 5,
    borderBottomWidth: 0.5
  },
  listaNome:{
    marginLeft:5,
    paddingVertical: 5,
    fontSize: 14,
    fontWeight: 'bold'
  },
  iconBar:{
    flexDirection: 'row'
  },
  icon:{
    width:30,
    height: 30,
    marginHorizontal:4,
    marginVertical: 5
  },
  likeText:{
    fontWeight: 'bold',
    marginLeft:5,
  }
  
 });

export default Lista;
