// app.js

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

const blog = {
  title: "New Blog",
  body: "This is the content of the new blog.",
  userId: 1,
};

/*const addBlog = async () => {
    try{
     const response = await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(blog),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const json = await response.json();
  console.log('New Blog added:', json);
    }

    catch(error){console.log(error)}
 
};

 Example Usage
addBlog();

 app.js

 const fetchBlogs = async () => {
 try{
 const response = await fetch(apiUrl);
 const data = await response.json();
 console.log('All Blogs:', data);
 }
 catch(error){
     console.log(error)
 }



};

Example Usage
 fetchBlogs();

 app.js

 const blogId = 1; // Replace with the desired blog ID for testing

 const fetchBlog = async (id) => {
  try{
  const response = await fetch(`${apiUrl}/${id}`);
  const data = await response.json();
    console.log('Single Blog:', data);

     }
     catch(error){
        console.log(error)

    }
 };

Example Usage
 fetchBlog(blogId);

 app.js
 const blogIdToUpdate = 1; // Replace with the desired blog ID for testing
 const updatedData = { title: 'Updated Blog', body: 'This blog has been updated.' };

 const updateBlog = async (blogId, updatedData) => {
 try{const response = await fetch(`${apiUrl}/${blogId}`, {
     method: 'PUT',headers: {
    'Content-Type': 'application/json',
},   body: JSON.stringify(updatedData), });
   const updatedBlog = await response.json();
   console.log('Blog updated:', updatedBlog);
}
 catch(error){
    console.log(error);
 }
 };

 Example Usage
 updateBlog(blogIdToUpdate, updatedData);

 app.js
*/
const blogIdToDelete = 1; // Replace with the desired blog ID for testing

const deleteBlog = async (blogId) => {
  try {
    await fetch(`${apiUrl}/${blogId}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }

  console.log("Blog deleted successfully");
};

// Example Usage
deleteBlog(blogIdToDelete);
