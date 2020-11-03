/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

function blockBuilder () {};



function showPage (list, page){

  // create two variables which will represent the index for the first and last student on the page - DONE (?)

  const startIndex = (page * 9) - 9;
  const endIndex = page * 9;

  // select the element with a class of `student-list` and assign it to a variable - DONE
  
  const studentList = document.querySelector('.student-list');
  
  // set the innerHTML property of the variable you just created to an empty string - DONE

  studentList.innerHTML = ''; 
  
   const studentItem = '';

   
   //console.log(studentLi);
   
   
   // console.log(studentDetailsDiv);

   
   

   const studentNameHeadline = document.createElement('h3');
   // console.log(studentNameHeadline);

   const studentEmail = document.createElement('span');
   studentEmail.className = 'email';
   // console.log(studentEmail);

   const studentJoinedDiv = document.createElement('div');
   studentJoinedDiv.className = 'joined-details';
   // console.log(studentJoinedDiv);

   const studentJoinedDate = document.createElement('span');
   studentJoinedDate.className = 'date';
   // console.log(studentJoinedDate);

   for (let i = 0; i < list.length; i += 1) {

      const studentLi = document.createElement('li');
      studentLi.className = 'student-item cf';

      const studentDetailsDiv = document.createElement('div');
      studentDetailsDiv.className = 'student-details';

      const studentAvatar = document.createElement('img');
      studentAvatar.className = 'avatar';
      studentAvatar.src = list[i].picture.large;
      studentAvatar.alt = "Profile Picture";
      //console.log(studentAvatar);




         
         

   };
};


   
   



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
showPage (data);