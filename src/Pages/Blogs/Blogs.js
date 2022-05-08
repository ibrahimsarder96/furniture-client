import React from 'react';

const Blogs = () => {
  return (
    <div className='container mt-3'>
      <h4> What is the purpose of jwt and how does it work?</h4>
      <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
      <h4> Differences between sql and nosql databases?</h4>
      <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
      <h4> When should you use nodejs and when should you use mongodb?</h4>
      <p>Nodejs: Node.js is an interpreter or runtime/ running environment for JavaScript.  built on Chrome's V8 JavaScript engine. responsibility is especially to execute your application.
      MongoDB: is a No-SQL database for storing data. when you need high availability of data with automatic, fast, and instant data recovery.</p>
      <h4>Difference between javascript and nodejs?</h4>
      <p>JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</p>
    </div>
  );
};

export default Blogs;