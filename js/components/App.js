import React from 'react';
import Relay from 'react-relay/classic';

class App extends React.Component {
  render() {
    console.log(this.props.store)
    return (
      <div>
          {this.props.store.books.map((book,i)=>{
                return( <ul key={i}>
                  <li>
                Book Name :   {book.title}
                  </li>
                  <li>
                Author :  {book.author}
                  </li>
                  </ul>
                )
          })}
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
  store: ()=> Relay.QL`
    fragment on Store{
      books{
        id,
        title,
        author
      }
    }`

  },
});
