import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions  from '../actions';

class Contact extends React.Component { 
  getNews = () => {
    this.props.getNews();
  }   
    render(){
      const news = this.props.news;
      const imgStyle = {
        hight: '100px',
        width: '100px',
        marginRight: "20px"
      };
      const wrapper = {
        display: "flex"
      }
      const articleStyle = {
        marginBottom: "20px",
        textAlign: "left"
      }
      return (
      <div>
        <button onClick={this.getNews}>GET NEWS</button>
        <div className="container">
            { news ? 
                  news.map((article, i) =>                                      
                     <article style={articleStyle} key={i}>
                       <div style={wrapper}>
                         <img style={imgStyle} src={article.urlToImage} alt="" />
                         <div>
                             <h3>{article.title}</h3>
                             <p>{article.description}</p>
                             <a href={article.url} target="_blank" rel="noopener noreferrer">READ MORE</a>
                         </div>
                       </div>
                     </article>                     
                  )  
               :
              null
            }
        </div>
      </div>
      
      )
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);  
}

function mapStateToProps(state) {
return {
  news: state.fetchNews.news,
};
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);