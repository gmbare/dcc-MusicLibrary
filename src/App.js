import axios from "axios";
import  { useEffect, useState } from 'react';


export default function App() {

  const [musicLibrary, setmusicLibrary] = useState([{}]);
  const musicAPI = async () => {
    let library = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
        // .then((response) => response.data)
        // .catch(err => {
        //   console.log("ERROR in API call: ")
        //   console.error(err)
        // });
        console.log(library.data)
        setmusicLibrary(library.data)
  }

  useEffect(() => {
    musicAPI();
  },[]);

  return (
    <div className="App">{musicLibrary.map((song, index) => {
      return(
        <div key={index}>
          <span>{song.title}</span>  
        </div>
      )
    })}</div>
  )

}
// export default class MusicLibrary extends React.Component{

// state = {
//         music:[]
// }
// componentDidMount(){
//     // this.makeGetRequest();
//     axios.get('http://www.devcodecampmusiclibrary.com/api/music').then(res => {
//         const music = res.data;
//         this.setState({music});
//     })
// }



//     // async makeGetRequest(){
//     //     try{
//     //         console.log("Hello")
//     //         let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
//     //         console.log(response.data)
//     //     }
//     //     catch (ex){
//     //         console.log('Error in API call!');
//     //     }
//     // }

// render(){
//     console.log(this.state.music)
//     console.log('Um')
//     return(
//         <ul>
//             {this.state.music.map(song => <li key={song.id}>{song.name}</li>)}
//         </ul>
//     )
// }
// }






// // import './App.css';
// // import API from './Components/API/API.js';


// // function App() {
// //   return (
// //     <div className="App">
// //       hello
// //     </div>
// //   );
// // }

// // export default App;
