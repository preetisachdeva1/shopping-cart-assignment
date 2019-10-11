import React from "react";
import classnames from "classnames";

class Offer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 1
    };
    this.plusDivs = this.plusDivs.bind(this);
    this.currentDiv = this.currentDiv.bind(this);
  }

  plusDivs(n) {
    n = this.state.slideIndex + n;
    if (n > 5) {
      this.setState({ slideIndex: 1 });
    } else if (n < 1) {
      this.setState({ slideIndex: 5 });
    } else {
      this.setState({ slideIndex: n });
    }
  }
  showDivs(n) {}
  currentDiv(n) {
    this.setState({ slideIndex: n });
  }

  componentDidMount() {
    this.showDivs(this.slideIndex);
  }
  render() {
    return (
      <section className="content">
        {[1, 2, 3, 4, 5].map((val, i) => {
          return (
            <figure aria-label="offer">
              <img
                key={val}
                className={classnames({
                  "content-show": this.state.slideIndex === val,
                  "content-img": 1
                })}
                alt={`offer${val}`}
                src={`../../images/offers/offer${val}.jpg`}
              />
            </figure>
          );
        })}

        <nav className="nav" role="navigation">
          <button
            aria-label="previous"
            className="nav--arrow left"
            onClick={() => this.plusDivs(-1)}
          >
            PREV
          </button>
          <button
            aria-label="next"
            className="nav--arrow right"
            onClick={() => this.plusDivs(1)}
          >
            NEXT
          </button>
        </nav>
        <div className="nav nav-badge">
          {[1, 2, 3, 4, 5].map((val, i) => {
            return (
              <span
                className={classnames({
                  "nav--badge--selected": this.state.slideIndex === val,
                  "nav--badge": 1
                })}
                key={val}
                onClick={() => this.currentDiv(val)}
              ></span>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Offer;
