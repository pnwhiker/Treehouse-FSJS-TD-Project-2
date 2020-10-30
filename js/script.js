/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


function showPage (list, page){

  // create two variables which will represent the index for the first and last student on the page - DONE (?)

  const startIndex = (page * 9) - 9;
  const endIndex = page * 9;

  // select the element with a class of `student-list` and assign it to a variable - DONE
  
  const studentList = document.querySelector('.student-list');
  
  // set the innerHTML property of the variable you just created to an empty string - DONE

  studentList.innerHTML = ''; 
  
   const studentItem = '';
   const li = document.createElement('li');
   li.className = 'student-item cf';
   console.log(li);
   const div1 = document.createElement('div');
   div1.className = 'student-details';

  for (let i = 0; i < list.length; i += 1) {
  
      if ( i >= startIndex && i <= endIndex ) {    
         
      };
      

   };
};


   
   



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
showPage (data);