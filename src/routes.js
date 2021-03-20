import React, { Component, Fragment } from 'react';
import { Route } from 'react-router';
import TopNav from './modules/nav/TopNav';
import Footer from './modules/nav/Footer';

// import modules here
import Home from './modules/home/Home';
import AboutUs from './modules/about/AboutUs';
import BookApt from './modules/bookapt/BookApt';
import Clinics from './modules/clinics/Clinics';
import ClinicDoctors from './modules/clinics/ClinicDoctors'
import Events from './modules/events/Events';
import QnA from './modules/qna/QnA';
import Blog from './modules/blog/Blog';
import BlogDetail from './modules/blog/BlogDetail';
import Partner from './modules/partner/Partner';



class AllRoutes extends Component {
  render() {
    return (
      <Fragment>
        <div className="content-wrapper">
          <TopNav/>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={AboutUs} />
          <Route exact path='/bookapt' component={BookApt}/>
          <Route exact path='/clinics' component={Clinics}/>
          <Route exact path='/clinics/:slug' component={ClinicDoctors}/>
          <Route exact path='/events' component={Events}/>
          <Route exact path='/qna' component={QnA}/>
          <Route exact path='/blog' component={Blog}/>
          <Route exact path='/blog/:slug' component={Blog}/>
          <Route exact path='/blogs/:slug' component={BlogDetail}/>
          <Route exact path='/partner/:slug' component={Partner}/>
        </div>
        <Footer/>
      </Fragment>
    );
  }
}

export default AllRoutes;