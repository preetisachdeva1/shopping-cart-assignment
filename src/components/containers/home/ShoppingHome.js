import React, { Component } from "react";
import Header from "../../shared/Header";
import ProductList from "../../shared/ProductList";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoaded: false,
      error: null
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/categories")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            products: result,
          });
          console.log("dtaa", this.state.products, result);
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  render() {
    const { error, isLoaded, products } = this.state;
    let data;
    if (error) {
        data = <div className="text-center">Error: {error.message}</div>;
      } else if (!isLoaded) { 
        data = <div className="text-center">Loading...</div>;
    } else {
        data = products.filter(item=>item.enabled).map(item => (
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

export default Home;
