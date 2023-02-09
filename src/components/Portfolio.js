import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-thirds s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <>
                      <div className="columns portfolio-item" key={item.huburl}>
                        <div className="portfolio-title">
                          <a
                            href={item.huburl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <h4>{item.name}</h4>
                            <img src="/images/link.png" alt=""></img>
                          </a>
                        </div>
                        <div className="item-wrap">
                          <img
                            src={`${item.imgurl}`}
                            className="item-img"
                            alt=""
                          />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.description}</h5>
                            </div>
                          </div>
                        </div>
                        <div className="portfolio-description">
                          <h5>{item.stack}</h5>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
