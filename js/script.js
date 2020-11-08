/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

const studentsPerPage = 9;
const linkList = document.querySelector('.link-list');


function showPage (list, page){

  const startIndex = (page * studentsPerPage) - studentsPerPage;
  const endIndex = page * studentsPerPage;
  //console.log(startIndex, endIndex);

  // select the element with a class of `student-list` and assign it to a variable - DONE
  
  const studentList = document.querySelector('.student-list');
  
  // set the innerHTML property of the variable you just created to an empty string - DONE

  studentList.innerHTML = ''; 
  
   const studentItem = '';

   for (let i = startIndex; i < endIndex; i += 1) {

      const studentLi = document.createElement('li');
      studentLi.className = 'student-item cf';

      const studentDetailsDiv = document.createElement('div');
      studentDetailsDiv.className = 'student-details';
      //console.log(studentDetailsDiv);

      const studentAvatar = document.createElement('img');
      studentAvatar.className = 'avatar';
      studentAvatar.src = list[i].picture.large;
      studentAvatar.alt = "Profile Picture";
      //console.log(studentAvatar);

      const studentNameHeadline = document.createElement('h3');
      studentNameHeadline.innerHTML = `${list[i].name.first} ${list[i].name.last}`;
      //console.log(studentNameHeadline);

      const studentEmail = document.createElement('span');
      studentEmail.className = 'email';
      studentEmail.innerHTML = list[i].email;
      //console.log(studentEmail);

      const studentJoinedDiv = document.createElement('div');
      studentJoinedDiv.className = 'joined-details';
      //console.log(studentJoinedDiv);

      
      const studentJoinedDate = document.createElement('span');
      studentJoinedDate.className = 'date';
      studentJoinedDate.innerHTML = `Joined ${list[i].registered.date}`;
      //console.log(studentJoinedDate);

      studentDetailsDiv.appendChild(studentAvatar);
      studentDetailsDiv.appendChild(studentNameHeadline);
      studentDetailsDiv.appendChild(studentEmail);
      studentJoinedDiv.appendChild(studentJoinedDate);

      studentLi.appendChild(studentDetailsDiv);
      studentLi.appendChild(studentJoinedDiv);
      //console.log(studentLi);    
      
      studentList.insertAdjacentElement('beforeend', studentLi);
         

   };
};

function addPagination (list) {

   let numPages = Math.ceil((list.length)/studentsPerPage);
   
   linkList.innerHTML = '';

   for (let i = 1; i <= numPages; i += 1) {
      let pageButtonLi = document.createElement('li');
      let pageButton = document.createElement('button');
      pageButton.innerHTML = [i];
      pageButtonLi.appendChild(pageButton);
      console.log(pageButtonLi);    
      linkList.insertAdjacentElement('beforeend', pageButtonLi);
      };

   
   const firstButton = linkList.firstElementChild.firstElementChild;
   firstButton.className = 'active';

   linkList.addEventListener('click', (e) => {
      if (e.target.tagName === "BUTTON") {
         const previousButton = document.querySelector('.active');
         previousButton.className = '';
         const clickedButton = e.target;
         clickedButton.className = 'active';
      }
   showPage (data, e.target.textContent);
   
   });

};
   
// Call functions
showPage (data, 1);
addPagination(data);