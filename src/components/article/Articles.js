import React,{Fragment,useEffect} from 'react';
import ArticleItem from './ArticleItem'
import {getArticles} from '../../actions/articleActions';
import {connect} from 'react-redux'
import Preloader from '../layout/Preloader';
import propTypes from 'prop-types'

const Articles = ({articles,getArticles}) => {
 
 useEffect(()=>{
   getArticles()
 },[articles])
 

  return (
    <Fragment>
    {
    loading && articles==null ? <Preloader/>:
    articles.map(article => <ArticleItem key={article._id} article={article}/>)
      
    }
  
   </Fragment>



  )

}

Articles.propTypes={
  articles : propTypes.object.isRequired,
  getArticles: propTypes.func.isRequired,
  loading : propTypes.bool.isRequired
}
const mapStateToProps = state => ({
  articles: state.articles.articles,
  loading: state.loading
})

export default connect(
  mapStateToProps,
  { getArticles}
)(Articles);
