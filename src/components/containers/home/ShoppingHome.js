import React, { Component } from "react";
import Header from "../../shared/Header";
import ProductList from "../../shared/ProductList";
import { connect } from "react-redux";
import { fetchCategory }  from '../../../actions/categoryAction';

class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   products: [],
    //   isLoaded: false,
    //   error: null
    // };
  }
  componentDidMount() {
    this.props.dispatch(fetchCategory());
  }
  render() {
    //const { error, isLoaded, products } = this.state;'
    const { error, loading, category } = this.props;
    console.log("nice", category);
    let data;
    if (error) {
        data = <div className="text-center">Error: {error.message}</div>;
      } else if (loading) { 
        data = <div className="text-center">Loading...</div>;
    } else {
        data = category.filter(item=>item.enabled).map(item => (
            <ProductList key={item.id} data={item}/>
          ))
    }
    return (
      <>
        <Header />
        <div className="row">
          {data}                  
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  category: state.category.items,
  loading: state.category.loading,
  error: state.category.error
});


export  default connect(mapStateToProps)(Home);

//export default Home;
