import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <section id="top">
                <header>
                    <div className="container">
                        <div className="header-top">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="full">
                                        <div className="logo">
                                            <a href="index.html"><img src="images/logo.png" alt="#" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="right_top_section">
                                        {/* <!-- social icon --> */}
                                        <ul className="social-icons pull-left">
                                            <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a className="youtube" href="#"><i className="fa fa-youtube-play"></i></a></li>
                                            <li><a className="pinterest" href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                        </ul>
                                        {/* <!-- end social icon --> */}
                                        {/* <!-- button section --> */}
                                        <ul className="login">
                                            <li className="login-modal">
                                                <Link to="Login" className="login"><i className="fa fa-user"></i>Login</Link>
                                            </li>
                                            
                                            <li className="login-modal">
                                                <Link to="/dashboard/bookings" className="login"><i className="fa fa-user"></i>Dashboard</Link>
                                            </li>
                                            <li className="Dashboard-modal">
                                                <a href="#" className="login"><i className="fa fa-user"></i>{loggedInUser.name}</a>
                                            </li>

                                        </ul>
                                        {/* <!-- end button section --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-bottom">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="full">
                                        <div className="main-menu-section">
                                            <div className="menu">
                                                <nav className="navbar navbar-inverse">
                                                    <div className="navbar-header">
                                                        <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".js-navbar-collapse">
                                                            <span className="sr-only">Toggle navigation</span>
                                                            <span className="icon-bar"></span>
                                                            <span className="icon-bar"></span>
                                                            <span className="icon-bar"></span>
                                                        </button>
                                                        <a className="navbar-brand" href="#">Menu</a>
                                                    </div>
                                                    <div className="collapse navbar-collapse js-navbar-collapse">
                                                        <ul className="nav navbar-nav">
                                                            <li className="active"><a href="index.html">Home</a></li>
                                                            <li><a href="about.html">About</a></li>
                                                            <li><a href="team.html">Team</a></li>

                                                            <li className="dropdown mega-dropdown">
                                                                <a href="match" className="dropdown-toggle" data-toggle="dropdown">Tournaments<span className="caret"></span></a>
                                                                <ul className="dropdown-menu mega-dropdown-menu">
                                                                    <li className="col-sm-8">
                                                                        <ul>
                                                                            <li className="dropdown-header">Men Collection</li>
                                                                            <div id="menCollection" className="carousel slide" data-ride="carousel">
                                                                                <div className="carousel-inner">
                                                                                    <div className="item active">
                                                                                        <div className="banner-for-match"><a href="#"><img className="img-responsive" src="images/match-banner1.jpg" alt="#" /></a></div>
                                                                                    </div>
                                                                                    {/* <!-- End Item --> */}
                                                                                    <div className="item">
                                                                                        <div className="banner-for-match"><a href="#"><img className="img-responsive" src="images/match-banner1.jpg" alt="#" /></a></div>
                                                                                    </div>
                                                                                    {/* <!-- End Item --> */}
                                                                                    <div className="item">
                                                                                        <div className="banner-for-match"><a href="#"><img className="img-responsive" src="images/match-banner1.jpg" alt="#" /></a></div>
                                                                                    </div>
                                                                                    {/* <!-- End Item -->                                 */}
                                                                                </div>
                                                                                {/* <!-- End Carousel Inner --> */}
                                                                                {/* <!-- Controls --> */}
                                                                                <a className="left carousel-control" href="#menCollection" role="button" data-slide="prev">
                                                                                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                                                                    <span className="sr-only">Previous</span>
                                                                                </a>
                                                                                <a className="right carousel-control" href="#menCollection" role="button" data-slide="next">
                                                                                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                                                                    <span className="sr-only">Next</span>
                                                                                </a>
                                                                            </div>
                                                                            {/* <!-- /.carousel --> */}
                                                                        </ul>
                                                                    </li>
                                                                    <li className="col-sm-4">
                                                                        <ul className="menu-inner">
                                                                            <li className="dropdown-header">Next Matchs</li>
                                                                            <li><a href="#">Team 1 vs Team 2</a></li>
                                                                            <li><a href="#">Team 3 vs Team 4</a></li>
                                                                            <li><a href="#">Team 1 vs Team 2</a></li>
                                                                            <li><a href="#">Team 3 vs Team 4</a></li>
                                                                            <li><a href="#">Team 1 vs Team 2</a></li>
                                                                            <li><a href="#">Team 3 vs Team 4</a></li>
                                                                            <li><a href="#">Team 1 vs Team 2</a></li>
                                                                            <li><a href="#">Team 3 vs Team 4</a></li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="blog.html">Blog</a></li>
                                                            <li><a href="contact.html">contact</a></li>
                                                        </ul>
                                                    </div>
                                                    {/* <!-- /.nav-collapse --> */}
                                                </nav>
                                                <div className="search-bar">
                                                    <div id="imaginary_container">
                                                        <div className="input-group stylish-input-group">
                                                            <input type="text" className="form-control" placeholder="Search" />
                                                            <span className="input-group-addon">
                                                                <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="full-slider">
                    <div id="carousel-example-generic" className="carousel slide">
                        {/* <!-- Indicators --> */}
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>
                        {/* <!-- Wrapper for slides --> */}
                        <div className="carousel-inner" role="listbox">
                            {/* <!-- First slide --> */}
                            <div className="item active deepskyblue" data-ride="carousel" data-interval="5000">
                                <div className="carousel-caption">
                                    <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12"></div>
                                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                        <div className="slider-contant" data-animation="animated fadeInRight">
                                            <h3> <span className="color-header-text">Join Us For The Best<br /></span>
                                                <span className="color-dark-blue">Practice You Derserve</span><br /> <span className="color-yellow">To win!</span> </h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem,<br />
                              standard dummy text ever since the 1500s,..
                              </p>
                                            <button className="btn btn-primary btn-lg">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /.item --> */}
                            {/* <!-- Second slide --> */}
                            <div className="item skyblue" data-ride="carousel" data-interval="5000">
                                <div className="carousel-caption">
                                    <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12"></div>
                                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                        <div className="slider-contant" data-animation="animated fadeInRight">
                                            <h3> <span className="color-header-text">Join Us For The Best<br /></span>
                                                <span className="color-dark-blue">Practice You Derserve</span><br /> <span className="color-yellow">To win!</span> </h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem,<br />
                              standard dummy text ever since the 1500s,..
                              </p>
                                            <button className="btn btn-primary btn-lg">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /.item --> */}
                            {/* <!-- Third slide --> */}
                            <div className="item darkerskyblue" data-ride="carousel" data-interval="5000">
                                <div className="carousel-caption">
                                    <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12"></div>
                                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                        <div className="slider-contant" data-animation="animated fadeInRight">
                                            <h3> <span className="color-header-text">Join Us For The Best<br /></span>
                                                <span className="color-dark-blue">Practice You Derserve</span><br /> <span className="color-yellow">To win!</span> </h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem,<br />
                              standard dummy text ever since the 1500s,..
                              </p>
                                            <button className="btn btn-primary btn-lg">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /.item --> */}
                        </div>
                        {/* <!-- /.carousel-inner --> */}
                        {/* <!-- Controls --> */}
                        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    {/* <!-- /.carousel --> */}

                </div>
            </section>
        </div>
    );
};

export default Header;