import React from 'react';
import Header from '../Shared/Header/Header';
import '../Blog/Blog.css'

const Blog = () => {
    return (
        <div>
            <Header></Header>
            <div className="container my-blog">
                <div>
                    <h2 className='mt-5 mb-3'>Difference between Authorization and Authentication</h2>
                    <p> <b>Authentication</b>  and <b>Authorization</b>  are the first line of defense to prevent confidential data from falling into the wrong hands. The identity of users are checked for providing the access to the system in <b>Authentication</b> process. This is the first step in security process. <b>Authentication</b> process complete with Password, Biometric, Authentication apps. <br /> In system security <b>Authorization</b> is the process of giving the user permission for access a specific function. <b>Authorization</b> what users can and can not access. this is usually done after successful <b>Authentication</b>. Mainly <b>Authorization</b> give permission user to download a particular file from server ar can get administrive access.
                    </p>
                </div>
                <div className='mt-5'>
                    <h2 className='mt-5 mb-3'>Why Should use firebase? what is alternative of firebase</h2>
                    <p>Using <b>Firebase</b> is make lot easier for any kind api or hostinng. <b>Firebase</b> can be used on Web developmont, for  mobile apps, gaming and so other facilities. For making user we dont need any help cause of firebase. and it has more security then any other like this. Firebase has lots of alternative like <b>Okta</b>, <b>Auth0</b>, <b>Passport</b>, <b>MongoDB</b></p>
                </div>
                <div className='mt-5'>
                    <h2 className='mt-5 mb-3'>What can we do without authentication in firebase</h2>
                    <p>In Firebase with out Authentication we can do lots uf usefull things. we can keep file database there. we can host any kind of app from there. we can also learn coding and built game there. and also we can study in machine learning</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;