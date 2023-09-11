import React from "react";
import "./Blog.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faHeart, faUser} from '@fortawesome/free-solid-svg-icons'
import { faBehance, faDribbble, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Blog() {
  return (
    <>
      <Header />
      <div className="mainBlog">
        <div className="hero-caption">
          <h2>Blog Details</h2>
          <p>
            Far far away, behind the word mountains, far from the
            <br /> countries vokalia.
          </p>
        </div>
      </div>
      <div className="containerBlog">
        <div className="rowBlog">
          <div className="col-lg-8-Blog ">
            {/* <!-- SINGLE POST  --> */}
            <div className="single-post">
              {/* <!-- FUTURE IMG BASLADI --> */}
              <div className="feature-img">
                <img className="img-fluid" src={require("../../assets/single_blog_1.jpg.webp")} alt="" />
              </div>
              {/* <!-- future img bitti -->
                    <!--Blog Details BASLADI --> */}
              <div className="blog_details">
                <h2>
                  Second divided from form fish beast made every of seas all
                  gathered us saying he our
                </h2>
                <ul className="mb-4-Blog">
                  <li>
                    <a href="#">
                    <FontAwesomeIcon icon={faUser} />Travel, Lifestyle
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <FontAwesomeIcon icon={faComments} /> 03 Comments{" "}
                    </a>
                  </li>
                </ul>
                <p>
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have to spend money on
                  boot camp when you can get the MCSE study materials yourself
                  at a fraction of the camp price. However, who has the
                  willpower
                </p>
                <p>
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have to spend money on
                  boot camp when you can get the MCSE study materials yourself
                  at a fraction of the camp price. However, who has the
                  willpower to actually sit through a self-imposed MCSE
                  training. who has the willpower to actually
                </p>
                <div className="queto-wrapper">
                  <div className="queto">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower to actually sit through a self-imposed MCSE
                    training.
                  </div>
                </div>
                <p>
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have to spend money on
                  boot camp when you can get the MCSE study materials yourself
                  at a fraction of the camp price. However, who has the
                  willpower
                </p>
                <p>
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have to spend money on
                  boot camp when you can get the MCSE study materials yourself
                  at a fraction of the camp price. However, who has the
                  willpower to actually sit through a self-imposed MCSE
                  training. who has the willpower to actually
                </p>
              </div>
              {/* <!-- Blog Details BITTI --> */}
            </div>
            {/* <!-- SINGLE POST  FINISHED-->
                <!-- NAVIGATION TOP START --> */}

            <div className="navigation-top">
              <div className="first-navigation">
                <p className="like-info-left">
                  <span>
                    <FontAwesomeIcon icon={faHeart} />
                  </span>{" "}
                  Lily and 4 people like this
                </p>

                <div className="fnav-right">
                  <p>
                    <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} />   
                    </a>
                  </p>
                  <p>
                    <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </p>
                  <p>
                    <a href="#">
                    <FontAwesomeIcon icon={faDribbble} />    
                    </a>
                  </p>
                  <p>
                    <a href="#">
                    <FontAwesomeIcon icon={faBehance} />
                    </a>
                  </p>
                </div>
              </div>
              <div className="class2">
                <div className="left-img">
                  <a href="#">
                    <img src={require("../../assets/next.jpg.webp")} alt="" />
                  </a>
                  <div className="prev-div">
                    <p>Prev Post</p>
                    <a href="#">
                      <h4>Space The Final Frontier</h4>
                    </a>
                  </div>
                </div>
                <div className="right-img">
                  <div className="next-div">
                    <p>Next Post</p>
                    <a href="#">
                      <h4>Telescopes 101</h4>
                    </a>
                  </div>

                  

                  <a href={"#"}>
                    <img src={require("../../assets/preview.jpg.webp")} alt="" />
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- NAVIGATION TOP FINISHED -->
                <!-- BLOG AUTHOR --> */}
            <div className="blog-author">
              <div className="media-author">
                <img src={require("../../assets/author.png.webp")} alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>Harvard milan</h4>
                  </a>
                  <p>
                    Second divided from form fish beast made. Every of seas all
                    gathered use saying you're, he our dominion twon Second
                    divided from
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- BLOG AUTHOR FINISHED -->
                <!-- COMMENTS-AREA --> */}
            <div className="comments-area">
              <h4>05 Comments</h4>
              <div className="comment-list">
                <div className="single-comment">
                  <div className="user-1">
                    <div className="thumb">
                      <img src={require("../../assets/comment_1.png.webp")} alt="" />
                    </div>
                    <div className="desc">
                      <p className="comment">
                        Multiply sea night grass fourth day sea lesser rule open
                        subdue female fill which them Blessed, give fill lesser
                        bearing multiply sea night grass fourth day sea lesser
                      </p>
                      <div className="d-flex-Blog">
                        <div className="d-flex-1">
                          <h5>
                            <a href="#">Emilly Blunt</a>
                          </h5>
                          <p className="date">December 4, 2017 at 3:12 pm </p>
                        </div>
                        <div className="reply-btn text-uppercase">
                          <a href="#" className="btn-reply">
                            reply
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment-list">
                <div className="single-comment">
                  <div className="user-1">
                    <div className="thumb">
                      <img src={require("../../assets/comment_2.png.webp")} alt="" />
                    </div>
                    <div className="desc">
                      <p className="comment">
                        Multiply sea night grass fourth day sea lesser rule open
                        subdue female fill which them Blessed, give fill lesser
                        bearing multiply sea night grass fourth day sea lesser
                      </p>
                      <div className="d-flex-Blog">
                        <div className="d-flex-1">
                          <h5>
                            <a href="#">Emilly Blunt</a>
                          </h5>
                          <p className="date">December 4, 2017 at 3:12 pm </p>
                        </div>
                        <div className="reply-btn">
                          <a href="#" className="btn-reply text-uppercase">
                            reply
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment-list">
                <div className="single-comment ">
                  <div className="user-1">
                    <div className="thumb">
                      <img src={require("../../assets/comment_3.png.webp")} alt="" />
                    </div>
                    <div className="desc">
                      <p className="comment">
                        Multiply sea night grass fourth day sea lesser rule open
                        subdue female fill which them Blessed, give fill lesser
                        bearing multiply sea night grass fourth day sea lesser
                      </p>
                      <div className="d-flex-Blog">
                        <div className="d-flex-1">
                          <h5>
                            <a href="#">Emilly Blunt</a>
                          </h5>
                          <p className="date">December 4, 2017 at 3:12 pm </p>
                        </div>
                        <div className="reply-btn">
                          <a href="#" className="btn-reply text-uppercase">
                            reply
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- COMMENTS-AREA FINISHED -->
                <!-- COMMENTS-FORM --> */}
            <div className="comment-form">
              <h4>Leave a Reply</h4>
              <form className="form-contact">
                <div className="row-form">
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="comment"
                        id="comment"
                        cols="30"
                        rows="9"
                        placeholder="Write Comment"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="name"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="website"
                        type="text"
                        placeholder="Website"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className=" btn_1">
                    Post Comment
                  </button>
                </div>
              </form>
            </div>
            {/* <!-- COMMENT-FORM FINISHED --> */}
          </div>

          <div className="col-lg-4">
            <aside className="sidebar">
              <form action="#">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Keyword"
                  />
                  <div className="input-group-append">
                    <button className="boxed-btn2" type="button">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </aside>
            <aside className="sidebar">
              <h4 className="widget_title">Category</h4>
              <ul className="list_ul">
                <li>
                  <a href="#" className="li-link">
                    <p>Resaurant food</p>
                    <p>(37)</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="li-link">
                    <p>Travel news</p>
                    <p>(10)</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="li-link">
                    <p>Modern technology</p>
                    <p>(03)</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="li-link">
                    <p>Product</p>
                    <p>(11)</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="li-link">
                    <p>Inspiration</p>
                    <p>(21)</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="li-link">
                    <p>Health Care</p>
                    <p>(21)</p>
                  </a>
                </li>
              </ul>
            </aside>
            {/* <!-- ASIDE 3  --> */}
            <aside className="sidebar">
              <h3 className="widget_title">Recent Post</h3>
              <div className="media-post">
                <img src={require("../../assets/post_1.jpg.webp")} alt="post" />
                <div className="media-body">
                  <a href="#">
                    <h3>From life was you fish...</h3>
                  </a>
                  <p>January 12, 2019</p>
                </div>
              </div>
              <div className="media-post">
                <img src={require("../../assets/post_2.jpg.webp")} alt="post" />
                <div className="media-body">
                  <a href="#">
                    <h3>The Amazing Hubble</h3>
                  </a>
                  <p>02 Hours ago</p>
                </div>
              </div>
              <div className="media-post">
                <img src={require("../../assets/post_3.jpg.webp")} alt="post" />
                <div className="media-body">
                  <a href="#">
                    <h3>Astronomy Or Astrology</h3>
                  </a>
                  <p>03 Hours ago</p>
                </div>
              </div>
              <div className="media-post">
                <img src={require("../../assets/post_4.jpg.webp")} alt="post" />
                <div className="media-body">
                  <a href="#">
                    <h3>Asteroids telescope</h3>
                  </a>
                  <p>01 Hours ago</p>
                </div>
              </div>
            </aside>
            {/* <!-- ASIDE   4 --> */}
            <aside className="sidebar">
              <h4 className="widget_title">Tag Clouds</h4>
              <ul className="list_ul_2">
                <li>
                  <a href="#">project</a>
                </li>
                <li>
                  <a href="#">love</a>
                </li>
                <li>
                  <a href="#">technology</a>
                </li>
                <li>
                  <a href="#">travel</a>
                </li>
                <li>
                  <a href="#">restaurant</a>
                </li>
                <li>
                  <a href="#">life style</a>
                </li>
                <li>
                  <a href="#">design</a>
                </li>
                <li>
                  <a href="#">illustration</a>
                </li>
              </ul>
            </aside>
            {/* <!-- ASIDE  5 --> */}
            <aside className="sidebar">
              <h4 className="widget_title">Instagram Feeds</h4>
              <ul className="instagram_row ">
                <li>
                  <a href="#">
                    <img className="img-fluid" src={require("../../assets/post_5.jpg.webp")} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="img-fluid" src={require("../../assets/post_6.jpg.webp")} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="img-fluid" src={require("../../assets/post_7.jpg.webp")} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="img-fluid" src={require("../../assets/post_8.jpg.webp")} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="img-fluid" src={require("../../assets/post_9.jpg.webp")} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="img-fluid" src={require("../../assets/post_10.jpg.webp")} alt="" />
                  </a>
                </li>
              </ul>
            </aside>
            {/* ASIDE 6  */}
            <aside className="sidebar">
              <h4 className="widget_title">Newsletter</h4>
              <form action="#">
                <div className="form-group-last">
                  <input
                    type="email"
                    className="form-control-last"
                    placeholder="Enter email"
                  />
                </div>
                <button className="boxed-btn-last" type="submit">
                  Subscribe
                </button>
              </form>
            </aside>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
