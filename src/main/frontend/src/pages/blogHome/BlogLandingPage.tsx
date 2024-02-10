import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Blog from '../blog';

const BlogLandingPage = () => {
    return (
      <div className='row'>
        <div className='col-sm-2'>
      <div className="card">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button type="button"  className="btn btn-primary" data-mdb-ripple-init>Button</button>
      </div>
    </div>
    </div>
    </div>
    );
};

export default BlogLandingPage;