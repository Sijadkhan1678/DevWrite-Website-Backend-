import React,{Fragment,useEffect} from 'react';
import ArticleItem from './ArticleItem'
import {getArticles} from '../../actions/articleActions';
import {connect} from 'react-redux'
import Preloader from '../layout/Preloader';
import propTypes from 'prop-types'

const Articles = ({articles:{articles,loading},getArticles}) => {
 
 useEffect(()=>{
   getArticles()
 },[articles])
 

  return (
    <Fragment>
    {
    !loading && articles===null ? <Preloader/>:
    articles.map(article => <ArticleItem key={article._id} article={article}/>)
      
    }
  
   </Fragment>



  )

}

Articles.propTypes={
  articles : propTypes.object.isRequired,
  getArticles: propTypes.func.isRequired,
  loading : propTypes.bool
}
const mapStateToProps = state => ({
  articles: state.articles
  
})

export default connect(
  mapStateToProps,
  { getArticles}
)(Articles);
